/**
 * POST /api/submit — "Submit your game" form handler (Vercel Serverless Function).
 *
 * Nothing here is simulated: if no delivery channel is configured the endpoint answers
 * 503 { error: "not_configured" } and the site tells the visitor so (and shows the direct email).
 *
 * Delivery channels (configure one or both in Vercel → Project → Settings → Environment Variables):
 *   1) Email via Resend  (https://resend.com)
 *        RESEND_API_KEY   re_xxx...
 *        SUBMIT_FROM      "GoGo Games Site <submissions@your-verified-domain.com>"   (domain verified in Resend)
 *        SUBMIT_TO        optional, defaults to gogogamesinteractive@gogogames.com.br
 *   2) Database via Supabase (table SQL in README.md)
 *        SUPABASE_URL          https://xxxx.supabase.co
 *        SUPABASE_SERVICE_KEY  service_role key (server-side only — never expose it in the browser)
 *        SUPABASE_TABLE        optional, defaults to game_submissions
 */

const DEFAULT_TO = 'gogogamesinteractive@gogogames.com.br';
const NEEDS = ['Publishing', 'Porting', 'Studio partnership'];
const hits = new Map(); // best-effort per-instance rate limit

function clean(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function validate(b) {
  const f = {};
  if (!b.studio) f.studio = 'sub.err.required';
  if (!b.game) f.game = 'sub.err.required';
  if (!b.email) f.email = 'sub.err.required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(b.email)) f.email = 'sub.err.email';
  if (b.link) {
    try {
      const u = new URL(b.link);
      if (!/^https?:$/.test(u.protocol) || !u.hostname.includes('.')) f.link = 'sub.err.url';
    } catch (e) {
      f.link = 'sub.err.url';
    }
  }
  return f;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const hasResend = !!(process.env.RESEND_API_KEY && process.env.SUBMIT_FROM);
  const hasSupabase = !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY);
  if (!hasResend && !hasSupabase) return res.status(503).json({ ok: false, error: 'not_configured' });

  // simple rate limit: 5 submissions / 10 min / IP
  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 600000);
  if (recent.length >= 5) return res.status(429).json({ ok: false, error: 'rate_limited' });

  let raw = req.body;
  if (typeof raw === 'string') {
    try { raw = JSON.parse(raw); } catch (e) { raw = {}; }
  }
  raw = raw || {};
  const b = {
    studio: clean(raw.studio, 120),
    game: clean(raw.game, 120),
    email: clean(raw.email, 160),
    link: clean(raw.link, 300),
    message: clean(raw.message, 2000),
    need: NEEDS.includes(raw.need) ? raw.need : 'Publishing',
    lang: raw.lang === 'pt' ? 'pt' : 'en',
    key: clean(raw.idempotencyKey, 80),
  };
  const fields = validate(b);
  if (Object.keys(fields).length) return res.status(400).json({ ok: false, error: 'validation', fields });

  hits.set(ip, [...recent, now]);
  const errors = [];

  if (hasResend) {
    const html = `<h2>New game submission — ${esc(b.need)}</h2>
      <p><b>Studio:</b> ${esc(b.studio)}<br><b>Game:</b> ${esc(b.game)}<br><b>Email:</b> ${esc(b.email)}<br>
      <b>Link:</b> ${b.link ? `<a href="${esc(b.link)}">${esc(b.link)}</a>` : '—'}<br><b>Site language:</b> ${b.lang}</p>
      <p style="white-space:pre-wrap">${esc(b.message) || '—'}</p>`;
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
          ...(b.key ? { 'Idempotency-Key': b.key } : {}),
        },
        body: JSON.stringify({
          from: process.env.SUBMIT_FROM,
          to: [process.env.SUBMIT_TO || DEFAULT_TO],
          reply_to: b.email,
          subject: `[${b.need}] ${b.game} — ${b.studio}`,
          html,
        }),
      });
      if (!r.ok) errors.push(`resend:${r.status}`);
    } catch (e) {
      errors.push('resend:network');
    }
  }

  if (hasSupabase) {
    try {
      const table = process.env.SUPABASE_TABLE || 'game_submissions';
      const r = await fetch(`${process.env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${table}`, {
        method: 'POST',
        headers: {
          apikey: process.env.SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal,resolution=ignore-duplicates',
        },
        body: JSON.stringify({ studio: b.studio, game: b.game, email: b.email, link: b.link || null, message: b.message || null, need: b.need, lang: b.lang, idempotency_key: b.key || null }),
      });
      if (!r.ok) errors.push(`supabase:${r.status}`);
    } catch (e) {
      errors.push('supabase:network');
    }
  }

  const channels = (hasResend ? 1 : 0) + (hasSupabase ? 1 : 0);
  if (errors.length >= channels) {
    console.error('submit failed', errors);
    return res.status(502).json({ ok: false, error: 'delivery_failed' }); // every configured channel failed
  }
  if (errors.length) console.error('partial delivery', errors); // at least one channel stored the submission
  return res.status(200).json({ ok: true });
};

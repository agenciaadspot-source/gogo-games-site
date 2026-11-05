import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Controller, MODEL_W, BLUE, ORANGE } from './controller.js';
import { GAMES, PORTS, DIRECT, CHANNEL_URL, CONTACT_EMAIL, gameUrl } from './data.js';
import { t, setLang, detectLang, onLang, getLang } from './i18n.js';

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------------------------------- helpers */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, k) => a + (b - a) * k;
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const fmt = (n, d = 0) => n.toLocaleString(getLang() === 'pt' ? 'pt-BR' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const isTouch = matchMedia('(hover:none),(pointer:coarse)').matches;
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
const MQ = "(max-width:900px)"; // flowing layout for phones / small tablets only — every other screen keeps the full animated experience
const MOBILE = matchMedia(MQ).matches;
const MAXDT = location.search.includes('rt') ? 1 : 0.05; // ?rt → real-time stepping (slow software-GL test runs)
const pad2 = (n) => String(n).padStart(2, '0');
document.documentElement.classList.toggle('is-m', MOBILE);
document.documentElement.classList.toggle('is-touch', isTouch);

// the layout is chosen once (pinned desktop vs. flowing mobile); reload if the breakpoint is crossed
let resizeT;
addEventListener('resize', () => {
  clearTimeout(resizeT);
  resizeT = setTimeout(() => {
    if (matchMedia(MQ).matches !== MOBILE) location.reload();
  }, 350);
});

/* ---------------------------------------------------------------- language */
const dynamic = []; // re-render hooks for text that is generated in JS
setLang(detectLang(), { persist: false });
$$('.lang button').forEach((b) =>
  b.addEventListener('click', () => {
    setLang(b.dataset.lang);
    const u = new URL(location.href);
    u.searchParams.set('lang', b.dataset.lang);
    history.replaceState(null, '', u);
  })
);

/* ---------------------------------------------------------------- split words */
function splitWords(el) {
  const walk = (n) =>
    [...n.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) f.append(' ');
          else {
            const o = document.createElement('span');
            o.className = 'w';
            o.innerHTML = `<span>${w}</span>`;
            f.append(o);
          }
        });
        c.replaceWith(f);
      } else walk(c);
    });
  walk(el);
}
$$('.split-words').forEach(splitWords);
onLang(() =>
  $$('.split-words').forEach((el) => {
    splitWords(el);
    gsap.set($$('.w>span', el), { clearProps: 'all' });
  })
);

/* ---------------------------------------------------------------- barcode */
function barcode(svg, seed = 7) {
  let x = 0, out = '', e = seed * 97 + 7;
  const rnd = () => (e = (e * 9301 + 49297) % 233280) / 233280;
  while (x < 250) {
    const w = 1 + Math.floor(rnd() * 3);
    if (rnd() > 0.35) out += `<rect x="${x}" y="${rnd() > 0.8 ? 14 : 0}" width="${w}" height="40"/>`;
    x += w + 1;
  }
  svg.setAttribute('viewBox', '0 0 250 40');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.innerHTML = out;
}

/* ---------------------------------------------------------------- smooth scroll */
const lenis = new Lenis({ lerp: 0.09, smoothWheel: !reduced && !MOBILE, syncTouch: false });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((ms) => lenis.raf(ms * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop();
const goTo = (target, duration = 1.8) => lenis.scrollTo(target, { duration: reduced ? 0 : duration, offset: MOBILE ? -64 : 0 });
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.getAttribute('href').length < 2) return;
  const tgt = $(a.getAttribute('href'));
  if (tgt) {
    e.preventDefault();
    closeMenu(false);
    goTo(tgt);
  }
});

/* ---------------------------------------------------------------- mobile menu */
const burger = $('#burger'), mnav = $('#mnav');
let menuOpen = false;
function setBurgerLabel() {
  burger.setAttribute('aria-label', t(menuOpen ? 'nav.menuClose' : 'nav.menuOpen'));
}
function openMenu() {
  menuOpen = true;
  mnav.hidden = false;
  requestAnimationFrame(() => mnav.classList.add('is-open'));
  burger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  lenis.stop();
  setBurgerLabel();
  $('a', mnav).focus({ preventScroll: true });
}
function closeMenu(restoreFocus = true) {
  if (!menuOpen) return;
  menuOpen = false;
  mnav.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  if (!document.body.classList.contains('is-loading') && vm.hidden) lenis.start();
  setBurgerLabel();
  setTimeout(() => !menuOpen && (mnav.hidden = true), 380);
  if (restoreFocus) burger.focus({ preventScroll: true });
}
burger.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
mnav.addEventListener('click', (e) => {
  if (!e.target.closest('a')) closeMenu(); // tap outside the links
});
addEventListener('keydown', (e) => e.key === 'Escape' && menuOpen && closeMenu());
onLang(setBurgerLabel);

/* ---------------------------------------------------------------- 3D controller */
let gp = null;
try {
  gp = new Controller($('.gp-canvas'), { mobile: MOBILE });
} catch (err) {
  console.warn('WebGL unavailable — using static fallback', err);
  $('.gp-canvas').remove();
  document.documentElement.classList.add('no-webgl');
}
addEventListener('resize', () => gp && gp.resize());

/* ---------------------------------------------------------------- pointer + cursor */
const mouse = { x: innerWidth / 2, y: innerHeight / 2, nx: 0, ny: 0, active: false };
addEventListener('pointermove', (e) => {
  if (e.pointerType === 'touch') return;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.nx = (e.clientX / innerWidth) * 2 - 1;
  mouse.ny = (e.clientY / innerHeight) * 2 - 1;
  mouse.active = true;
});
const cursor = $('.cursor');
if (!isTouch && cursor) {
  document.documentElement.classList.add('has-cursor');
  const dot = $('.cursor-dot'), ring = $('.cursor-ring'), label = $('.cursor-label');
  let cx = mouse.x, cy = mouse.y;
  gsap.ticker.add(() => {
    cx = lerp(cx, mouse.x, 0.18);
    cy = lerp(cy, mouse.y, 0.18);
    dot.style.transform = `translate(${mouse.x}px,${mouse.y}px)`;
    ring.style.transform = `translate(${cx}px,${cy}px)`;
  });
  addEventListener('pointerover', (e) => {
    const c = e.target.closest('[data-cursor]');
    if (c) { label.textContent = c.dataset.cursor; cursor.classList.add('is-label'); }
    else cursor.classList.remove('is-label');
  });
  addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  addEventListener('pointerup', () => cursor.classList.remove('is-down'));
  $$('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4 });
    });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,.4)' }));
  });
}

/* ---------------------------------------------------------------- shared game-link helpers */
const ROSTER = [...GAMES, DIRECT];
const N = ROSTER.length;
const kickLabel = (g, i) => `${pad2(i + 1)} — ${g.video ? t('games.kickShow') : t('games.kick')}`;
function actionsHtml(g) {
  if (g.video)
    return `<button type="button" class="btn btn--solid" data-video="${g.video}" data-cursor="play"><span>${t('link.video')}</span><i aria-hidden="true">▶</i></button>
      <a class="btn btn--line" href="${CHANNEL_URL}" target="_blank" rel="noopener"><span>${t('link.channel')}</span><i aria-hidden="true">↗</i></a>`;
  const url = gameUrl(g);
  if (url)
    return `<a class="btn btn--solid" href="${url}" target="_blank" rel="noopener" data-cursor="play"><span>${t('link.steamLong')}</span><i aria-hidden="true">▶</i></a>`;
  // no verified official page yet — see TODO in src/data.js
  return `<span class="btn btn--line is-disabled" aria-disabled="true" data-todo="official-link"><span>${t('link.soon')}</span></span>`;
}
const coverAlt = (g) => (g.video ? t('vm.title') : `${g.name} — ${t('games.alt')}`);

/* static porting links */
function setupPortLinks() {
  $$('[data-steam]').forEach((a) => {
    const g = PORTS.find((x) => x.id === a.dataset.steam);
    const u = g && gameUrl(g);
    if (u) a.href = u;
  });
  $$('[data-game]').forEach((a) => {
    const g = PORTS.find((x) => x.id === a.dataset.game);
    const u = g && gameUrl(g);
    if (u) a.href = u;
  });
  const pm = $('#port-mail');
  if (pm) pm.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('port.mailSubject'))}`;
}
setupPortLinks();
dynamic.push(setupPortLinks);

/* ---------------------------------------------------------------- HERO: mode menu + preview card */
const MODES = {
  games: { led: BLUE, list: GAMES, card: 'list', stat: ['12', ''] },
  publishing: { led: ORANGE, list: [DIRECT], card: 'direct', stat: ['08', ''] },
  porting: { led: '#ffffff', list: PORTS, card: 'list', stat: ['04', ''] },
  studios: { led: BLUE, list: [], card: 'studios', stat: ['20', '+'] },
};
const MODE_KEYS = Object.keys(MODES);
const hs = { mode: 'games', idx: 0, paused: false, t: 0, cardT: 0 };
const hcImg = $('.hc-img'), hcName = $('.hc-name'), hcIdx = $('.hc-idx'), hcA = $('.hc-trailer'), hcB = $('.hc-find');
const statNum = $('.stat-num'), statSuf = $('.stat-suf'), statLabel = $('.stat-label');
const statVal = { v: 12 };

function cardItem(mode, i) {
  const m = MODES[mode];
  if (m.card === 'direct')
    return { src: DIRECT.src, alt: t('vm.title'), name: t('hero.directName'), a: { href: DIRECT.url, label: t('hero.watch'), video: DIRECT.video }, b: { href: CHANNEL_URL, label: t('hero.channel') }, seed: 11, fit: 'cover-wide' };
  if (m.card === 'studios')
    return { src: 'assets/img/studios.webp', alt: t('pt.stuAlt'), name: t('hero.studiosName'), a: { href: '#partners', label: t('hero.meet') }, b: { href: '#submit', label: t('hero.submitDown') }, seed: 23, fit: 'contain' };
  const g = m.list[i % m.list.length], url = gameUrl(g);
  return { src: g.src, alt: coverAlt(g), name: g.name, a: url ? { href: url, label: t('link.steam') } : { soon: true, label: t('link.soon') }, b: null, seed: i + 2, fit: 'cover' };
}
function setCard(item, i, total, animate = true) {
  hcIdx.textContent = `${pad2(i + 1)}/${pad2(total)}`;
  hcImg.src = item.src;
  hcImg.alt = '';
  hcImg.dataset.fit = item.fit;
  $('.hc-link').setAttribute('aria-label', item.alt);
  hcName.textContent = item.name;
  const set = (el, l, hide) => {
    el.hidden = !l;
    if (!l) return;
    el.textContent = l.label;
    el.removeAttribute('data-video');
    el.classList.toggle('is-disabled', !!l.soon);
    if (l.soon) { el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); return; }
    el.removeAttribute('aria-disabled');
    el.href = l.href;
    if (l.video) el.dataset.video = l.video;
    const ext = /^https?:/.test(l.href) && !l.video;
    el.target = ext ? '_blank' : '';
    el.rel = ext ? 'noopener' : '';
  };
  set(hcA, item.a);
  set(hcB, item.b);
  barcode($('.barcode'), item.seed);
  if (animate && !reduced) gsap.fromTo(hcImg, { clipPath: 'inset(0 0 100% 0)', scale: 1.08 }, { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 0.8, ease: 'expo.out' });
}
function renderMode(key, { user = false, keepIdx = false, animate = true } = {}) {
  const m = MODES[key];
  hs.mode = key;
  if (!keepIdx) { hs.idx = 0; hs.t = 0; hs.cardT = 0; }
  $$('.menu button').forEach((b) => {
    const on = b.dataset.mode === key;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-pressed', on);
  });
  $('.mm-val').textContent = `${pad2(MODE_KEYS.indexOf(key) + 1)}/04`;
  const d = $('.menu-desc');
  d.textContent = t(`hero.desc.${key}`);
  if (animate && !reduced) gsap.fromTo(d, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out' });
  statLabel.innerHTML = t(`hero.stat.${key}`);
  statSuf.textContent = m.stat[1];
  const to = parseFloat(m.stat[0]);
  if (animate && !reduced) {
    gsap.to(statVal, { v: to, duration: 0.9, ease: 'power3.out', onUpdate: () => (statNum.textContent = pad2(Math.round(statVal.v))) });
    gsap.fromTo('.stat-pill', { scale: 0.92 }, { scale: 1, duration: 0.8, ease: 'elastic.out(1,.5)' });
  } else { statVal.v = to; statNum.textContent = pad2(to); }
  const total = m.card === 'list' ? m.list.length : 1;
  setCard(cardItem(key, hs.idx), hs.idx, total, animate);
  if (gp) {
    gp.setLed(m.led);
    if (animate) gp.press();
    if (user && !reduced) gp.doSpin();
  }
}
$$('.menu button').forEach((b) => b.addEventListener('click', () => renderMode(b.dataset.mode, { user: true })));
$('.panel-pause').addEventListener('click', (e) => {
  hs.paused = !hs.paused;
  e.currentTarget.setAttribute('aria-pressed', hs.paused);
});
$('.s-hero').addEventListener('click', (e) => {
  if (!e.target.closest('.hero-panel,.hero-card,.hero-brand,.nav,a,button') && gp && !reduced) { gp.doFlip(); gp.press(); }
});
function heroAuto(dt) {
  if (hs.paused || reduced || document.hidden) return;
  const m = MODES[hs.mode];
  hs.t += dt;
  const dur = 7;
  $('.mm-bar i').style.transform = `scaleX(${clamp(hs.t / dur, 0, 1)})`;
  if (m.card === 'list') {
    hs.cardT += dt;
    if (hs.cardT > 3.4) {
      hs.cardT = 0;
      hs.idx = (hs.idx + 1) % m.list.length;
      setCard(cardItem(hs.mode, hs.idx), hs.idx, m.list.length);
    }
  }
  if (hs.t >= dur) renderMode(MODE_KEYS[(MODE_KEYS.indexOf(hs.mode) + 1) % MODE_KEYS.length]);
}
dynamic.push(() => renderMode(hs.mode, { keepIdx: true, animate: false }));

/* ---------------------------------------------------------------- HERO: ambient glyph field */
const rainC = $('.rain-canvas'), rctx = rainC.getContext('2d');
let rain = [], heroOn = true;
function sizeRain() {
  const r = rainC.getBoundingClientRect(), d = Math.min(devicePixelRatio, MOBILE ? 1.25 : 2);
  rainC.width = r.width * d;
  rainC.height = r.height * d;
  rctx.setTransform(d, 0, 0, d, 0, 0);
  rain = Array.from({ length: MOBILE ? 28 : 90 }, () => ({ x: Math.random() * r.width, y: Math.random() * r.height, z: Math.random(), k: Math.floor(Math.random() * 5), a: Math.random() * 6.28 }));
}
sizeRain();
addEventListener('resize', sizeRain);
let rainAcc = 0;
function drawRain(dt) {
  if (!heroOn || reduced) return;
  rainAcc += dt;
  if (MOBILE && rainAcc < 1 / 30) return; // 30fps is plenty for background glyphs on phones
  const step = rainAcc; rainAcc = 0;
  const w = rainC.clientWidth, h = rainC.clientHeight;
  rctx.clearRect(0, 0, w, h);
  const sp = hs.paused ? 0.15 : 1, vel = Math.abs(lenis.velocity || 0);
  rctx.lineCap = 'round';
  for (const p of rain) {
    const v = (14 + p.z * 46) * (1 + vel * 0.08) * sp;
    p.x += v * step * 0.55 + mouse.nx * p.z * 12 * step;
    p.y += v * step;
    p.a += step * (0.2 + p.z * 0.6) * sp;
    if (p.y > h + 30 || p.x > w + 30) { p.y = -30; p.x = Math.random() * (w + 200) - 200; }
    const s = 5 + p.z * 13;
    rctx.save();
    rctx.translate(p.x, p.y);
    rctx.rotate(p.a);
    rctx.strokeStyle = `rgba(255,255,255,${0.1 + p.z * 0.32})`;
    rctx.lineWidth = 0.8 + p.z * 1.1;
    rctx.beginPath();
    switch (p.k) {
      case 0: rctx.rect(-s / 2, -s / 2, s, s); break;
      case 1: rctx.arc(0, 0, s / 2, 0, 6.283); break;
      case 2: rctx.moveTo(-s / 2, 0); rctx.lineTo(s / 2, 0); rctx.moveTo(0, -s / 2); rctx.lineTo(0, s / 2); break;
      case 3: rctx.moveTo(0, -s / 2); rctx.lineTo(s / 2, s / 2); rctx.lineTo(-s / 2, s / 2); rctx.closePath(); break;
      default: rctx.moveTo(-s / 2, -s / 2); rctx.lineTo(s / 2, s / 2); rctx.moveTo(s / 2, -s / 2); rctx.lineTo(-s / 2, s / 2);
    }
    rctx.stroke();
    rctx.restore();
  }
}

/* ---------------------------------------------------------------- OUR GAMES — desktop reel + mobile carousel */
const gsBg = $('.gs-bg'), gsCards = $('#gs-cards'), gsCh = $('#gs-chapters'), gsRoster = $('#gs-roster');
let bgImgs = [], cards = [], chs = [], rosterBtns = [], activeIdx = -1;

function buildReel() {
  gsBg.innerHTML = gsCards.innerHTML = gsCh.innerHTML = gsRoster.innerHTML = '';
  $('.osd-of').textContent = `/ ${pad2(N)}`;
  ROSTER.forEach((g, i) => {
    gsBg.insertAdjacentHTML('beforeend', `<img class="gs-bgimg" src="${g.src}" alt="" aria-hidden="true" decoding="async" loading="lazy">`);
    gsCards.insertAdjacentHTML('beforeend', `<div class="gs-card" style="--ar:${g.w / g.h}"><img src="${g.src}" alt="${coverAlt(g)}" width="${g.w}" height="${g.h}" decoding="async" loading="lazy"><i class="gs-shine"></i></div>`);
    gsCh.insertAdjacentHTML('beforeend', `<article class="gs-ch" aria-hidden="true"><span class="gs-kick mono">${kickLabel(g, i)}</span><h3>${g.video ? t('hero.directName').replace(' · ', '<br>') : g.name}</h3><div class="gs-actions">${actionsHtml(g)}</div></article>`);
    gsRoster.insertAdjacentHTML('beforeend', `<li><button type="button" data-i="${i}" aria-label="${g.video ? t('hero.directName') : g.name}" data-cursor="go"><img src="${g.src}" alt="" width="${g.w}" height="${g.h}" loading="lazy" decoding="async"><b class="mono">${pad2(i + 1)}</b></button></li>`);
  });
  bgImgs = $$('.gs-bgimg'); cards = $$('.gs-card'); chs = $$('.gs-ch'); rosterBtns = $$('#gs-roster button');
  rosterBtns.forEach((b) =>
    b.addEventListener('click', () => {
      const i = +b.dataset.i, st = en.games, p = 0.13 + ((i + 0.5) / N) * 0.78;
      lenis.scrollTo(st.start + p * (st.end - st.start), { duration: reduced ? 0 : 1.4 });
    })
  );
  const last = activeIdx; activeIdx = -1;
  if (last >= 0) setActive(last);
}
function setActive(i) {
  if (i === activeIdx) return;
  activeIdx = i;
  bgImgs.forEach((e, k) => e.classList.toggle('is-on', k === i));
  cards.forEach((e, k) => { e.classList.toggle('is-active', k === i); e.classList.toggle('is-past', k < i); });
  chs.forEach((e, k) => { e.classList.toggle('is-active', k === i); e.classList.toggle('is-past', k < i); e.setAttribute('aria-hidden', k !== i); });
  rosterBtns.forEach((e, k) => { e.classList.toggle('is-on', k === i); e.setAttribute('aria-current', k === i ? 'true' : 'false'); });
  $('.osd-idx').textContent = $('.osd-game').textContent = $('.osd-lvl').textContent = pad2(i + 1);
}

buildReel();
dynamic.push(buildReel);

// game index tape in the reel HUD
if (!MOBILE) {
  let tape = '';
  for (let r = 0; r < 3; r++) for (let i = 1; i <= 18; i++) tape += `<span class="${i % 3 === 1 ? 'major' : ''}">${pad2(((i - 1) % N) + 1)}</span>`;
  $('.compass-tape').innerHTML = tape;
}

/* ---------------------------------------------------------------- video modal (GoGo Direct) */
const vm = $('#vmodal');
let vmOpener = null;
function openVideo(id, opener) {
  vmOpener = opener || document.activeElement;
  vm.hidden = false;
  $('.vm-frame').innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${t('vm.title')}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen"></iframe>`;
  document.body.classList.add('vm-open');
  lenis.stop();
  $('.vm-close').focus();
}
function closeVideo() {
  vm.hidden = true;
  $('.vm-frame').innerHTML = '';
  document.body.classList.remove('vm-open');
  if (!document.body.classList.contains('is-loading') && !menuOpen) lenis.start();
  vmOpener && vmOpener.focus && vmOpener.focus({ preventScroll: true });
}
document.addEventListener('click', (e) => {
  const v = e.target.closest('[data-video]');
  if (v) { e.preventDefault(); openVideo(v.dataset.video, v); }
  else if (e.target === vm) closeVideo();
});
$('.vm-close').addEventListener('click', closeVideo);
addEventListener('keydown', (e) => e.key === 'Escape' && !vm.hidden && closeVideo());

/* ---------------------------------------------------------------- WHAT WE DO */
const callouts = $$('.callouts .callout'), lines = $('.anat-lines');
lines.innerHTML = callouts.map(() => '<path/><circle r="4"/><circle class="ring" r="9"/>').join('');
if (MOBILE) {
  // phones: after the animated exploded view, the same services as tap-to-open cards (first one open)
  const list = document.createElement('div');
  list.className = 'svc-list only-m';
  callouts.forEach((c) => {
    const k = c.cloneNode(true);
    k.removeAttribute('data-anchor');
    list.appendChild(k);
  });
  $('.s-anat').appendChild(list);
  const cards2 = $$('.callout', list);
  cards2.forEach((c, i) => {
    c.setAttribute('role', 'button');
    c.setAttribute('tabindex', '0');
    c.classList.toggle('is-open', i === 0);
    c.setAttribute('aria-expanded', i === 0);
    const toggle = (e) => {
      if (e.target.closest('a')) return;
      const open = !c.classList.contains('is-open');
      cards2.forEach((o) => { o.classList.toggle('is-open', o === c && open); o.setAttribute('aria-expanded', o === c && open); });
    };
    c.addEventListener('click', toggle);
    c.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle(e)));
  });
}

/* ---------------------------------------------------------------- ABOUT */
const sc = $('.sense-canvas'), sx = sc.getContext('2d');
function sizeSense() {
  const d = Math.min(devicePixelRatio, 2);
  sc.width = sc.clientWidth * d;
  sc.height = sc.clientHeight * d;
  sx.setTransform(d, 0, 0, d, 0, 0);
}
sizeSense();
addEventListener('resize', sizeSense);
const dodge = { x: 0, y: 0, vx: 0, vy: 0, count: 0, alert: false, was: false };
let senseOn = false, aboutVis = false, touchPt = null, touchT = 0;
const aboutEl = $('.s-sense');
const setTouch = (e) => { if (e.pointerType === 'touch' || isTouch) { touchPt = { x: e.clientX, y: e.clientY }; clearTimeout(touchT); touchT = setTimeout(() => (touchPt = null), 1600); } };
['pointerdown', 'pointermove'].forEach((ev) => aboutEl.addEventListener(ev, setTouch, { passive: true }));
const getPt = () => (isTouch ? touchPt : mouse.active ? mouse : null);
new IntersectionObserver(([e]) => (aboutVis = e.isIntersecting)).observe($('.s-sense'));
const wob = (a, tt) => Math.sin(a * 1.3 + tt * 0.7) * 0.5 + Math.sin(a * 0.37 - tt * 1.1 + 2) * 0.7 + Math.sin(a * 2.1 + tt * 2.7) * 0.2;
function drawSense(ctr) {
  const w = sc.clientWidth, h = sc.clientHeight, tm = performance.now() / 1000;
  sx.clearRect(0, 0, w, h);
  const rows = MOBILE ? 18 : 34, cols = MOBILE ? 36 : 70, sweep = (tm * 0.25) % 1;
  for (let r = 0; r < rows; r++) {
    const k = r / rows, y0 = h * 0.45 + Math.pow(k, 1.6) * h * 0.62, sp = 0.5 + k * 1.6, hot = 1 - Math.min(1, Math.abs(k - sweep) * 8);
    for (let c = 0; c < cols; c++) {
      const u = c / (cols - 1) - 0.5, x = w / 2 + u * w * sp, y = y0 - wob(u * 8, k * 6 + tm * 0.15) * 26 * (1 - k * 0.3), a = 0.08 + k * 0.3 + hot * 0.6;
      sx.fillStyle = hot > 0.1 ? `rgba(238,${110 - hot * 30},${40 - hot * 20},${a})` : `rgba(47,171,223,${a * 0.7})`;
      sx.fillRect(x, y, 1.4 + k * 1.2, 1.4 + k * 1.2);
    }
  }
  if (!ctr) return;
  const { x: a, y: l } = ctr, top = sc.getBoundingClientRect().top, hy = l - top;
  for (let p = 1; p <= 4; p++) {
    sx.strokeStyle = `rgba(255,255,255,${0.14 - p * 0.02})`;
    sx.lineWidth = 1;
    sx.beginPath(); sx.arc(a, hy, 70 * p + Math.sin(tm * 2 + p) * 3, 0, 6.283); sx.stroke();
  }
  const grad = sx.createConicGradient ? sx.createConicGradient(tm * 2.2, a, hy) : null;
  if (grad) {
    grad.addColorStop(0, 'rgba(47,171,223,.30)'); grad.addColorStop(0.12, 'rgba(47,171,223,0)'); grad.addColorStop(1, 'rgba(47,171,223,0)');
    sx.fillStyle = grad; sx.beginPath(); sx.arc(a, hy, 290, 0, 6.283); sx.fill();
  }
  const pt = getPt();
  if (pt) {
    const py = pt.y - top, d = Math.hypot(pt.x - a, py - hy), near = d < 260;
    sx.setLineDash([4, 6]);
    sx.strokeStyle = near ? 'rgba(238,91,28,.95)' : 'rgba(255,255,255,.35)';
    sx.beginPath(); sx.moveTo(a, hy); sx.lineTo(pt.x, py); sx.stroke();
    sx.setLineDash([]);
    sx.strokeStyle = near ? '#ee5b1c' : 'rgba(255,255,255,.6)';
    sx.strokeRect(pt.x - 14, py - 14, 28, 28);
    if (near) {
      const g = Math.atan2(py - hy, pt.x - a);
      sx.strokeStyle = '#ee5b1c'; sx.lineWidth = 4; sx.beginPath(); sx.arc(a, hy, 120, g - 0.5, g + 0.5); sx.stroke(); sx.lineWidth = 1;
    }
    sx.fillStyle = '#fff';
    sx.font = '11px "Geist Mono", monospace';
    sx.fillText(`${fmt(d / 40, 1)} u`, pt.x + 20, py - 18);
  }
}

/* ---------------------------------------------------------------- PORTING / SUBMIT */
const galTrack = $('.gal-track'), galImgs = $$('.gc-img img'), mq = $('.mq-track');
let galP = 0, mqX = 0;
$$('.sw').forEach((s) =>
  s.addEventListener('click', () => {
    $$('.sw').forEach((o) => { o.classList.toggle('is-on', o === s); o.setAttribute('aria-checked', o === s); });
    gp && (gp.setColor(s.dataset.color), gp.press());
  })
);

/* ---- form ---- */
const form = $('#submit-form'), note = $('#form-note'), submitBtn = $('#submit-btn');
let need = $('.kit.is-on').dataset.need, needKey = $('.kit.is-on').dataset.needI18n;
const FORM_ENDPOINT = (document.querySelector('meta[name="gogo-form-endpoint"]') || {}).content || '/api/submit';
let sending = false, lockedUntil = 0, idemKey = crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
$$('.kit').forEach((k) =>
  k.addEventListener('click', () => {
    $$('.kit').forEach((o) => { o.classList.toggle('is-on', o === k); o.setAttribute('aria-checked', o === k); });
    need = k.dataset.need; needKey = k.dataset.needI18n;
    $('.cta-kit').textContent = t(needKey);
    gp && gp.press();
  })
);
dynamic.push(() => { $('.cta-kit').textContent = t(needKey); if (form.dataset.invalid) validate(true); });
$('.cta-kit').textContent = t(needKey);

const validators = {
  studio: (v) => (v ? '' : 'sub.err.required'),
  game: (v) => (v ? '' : 'sub.err.required'),
  email: (v) => (!v ? 'sub.err.required' : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'sub.err.email'),
  link: (v) => {
    if (!v) return '';
    try { const u = new URL(v); return /^https?:$/.test(u.protocol) && u.hostname.includes('.') ? '' : 'sub.err.url'; } catch (e) { return 'sub.err.url'; }
  },
};
function validate(show = true) {
  let first = null, ok = true;
  Object.keys(validators).forEach((name) => {
    const el = form.elements[name], err = $(`#e-${name}`), key = validators[name](el.value.trim());
    el.setAttribute('aria-invalid', key ? 'true' : 'false');
    err.textContent = show && key ? t(key) : '';
    if (key) { ok = false; first = first || el; }
  });
  form.dataset.invalid = ok ? '' : '1';
  return { ok, first };
}
Object.keys(validators).forEach((name) => {
  const el = form.elements[name];
  el.addEventListener('blur', () => el.value && validate(true));
  el.addEventListener('input', () => { if (el.getAttribute('aria-invalid') === 'true') validate(true); });
});
// the note is stored as a function so it re-renders in the new language when the visitor switches
let noteFn = null, noteKind = '';
const renderNote = () => { note.className = `form-note ${noteKind}`; note.innerHTML = noteFn ? noteFn() : ''; };
const setNote = (fn, kind = '') => { noteFn = typeof fn === 'function' ? fn : null; noteKind = kind; renderNote(); };
dynamic.push(renderNote);
const mailLink = () => `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (sending) return;
  if (Date.now() < lockedUntil) return setNote(() => t('sub.ok'), 'is-ok');
  const { ok, first } = validate(true);
  if (!ok) { setNote(() => t('sub.err.fix'), 'is-err'); first.focus(); return; }
  if (form.elements.website.value) return; // honeypot: silently drop bots
  sending = true;
  submitBtn.disabled = true;
  submitBtn.classList.add('is-loading');
  $('.cta-label').textContent = t('sub.sending');
  setNote('');
  gp && gp.press();
  const payload = {
    need, lang: getLang(), idempotencyKey: idemKey,
    studio: form.elements.studio.value.trim(), game: form.elements.game.value.trim(), email: form.elements.email.value.trim(),
    link: form.elements.link.value.trim(), message: form.elements.msg.value.trim(),
  };
  const ctl = new AbortController();
  const to = setTimeout(() => ctl.abort(), 15000);
  try {
    const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: ctl.signal });
    let body = {};
    try { body = await res.json(); } catch (x) { /* non-JSON */ }
    if (res.ok && body.ok === true) {
      setNote(() => t('sub.ok'), 'is-ok');
      form.reset();
      $$('.field input,.field textarea').forEach((i) => i.setAttribute('aria-invalid', 'false'));
      lockedUntil = Date.now() + 30000; // block accidental double submits
      idemKey = crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
      gp && !reduced && gp.doFlip();
    } else if (res.status === 429) setNote(() => t('sub.rate'), 'is-err');
    else if (res.status === 404 || res.status === 405 || res.status === 501 || res.status === 503 || body.error === 'not_configured')
      setNote(() => `${t('sub.notConfigured')} ${mailLink()}`, 'is-err');
    else if (res.status === 400 && body.fields) {
      Object.entries(body.fields).forEach(([n, k]) => { const err = $(`#e-${n}`); if (err) err.textContent = t(k); });
      setNote(() => t('sub.err.fix'), 'is-err');
    } else setNote(() => `${t('sub.fail')} ${mailLink()}`, 'is-err');
  } catch (err) {
    setNote(() => (navigator.onLine === false ? t('sub.offline') : `${t('sub.fail')} ${mailLink()}`), 'is-err');
  } finally {
    clearTimeout(to);
    sending = false;
    submitBtn.disabled = false;
    submitBtn.classList.remove('is-loading');
    $('.cta-label').textContent = t('sub.send');
  }
});

/* ---------------------------------------------------------------- scroll triggers */
let gamesP = 0, anatP = 0;
const en = {};
en.hero = ScrollTrigger.create({ trigger: '.s-hero', start: 'top top', end: 'bottom top', onToggle: (s) => (heroOn = s.isActive) });
// creation order must match DOM order for pinned sections
en.games = ScrollTrigger.create({ trigger: '.s-games', start: 'top top', end: `+=${N * (MOBILE ? 62 : 72)}%`, pin: '.gs-stage', scrub: true, onUpdate: (s) => (gamesP = s.progress) });
en.anat = ScrollTrigger.create({ trigger: '.s-anat', start: 'top top', end: `+=${MOBILE ? 260 : 380}%`, pin: '.anat-stage', scrub: true, onUpdate: (s) => (anatP = s.progress) });
en.gal = ScrollTrigger.create({ trigger: '.s-gal', start: 'top top', end: () => '+=' + Math.max(1, galTrack.scrollWidth - innerWidth), pin: '.gal-stage', scrub: true, invalidateOnRefresh: true, onUpdate: (s) => (galP = s.progress) });
en.sense = MOBILE
  ? ScrollTrigger.create({ trigger: '.s-sense', start: 'top bottom', end: 'bottom top' }) // phones: flowing About, the controller lives in its spacer
  : ScrollTrigger.create({ trigger: '.s-sense', start: 'top top', end: '+=120%', pin: '.sense-stage', onToggle: (s) => (senseOn = s.isActive) });
en.partners = ScrollTrigger.create({ trigger: '.s-partners', start: 'top 90%', end: 'top 20%' });
en.land = ScrollTrigger.create({ trigger: '#pad', start: 'center bottom', end: 'center 58%' });
en.all = ScrollTrigger.create({ start: 0, end: 'max' });

// page theme (nav colours, logo shade) follows whichever themed block sits under the header
if (MOBILE) $('.buy-right').dataset.theme = 'light'; // stacked layout: the form panel is white
let themeEl = null, themeT = 0;
function updateTheme(now) {
  if (now - themeT < 100) return;
  themeT = now;
  const hit = document.elementsFromPoint(innerWidth / 2, 72).map((e) => (e === document.body ? null : e.closest('[data-theme]'))).find((e) => e && e !== document.body);
  if (!hit || hit === themeEl) return;
  themeEl = hit;
  const th = hit.dataset.theme;
  document.body.dataset.theme = th;
  document.body.classList.toggle('theme-light', th === 'light');
  document.body.classList.toggle('theme-dark', th === 'dark');
}
$$('[data-section]').forEach((s) =>
  ScrollTrigger.create({
    trigger: s, start: 'top center', end: 'bottom center',
    onToggle: (tg) => tg.isActive && $$('[data-nav]').forEach((n) => { const on = n.dataset.nav === s.dataset.section; n.classList.toggle('is-active', on); on ? n.setAttribute('aria-current', 'true') : n.removeAttribute('aria-current'); }),
  })
);
if (!reduced) {
  $$('.split-words').forEach((s) => gsap.from($$('.w>span', s), { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: s, start: 'top 88%', once: true } }));
  gsap.from('.ft-word span', { yPercent: 100, duration: 1.2, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: '.footer', start: 'top 80%', once: true } });
  gsap.from('.pt-tile', { y: 50, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.12, scrollTrigger: { trigger: '.pt-grid', start: 'top 88%', once: true } });
}
// counters: the real value is in the HTML (always correct at rest); the tween only replays it from zero
$$('[data-count]').forEach((el) => {
  const final = +el.dataset.count;
  el.textContent = final;
  if (reduced) return;
  ScrollTrigger.create({
    trigger: el, start: 'top 92%', once: true,
    onEnter: () => {
      const o = { v: 0 };
      el.textContent = 0;
      gsap.to(o, { v: final, duration: 1.6, ease: 'power3.out', onUpdate: () => (el.textContent = Math.round(o.v)), onComplete: () => (el.textContent = final) });
    },
  });
});

/* ---------------------------------------------------------------- controller keyframes */
const keyframes = () => {
  const m = MOBILE;
  return [
  // Portuguese headline is wider, so the controller sits a little further right / smaller
  { at: ['hero', 0], x: getLang() === 'pt' ? 0.3 : 0.255, y: getLang() === 'pt' ? -0.23 : -0.17, s: getLang() === 'pt' ? 0.31 : 0.37, yaw: -0.55, tilt: 0.34, pitch: 0.04, prop: 1 },
  { at: ['hero', 0.6], x: 0.05, y: 0.05, s: 0.4, yaw: -0.2, tilt: 0.26 },
  { at: ['games', 0], x: 0, y: 0, s: m ? 0.8 : 0.42, yaw: 0, tilt: 0.04, pitch: 0, lens: 0 },
  { at: ['games', 0.05], s: m ? 1.4 : 0.9, lens: 1 },
  { at: ['games', 0.12], s: m ? 44 : 26, lens: 1 },
  { at: ['games', 0.13], vis: 0 },
  { at: ['games', 0.9], vis: 0 },
  { at: ['games', 0.91], vis: 1, s: m ? 44 : 26, lens: 1 },
  { at: ['games', 0.98], s: m ? 0.9 : 0.46, lens: 0, yaw: 0.2, tilt: 0.1 },
  { at: ['anat', 0], x: 0, y: m ? 0.06 : 0.1, s: m ? 0.62 : 0.36, yaw: 0.55, tilt: 0.42, explode: 0, shadow: 0.35 },
  { at: ['anat', 0.25], yaw: 0.8, tilt: 0.46 },
  { at: ['anat', 0.6], yaw: 0.95, tilt: 0.55, explode: 1, s: m ? 0.46 : 0.3 },
  { at: ['anat', 0.85], yaw: 0.6, tilt: 0.52, explode: 1 },
  { at: ['anat', 1], yaw: 0.2, tilt: 0.3, explode: 0, shadow: 0 },
  { at: ['gal', 0], x: -0.44, y: 0.41, s: m ? 0.15 : 0.075, yaw: 0.5, tilt: 0.3, pitch: 0.1 },
  { at: ['gal', 1], x: 0.44, y: 0.41 },
  { at: ['sense', 0], x: m ? 0 : 0.14, y: m ? 0.12 : 0.04, s: m ? 0.44 : 0.28, yaw: 6.28 + 0.4, tilt: 0.36 },
  { at: ['sense', 1], x: m ? 0 : 0.14, y: m ? 0.12 : 0.04 },
  { at: ['partners', 0], x: m ? 0 : 0.14, y: m ? 0.12 : 0.04 },
  { at: ['partners', 1], y: 1.45, tilt: 0.7, yaw: 7.6 },
  { at: ['land', 0], anchor: 'pad', lift: 1.2, s: m ? 0.6 : 0.32, yaw: 0.5, tilt: 0.55, pitch: 0, prop: 1, shadow: 0.1, pad: 1, glow: 1 },
  { at: ['land', 0.75], lift: 0.1, prop: 1, shadow: 0.4 },
  { at: ['land', 1], lift: 0, prop: 0.4, shadow: 0.5, glow: 0 },
  ];
};
const BASE = { x: 0, y: 0, s: 0.3, yaw: 0, tilt: 0.3, pitch: 0, roll: 0, explode: 0, prop: 1, shadow: 0, lift: 0, lens: 0, vis: 1, pad: 0, glow: 0, anchor: null };
let kfs = [];
function buildKfs() {
  let prev = { ...BASE };
  kfs = keyframes()
    .filter((k) => en[k.at[0]])
    .map((k) => { const tr = en[k.at[0]], n = { ...prev, ...k }; n.pos = tr.start + k.at[1] * (tr.end - tr.start); prev = n; return n; })
    .sort((a, b) => a.pos - b.pos);
}
ScrollTrigger.addEventListener('refresh', buildKfs);
onLang(buildKfs);
const padEl = $('#pad');
function padTarget() {
  const r = padEl.getBoundingClientRect();
  return { x: r.left + r.width / 2 - innerWidth / 2, y: r.top + r.height * 0.56 - innerHeight / 2, s: Math.min(r.width * 0.78, r.height * 1.1) };
}
function resolve(k, n, pad) {
  const o = { ...k };
  if (k.anchor === 'pad') {
    o.s = pad.s / n;
    o.x = pad.x / innerWidth;
    o.y = (pad.y - (0.3 + k.lift * 0.16) * pad.s * 0.55) / innerHeight;
  }
  return o;
}
const KEYS = ['x', 'y', 's', 'yaw', 'tilt', 'pitch', 'explode', 'prop', 'shadow', 'lift', 'lens', 'vis', 'glow'];
const cur = { ...BASE, x: 0.2, y: 0.8, s: 0.06, yaw: -4.2, tilt: 0.1, vis: 1 };
let last = performance.now(), prevX = 0;
const gsView = $('.gs-view'), gsPre = $('.gs-pre'), heroSpacer = $('.hero-m-spacer'), aboutSpacer = $('.about-m-spacer'), svcList = $('.svc-list');
const refs = {
  osdScore: $('.osd-score'), osdTc: $('.osd-tc'), tape: $('.compass-tape'), horizon: $('.osd-horizon'), gsProg: $('.gs-progress i'),
  amBar: $('.am-bar i'), amVal: $('.am-val'), flFill: $('.fl-fill'), flR: $('.fl-r'), railI: $('.scroll-rail i'), rail: $('.rail-alt'),
  srDist: $('.sr-dist'), srStatus: $('.sr-status'), srCount: $('.sr-count'), pz: $('.pz-status'), link: $('.link-layer'),
  hero: $('.hero-link'), heroDot: $('.hero-link-dot'), pill: $('.stat-pill'),
};

function frame() {
  const now = performance.now(), dt = Math.min(MAXDT, (now - last) / 1000);
  last = now;
  const y = scrollY, n = MOBILE ? innerWidth : Math.min(innerWidth, innerHeight * 1.5), pad = padTarget();
  if (!kfs.length) buildKfs();
  let tgt;
  if (y <= kfs[0].pos) tgt = resolve(kfs[0], n, pad);
  else if (y >= kfs[kfs.length - 1].pos) tgt = resolve(kfs[kfs.length - 1], n, pad);
  else {
    let i = 0;
    while (kfs[i + 1].pos < y) i++;
    const a = resolve(kfs[i], n, pad), b = resolve(kfs[i + 1], n, pad), k = ease(clamp((y - a.pos) / Math.max(1, b.pos - a.pos), 0, 1));
    tgt = {};
    KEYS.forEach((key) => (tgt[key] = key === 's' ? Math.exp(lerp(Math.log(a.s), Math.log(b.s), k)) : lerp(a[key], b[key], k)));
    tgt.vis = b.vis < 0.5 || a.vis < 0.5 ? Math.min(a.vis, b.vis) : 1;
  }
  const o = clamp(1 - y / (innerHeight * 0.6), 0, 1), o2 = 0.3 + 0.7 * o, tt = now / 1000;

  if (MOBILE) {
    // phones: the controller sits in the hero's reserved area and follows it while scrolling
    if (y < en.hero.end - 4) {
      const r = heroSpacer.getBoundingClientRect();
      tgt.x = 0;
      tgt.y = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      tgt.s = Math.min(innerWidth * 0.84, r.height * 1.5) / n;
      tgt.vis = r.bottom > -40 && r.top < innerHeight + 40 ? 1 : 0;
    } else if (aboutVis) {
      // ...and in the About spacer, where it runs away from the finger
      const r = aboutSpacer.getBoundingClientRect();
      tgt.x = 0;
      tgt.y = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      tgt.s = Math.min(innerWidth * 0.6, r.height * 1.5) / n;
      tgt.vis = 1;
    }
  } else {
    tgt.x += (mouse.nx * 0.03 + Math.sin(tt * 0.9) * 0.004) * o;
    tgt.y += (mouse.ny * 0.02 + Math.sin(tt * 1.3) * 0.006) * o;
  }
  // phones: keep the 3D controller off the tap-to-open service cards
  if (MOBILE && svcList) { const r = svcList.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) tgt.vis = 0; }
  // ABOUT: the controller dodges the cursor / finger
  if (MOBILE ? aboutVis : senseOn) {
    const cx = innerWidth / 2 + cur.x * innerWidth, cy = innerHeight / 2 + cur.y * innerHeight, pt = getPt();
    let ax = -dodge.x * 6, ay = -dodge.y * 6;
    const R = MOBILE ? 180 : 260;
    dodge.alert = false;
    if (pt) {
      const dx = cx - pt.x, dy = cy - pt.y, d = Math.hypot(dx, dy) || 1;
      if (d < R) { const k2 = (R - d) / R; ax += (dx / d) * k2 * 90; ay += (dy / d) * k2 * 90; dodge.alert = true; }
      refs.srDist.textContent = `${fmt(d / 40, 1)} u`;
    }
    if (dodge.alert && !dodge.was) { dodge.count++; refs.srCount.textContent = String(dodge.count).padStart(3, '0'); gp && gp.press(); }
    dodge.was = dodge.alert;
    refs.srStatus.textContent = t(dodge.alert ? 'about.evading' : 'about.idle');
    refs.srStatus.classList.toggle('is-alert', dodge.alert);
    const lim = MOBILE ? [0.22, 0.09] : [0.3, 0.25];
    dodge.vx = (dodge.vx + ax * dt) * 0.9;
    dodge.vy = (dodge.vy + ay * dt) * 0.9;
    dodge.x = clamp(dodge.x + dodge.vx * dt, -lim[0], lim[0]);
    dodge.y = clamp(dodge.y + dodge.vy * dt, -lim[1], lim[1]);
  } else { dodge.x *= 0.9; dodge.y *= 0.9; }
  tgt.x += dodge.x;
  tgt.y += dodge.y;

  const k = 1 - Math.exp(-dt * (tgt.lens > 0.5 ? 30 : MOBILE ? 16 : 7));
  KEYS.forEach((key) => (cur[key] = key === 'vis' ? tgt.vis : key === 's' ? Math.exp(lerp(Math.log(cur.s), Math.log(tgt.s), k)) : lerp(cur[key], tgt[key], k)));
  const vx = (cur.x - prevX) / Math.max(dt, 0.001);
  prevX = cur.x;

  if (gp) {
    const s = gp.state;
    s.x = cur.x * innerWidth;
    s.y = cur.y * innerHeight;
    s.s = cur.s * n;
    s.yaw = cur.yaw + mouse.nx * 0.3 * o2 + Math.sin(tt * 0.45) * 0.14 * o * (1 - cur.lens);
    s.tilt = cur.tilt + mouse.ny * 0.14 * o2;
    s.pitch = cur.pitch + clamp(Math.abs(vx) * 0.4, 0, 0.3) * (1 - cur.lens);
    s.roll = clamp(-vx * 0.5, -0.5, 0.5) * (1 - cur.lens) + Math.sin(tt * 2) * 0.02 * o + dodge.vx * -0.4;
    Object.assign(s, {
      explode: cur.explode, prop: cur.prop, shadow: cur.shadow, lift: cur.lift, lens: cur.lens, vis: cur.vis,
      pad: pad.s && (MOBILE ? en.land.progress > 0 || padEl.getBoundingClientRect().top < innerHeight : y > en.gal.end - innerHeight) ? 1 : 0,
      padX: pad.x, padY: pad.y, padS: pad.s, padTilt: 0.5, padGlow: cur.glow,
    });
    gp.update(dt);
  }

  // hero: link line (desktop only)
  if (!MOBILE) {
    if (o > 0 && gp) {
      const pill = refs.pill.getBoundingClientRect(), a = gp.anchorScreen('face');
      refs.hero.setAttribute('x1', pill.left + 10); refs.hero.setAttribute('y1', pill.bottom);
      refs.hero.setAttribute('x2', a.x); refs.hero.setAttribute('y2', a.y);
      refs.heroDot.setAttribute('cx', a.x); refs.heroDot.setAttribute('cy', a.y);
      refs.link.style.opacity = o;
    } else refs.link.style.opacity = 0;
  }

  updateTheme(now);
  heroAuto(dt);
  drawRain(dt);

  {
    // OUR GAMES reel
    if (en.games.isActive || (y > en.games.start - innerHeight && y < en.games.end + innerHeight)) {
      const p = gamesP;
      let clip;
      if (cur.vis < 0.5) clip = 'circle(150% at 50% 50%)';
      else if (gp && cur.lens > 0.55) { const l = gp.lensScreen(); clip = `circle(${l.r * 1.25}px at ${l.x}px ${l.y}px)`; }
      else clip = gp ? 'circle(0px at 50% 50%)' : 'circle(150% at 50% 50%)';
      gsView.style.clipPath = clip;
      gsPre.style.opacity = gp ? clamp(1 - (p - 0.02) * 12, 0, 1) + (p > 0.88 ? clamp((p - 0.92) * 12, 0, 1) : 0) : 0;
      const b = clamp((p - 0.13) / 0.78, 0, 1), fi = clamp(b * N, 0, N - 0.001);
      setActive(Math.floor(fi));
      const local = fi - Math.floor(fi), act = bgImgs[activeIdx];
      if (act) act.style.transform = `scale(${1.12 + local * 0.06}) translate3d(${(local - 0.5) * -2}%,0,0)`;
      refs.osdScore.textContent = String(Math.round(b * 998700)).padStart(6, '0');
      refs.osdTc.textContent = `00:${pad2(Math.floor(b * 59))}:${pad2(Math.floor(((b * 59) % 1) * 30))}`;
      refs.tape.style.transform = `translateX(${-(b * 18 * 30) + 190}px)`;
      refs.horizon.style.transform = `translate(-50%,-50%) rotate(${Math.sin(b * 11) * 4}deg)`;
      refs.gsProg.style.transform = `scaleX(${b})`;
      if (!isTouch) {
        const c = cards[activeIdx];
        if (c) { c.style.setProperty('--rx', `${(-mouse.ny * 7).toFixed(2)}deg`); c.style.setProperty('--ry', `${(mouse.nx * 9).toFixed(2)}deg`); }
      }
    }
    // WHAT WE DO: exploded-view callouts
    if (en.anat.isActive && gp) {
      const ex = cur.explode;
      refs.amBar.style.transform = `scaleX(${ex})`;
      refs.amVal.textContent = Math.round(ex * 100) + '%';
      const paths = $$('path', lines), dots = $$('circle', lines);
      callouts.forEach((c, i) => {
        const on = ex > 0.35 + i * 0.06;
        c.classList.toggle('is-in', on);
        const a = gp.anchorScreen(c.dataset.anchor), r = c.getBoundingClientRect(), left = c.dataset.side === 'left';
        const sx0 = left ? r.right + 12 : r.left - 12, sy0 = r.top + 30, ex0 = left ? sx0 + 40 : sx0 - 40;
        paths[i].setAttribute('d', `M${sx0},${sy0} L${ex0},${sy0} L${a.x},${a.y}`);
        paths[i].style.opacity = on ? 0.55 : 0;
        [dots[i * 2], dots[i * 2 + 1]].forEach((d) => { d.setAttribute('cx', a.x); d.setAttribute('cy', a.y); d.style.opacity = on ? 1 : 0; });
      });
    } else if (!en.anat.isActive) {
      callouts.forEach((c) => c.classList.remove('is-in'));
      $$('path,circle', lines).forEach((e) => (e.style.opacity = 0));
    }
    // ABOUT canvas
    if (y > en.sense.start - innerHeight && y < en.sense.end + innerHeight) drawSense({ x: innerWidth / 2 + cur.x * innerWidth, y: innerHeight / 2 + cur.y * innerHeight });
    // PORTING gallery (pinned, desktop)
    if (y > en.gal.start - innerHeight && y < en.gal.end + innerHeight) {
      const dist = Math.max(0, galTrack.scrollWidth - innerWidth);
      galTrack.style.transform = `translate3d(${-galP * dist}px,0,0)`;
      refs.flFill.style.transform = `scaleX(${galP})`;
      refs.flR.textContent = `${pad2(Math.min(4, Math.floor(galP * 4) + 1))} / 04`;
      galImgs.forEach((im) => {
        const r = im.parentElement.getBoundingClientRect(), tk = (r.left + r.width / 2) / innerWidth - 0.5;
        im.style.transform = `translate3d(${tk * -8}%,0,0)`;
      });
    }
  }

  // marquee
  if (!reduced) {
    const vel = lenis.velocity || 0;
    mqX -= (1.2 + Math.abs(vel) * 0.25) * (vel < 0 ? -1 : 1);
    const half = mq.scrollWidth / 2;
    if (mqX < -half) mqX += half;
    if (mqX > 0) mqX -= half;
    mq.style.transform = `translate3d(${mqX}px,0,0) skewX(${clamp(-vel * 0.4, -12, 12)}deg)`;
  }

  // dock status
  const landed = en.land.progress > 0.98, ps = refs.pz;
  ps.textContent = t(landed ? 'sub.ready' : en.land.progress > 0 ? 'sub.docking' : 'sub.waiting');
  ps.classList.toggle('is-landed', landed);

  // xp rail
  const S = en.all.progress || 0;
  refs.railI.style.transform = `scaleY(${S})`;
  refs.rail.style.top = S * 100 + '%';
  refs.rail.textContent = `XP ${String(Math.round(S * 999)).padStart(3, '0')}`;
  requestAnimationFrame(frame);
}

/* ---------------------------------------------------------------- fallback if WebGL is missing */
if (document.documentElement.classList.contains('no-webgl')) {
  const img = document.createElement('img');
  img.className = 'hero-fallback';
  img.src = 'assets/img/controller-front.webp';
  img.alt = '';
  img.width = 781; img.height = 585;
  $('.s-hero').appendChild(img);
}

/* ---------------------------------------------------------------- preloader → intro (never blocks the content) */
const pre = $('.preloader'), checks = $$('.pre-checks li'), pv = { v: 0 };
let introDone = false, introTl = null;
function finishIntro(fast = false) {
  if (introDone) return;
  introDone = true;
  introTl && introTl.kill();
  gsap.killTweensOf(pv);
  pre && pre.remove();
  document.body.classList.remove('is-loading');
  if (!menuOpen && vm.hidden) lenis.start();
  gsap.set('.ht-inner,.hero-panel,.hero-stat,.hero-brand,.hero-card,.hero-hint,.nav', { clearProps: 'all' });
  ScrollTrigger.refresh();
  if (gp && !fast && !reduced) { gp.press(); gp.doSpin(); }
}
function runIntro() {
  gsap.to(pv, {
    v: 100, duration: reduced ? 0.2 : MOBILE ? 1.4 : 2.4, ease: 'power2.inOut',
    onUpdate: () => {
      $('.pre-num').textContent = String(Math.round(pv.v)).padStart(3, '0');
      $('.pre-bar i').style.transform = `scaleX(${pv.v / 100})`;
      checks.forEach((li, i) => li.classList.toggle('ok', pv.v > (i + 1) * 15));
    },
    onComplete: () => {
      $('.pre-status').textContent = t('pre.ready');
      if (reduced) return finishIntro(true);
      introTl = gsap.timeline({ delay: 0.2, onComplete: () => finishIntro() })
        .to(pre, { yPercent: -100, duration: 1, ease: 'expo.inOut' })
        .from('.ht-inner', { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.08 }, '-=.45')
        .from('.hero-panel,.hero-stat,.hero-brand,.hero-card,.hero-hint,.nav', { y: 24, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06 }, '<.2');
    },
  });
}
runIntro();
setTimeout(() => finishIntro(true), 7000); // failsafe: the page is always usable after 7s
addEventListener('error', () => setTimeout(() => finishIntro(true), 300));
pre.addEventListener('click', () => finishIntro(true)); // tap to skip

if (location.search.includes('dbg')) window.__g = { en, lenis, gp, cur };
dynamic.forEach((fn) => fn());
onLang(() => dynamic.forEach((fn) => fn()));
ScrollTrigger.refresh();
buildKfs();
requestAnimationFrame(frame);
(document.fonts ? document.fonts.ready : Promise.resolve()).then(() => ScrollTrigger.refresh());
addEventListener('load', () => ScrollTrigger.refresh());

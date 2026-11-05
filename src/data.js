// Official catalog — taken from gogogames.com.br (Games Published / Porting service sections).
//
// `steam` holds the Steam app id. Every id below was checked against the public
// Steam Store API (name + developer/publisher fields). Games without a verified
// official page keep `steam: null` and render a "Link coming soon" button.
//   → TODO(GoGo): fill `steam` (or add `url`) for Cyber War: Neon City once its page exists.
const mk = (id, name, w, h, steam = null, extra = {}) => ({ id, name, src: `assets/img/${id}.webp`, w, h, steam, ...extra });

export const GAMES = [
  mk('cyber-war', 'Cyber War: Neon City', 900, 900, null), // TODO: official page not found on Steam
  mk('dwarf-journey', 'Dwarf Journey', 900, 900, 1501410),
  mk('super-mombo-quest', 'Super Mombo Quest', 900, 506, 1262040),
  mk('monster-meals', 'Monster Meals', 748, 779, 3021850),
  mk('hellbrella', 'Hellbrella', 748, 896, 3510060),
  mk('lia', 'LIA: Hacking Destiny', 900, 900, 3740360),
  mk('legacy-of-evil', 'Legacy of Evil', 900, 675, 2657360),
  mk('mombo-combo', 'Mombo Combo Legacy', 900, 506, 4194840),
];

export const PORTS = [
  mk('one-lonely-outpost', 'One Lonely Outpost', 900, 506, 1465550),
  mk('four-elements', '4 The Elements', 900, 900, 2081090),
  mk('nine-kings', '9 Kings', 900, 900, 2784470),
  mk('infinitevania', 'Infinitevania', 900, 900, 1983620),
];

// GoGo's official showcase video (linked from the site)
export const DIRECT = {
  id: 'gogo-direct',
  name: 'GoGo Direct · 1st edition',
  src: 'assets/img/gogo-direct.webp',
  w: 1280,
  h: 720,
  video: 'm-R8vVGluEw',
  url: 'https://www.youtube.com/watch?v=m-R8vVGluEw',
};

export const CHANNEL_URL = 'https://www.youtube.com/@gogogamesinteractive';
export const STORE_URL = 'https://gogogames.com.br/';
export const CONTACT_EMAIL = 'gogogamesinteractive@gogogames.com.br';

/** Official game page (Steam). Returns null when no verified page exists yet. */
export const gameUrl = (g) => g.url || (g.steam ? `https://store.steampowered.com/app/${g.steam}/` : null);

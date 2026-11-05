/* ------------------------------------------------------------------
   Internationalisation — EN (default) + PT-BR.
   All visible copy lives here. Official names (games, brands, partner
   companies) are intentionally NOT translated.
   Markup:  data-i18n="key"            → textContent
            data-i18n-html="key"       → innerHTML (trusted strings only)
            data-i18n-attr="attr:key;attr2:key2"
   ------------------------------------------------------------------ */

export const LANGS = ['en', 'pt'];
export const HTML_LANG = { en: 'en', pt: 'pt-BR' };
const STORAGE_KEY = 'gogo-lang';

const en = {
  /* meta */
  'meta.title': 'GoGo Games Interactive — Great games. Go further.',
  'meta.desc': 'GoGo Games Interactive publishes, distributes and accelerates indie games — and manages the studios behind them. Publishing, porting and partnerships for developers and players.',
  'skip': 'Skip to content',

  /* nav */
  'nav.aria': 'Main sections',
  'nav.start': 'Start',
  'nav.games': 'Games',
  'nav.services': 'What we do',
  'nav.about': 'About',
  'nav.partners': 'Partners',
  'nav.cta': 'Submit your game',
  'nav.menu': 'Menu',
  'nav.menuOpen': 'Open menu',
  'nav.menuClose': 'Close menu',
  'nav.home': 'GoGo Games Interactive — home',
  'lang.aria': 'Language',
  'lang.pt': 'Português (Brasil)',
  'lang.en': 'English',

  /* preloader */
  'pre.top': 'PRESS START · BOOT SEQUENCE',
  'pre.c1': 'Controller connected',
  'pre.c2': 'Loading game library',
  'pre.c3': 'Syncing publisher partners',
  'pre.c4': 'Linking studio network',
  'pre.c5': 'Calibrating sticks',
  'pre.c6': 'Player 1 ready',
  'pre.loading': 'Loading…',
  'pre.ready': 'Press start',
  'pre.skip': 'Skip intro',

  /* hero */
  'hero.aria': 'Great games. Go further.',
  'hero.t1': 'GREAT',
  'hero.t2': 'GAMES',
  'hero.t3': 'GO FURTHER',
  'hero.panel': 'Select mode',
  'hero.pause': 'Pause auto-play',
  'hero.menuAria': 'GoGo Games areas',
  'hero.mode.games': 'Games',
  'hero.mode.publishing': 'Publishing',
  'hero.mode.porting': 'Porting',
  'hero.mode.studios': 'Studios',
  'hero.desc.games': 'Our catalog of indie games, published by GoGo Games Interactive.',
  'hero.desc.publishing': 'Publishing, distribution and promotions for indie games on the main platforms.',
  'hero.desc.porting': 'A porting service for games from other studios.',
  'hero.desc.studios': 'We manage studios intelligently — and build lasting partnerships.',
  'hero.stat.games': 'Titles in<br>the catalog',
  'hero.stat.publishing': 'Games<br>published',
  'hero.stat.porting': 'Games<br>ported',
  'hero.stat.studios': 'Partner<br>studios',
  'hero.st1': 'Your game.',
  'hero.st2': 'Our partnership.',
  'hero.st3': 'Further.',
  'hero.lead': 'Your game deserves to go further.',
  'hero.copy': 'Publishing, distribution, porting and long-term partnerships for independent game studios.',
  'hero.btn1': 'Explore our games',
  'hero.btn2': 'Partner with us',
  'hero.preview': 'Game preview',
  'hero.previewTag': '▶ PREVIEW',
  'hero.watch': 'Watch ▶',
  'hero.channel': 'Channel ↗',
  'hero.meet': 'Meet them ↓',
  'hero.submitDown': 'Submit your game ↓',
  'hero.studiosName': 'Our partner studios',
  'hero.directName': 'GoGo Direct · 1st edition',
  'hero.hintClick': 'Click for a stunt',
  'hero.hintTap': 'Tap the controller',
  'hero.hintScroll': 'Scroll to start',

  /* links */
  'link.steam': 'Steam page ↗',
  'link.steamLong': 'Trailer & Steam page',
  'link.soon': 'Link coming soon',
  'link.video': 'Watch the showcase',
  'link.channel': 'YouTube channel',
  'link.trailer': 'Trailer ↗',

  /* games */
  'games.h2': 'Our games',
  'games.kicker': '02 — Our games',
  'games.top': 'GOGO OS · GAME SELECT',
  'games.loading': '● LOADING',
  'games.big1': 'press',
  'games.big2': 'start.',
  'games.bottom': 'OUR GAMES · 08 PUBLISHED · 04 PORTED',
  'games.p1': 'PLAYER 1 READY',
  'games.select': 'SELECT',
  'games.title': 'TITLE',
  'games.score': 'SCORE',
  'games.pts': 'pts',
  'games.game': 'GAME',
  'games.lvl': 'LVL',
  'games.press': 'PRESS ▶ TO PLAY',
  'games.kick': 'Published by GoGo',
  'games.kickShow': 'Showcase',
  'games.roster': 'Game roster',
  'games.swipe': 'Swipe to browse',
  'games.alt': 'cover art',
  'games.prev': 'Previous game',
  'games.next': 'Next game',

  /* services */
  'svc.kicker': '03 — What we do',
  'svc.h2': 'More than a publisher. <em>A partner.</em>',
  'svc.p': 'Scroll to take the controller apart — publishing, porting and studio support, piece by piece.',
  'svc.pMobile': 'Publishing, porting and studio support — everything GoGo does for games and the teams behind them.',
  'svc.1.h4': 'Publishing',
  'svc.1.t': 'Publishing & distribution',
  'svc.1.p': 'We publish indie games and bring them to players on the main platforms, with promotions and the best price in mind.',
  'svc.2.h4': 'Porting',
  'svc.2.t': 'Porting service',
  'svc.2.p': 'A dedicated porting service for games from other studios.',
  'svc.3.h4': 'Studios',
  'svc.3.t': 'Studio management',
  'svc.3.p': 'We manage studios intelligently, planning how a game can be taken forward over the years.',
  'svc.4.h4': 'IP care',
  'svc.4.t': 'Intellectual property',
  'svc.4.p': 'We care for IP in a way that strengthens studios, so they don’t lose their greatest asset.',
  'svc.5.h4': 'Players',
  'svc.5.t': 'Player services ecosystem',
  'svc.5.p': 'Stats, progress and performance across all GoGo games, on all platforms.',
  'svc.6.h4': 'Creators',
  'svc.6.t': 'Creators Program',
  'svc.6.p': 'Content creators can join as partners of GoGo Games Interactive.',
  'svc.6.link': 'Join the Creators Program ↗',
  'svc.unit': 'titles',
  'svc.small': 'In our catalog today',
  'svc.meter': 'Exploded view',
  'svc.img': 'Exploded view of the GoGo controller showing its internal parts',

  /* porting */
  'port.kicker': '04 — Porting service',
  'port.h2': 'Games from other studios. <em>On more screens.</em>',
  'port.p': 'Beyond our own publishing, GoGo Games Interactive offers a porting service for other games. These are some of the titles in that line-up.',
  'port.hint': 'Keep scrolling →',
  'port.hintSwipe': 'Swipe →',
  'port.count': 'ported titles',
  'port.small': 'Porting service for other games',
  'port.copy': 'Have a finished game that should be on more platforms? Tell us about it — we’ll take it from there.',
  'port.btn': 'Ask about porting',
  'port.queue': 'PORT QUEUE',
  'port.mailSubject': 'Porting request',

  /* about */
  'about.kicker': '05 — About GoGo Games',
  'about.h2': 'A new era for <em>gamers &amp; developers.</em>',
  'about.p': 'We are a games company that doesn’t only publish games — we intelligently manage studios, thinking about how each game can go further over the years. We take care of intellectual property so studios keep their greatest asset.',
  'about.mission': '<b>Our mission:</b> to provide unique experiences for gamers and to build lasting partnerships with talented developers. Whether you’re a gamer eager for something new or a studio looking for a strategic partner, we’re here to push your potential to the max.',
  'about.dist': 'Distance',
  'about.status': 'Status',
  'about.dodges': 'Dodges',
  'about.idle': 'IDLE',
  'about.evading': 'EVADING',
  'about.touch': 'Tap near the controller to try to catch it',
  's1': 'titles in the catalog',
  's2': 'ported games',
  's3': 'publisher partners',
  's4': 'partner studios',
  'about.players': 'For players',
  'about.playersP': 'Gamers who want a unique experience with the best indie games — with an ecosystem of player services for all GoGo games on all platforms, bringing the best games at the best price.',

  /* partners */
  'pt.kicker': '06 — Our partners',
  'pt.h2': 'Good company <em>makes good games.</em>',
  'pt.p': 'The publishers, platforms and studios we build with.',
  'pt.t1': '01 · Publisher partners',
  'pt.t2': '02 · Platforms',
  'pt.t3': '03 · Studio partners',
  'pt.platAlt': 'Xbox, PlayStation, Nintendo Switch, Steam, Xsolla and Nuuvem logos',
  'pt.stuAlt': 'Partner studios: bytteam, DarkOcean Games, Ludus Studio, Teion Games, Orube Game Studio, Over Games, Sunny Horizon, Uruca, Giant Warrior Studio, Glitch, Cyber Monkey, S.E.R.A Games Studio, Red Sea, Icy Mountain Studios, Out Zoom, Fora do Eixo, Sergames Studio, Shark, HK Games Studio, Ramires Tech Games and Forgate Games',
  'pt.swipe': 'Swipe to see all studios →',

  /* submit */
  'sub.kicker': '07 — Submit your game',
  'sub.h2': 'Got a game? Insert it <em>here.</em>',
  'sub.lead': 'Send us your game or presentation. Pick a skin for the controller while you’re here — the dock is waiting.',
  'sub.dock': 'DOCK · PLAYER 1',
  'sub.waiting': 'WAITING',
  'sub.docking': 'DOCKING',
  'sub.ready': 'PLAYER 1 READY ✓',
  'sub.brasil': 'GOGO GAMES INTERACTIVE · BRASIL',
  'sub.skin': 'Controller skin',
  'sub.skin1': 'Graphite',
  'sub.skin2': 'Arctic',
  'sub.skin3': 'GoGo Blue',
  'sub.skin4': 'GoGo Orange',
  'sub.badge': 'Developers · Open submissions',
  'sub.h3': 'Send us your game',
  'sub.need': 'What are you looking for?',
  'sub.k1': 'Publishing',
  'sub.k1p': 'Publishing and distribution for your game',
  'sub.k2': 'Porting',
  'sub.k2p': 'Bring a finished game to more platforms',
  'sub.k3': 'Studio partnership',
  'sub.k3p': 'Long-term partnership and studio management',
  'sub.f.studio': 'Studio / your name',
  'sub.f.studioPh': 'Your studio',
  'sub.f.game': 'Game title',
  'sub.f.gamePh': 'Your game',
  'sub.f.email': 'Email',
  'sub.f.emailPh': 'you@studio.com',
  'sub.f.link': 'Link to build, trailer or presentation',
  'sub.f.msg': 'Tell us about it',
  'sub.f.msgPh': 'Genre, platforms, status, team…',
  'sub.send': 'Send my game',
  'sub.sending': 'Sending…',
  'sub.sub': 'We reply by email',
  'sub.err.required': 'This field is required.',
  'sub.err.email': 'Enter a valid email address.',
  'sub.err.url': 'Enter a valid link starting with http:// or https://',
  'sub.err.fix': 'Please fix the highlighted fields.',
  'sub.ok': 'Thank you! Your game was sent. We’ll get back to you by email.',
  'sub.fail': 'We couldn’t send your message right now. Please try again, or email us directly.',
  'sub.notConfigured': 'Online submissions are not available yet. Please email us directly:',
  'sub.rate': 'Too many attempts. Please wait a moment and try again.',
  'sub.offline': 'No connection. Check your internet and try again.',
  'sub.direct': 'Prefer email? Write to',
  'sub.c.email': 'Email',
  'sub.c.phone': 'Phone',
  'sub.c.creators': 'Creators',
  'sub.c.creatorsLink': 'Creators Program form ↗',
  'sub.c.store': 'Store',

  /* footer */
  'ft.line1': 'Great games.',
  'ft.line2': 'Go further.',
  'ft.cta': 'Send us your game →',
  'ft.contact': 'Contact',
  'ft.follow': 'Follow',
  'ft.explore': 'Explore',
  'ft.store': 'Official store ↗',
  'ft.creators': 'Creators Program ↗',
  'ft.direct': 'GoGo Direct · 1st edition ▶',
  'ft.tag': 'Games · Publishing · Porting · Studios',
  'ft.top': 'Back to top ↑',
  'ft.rights': '© 2026 GoGo Games Interactive',

  /* modal */
  'vm.close': 'Close video',
  'vm.title': 'GoGo Direct — first edition',
};

const pt = {
  'meta.title': 'GoGo Games Interactive — Grandes jogos. Vá mais longe.',
  'meta.desc': 'A GoGo Games Interactive publica, distribui e acelera jogos indie — e gerencia os estúdios por trás deles. Publicação, porting e parcerias para desenvolvedores e jogadores.',
  'skip': 'Ir para o conteúdo',

  'nav.aria': 'Seções principais',
  'nav.start': 'Início',
  'nav.games': 'Jogos',
  'nav.services': 'O que fazemos',
  'nav.about': 'Sobre',
  'nav.partners': 'Parceiros',
  'nav.cta': 'Envie seu jogo',
  'nav.menu': 'Menu',
  'nav.menuOpen': 'Abrir menu',
  'nav.menuClose': 'Fechar menu',
  'nav.home': 'GoGo Games Interactive — início',
  'lang.aria': 'Idioma',
  'lang.pt': 'Português (Brasil)',
  'lang.en': 'English',

  'pre.top': 'PRESS START · SEQUÊNCIA DE BOOT',
  'pre.c1': 'Controle conectado',
  'pre.c2': 'Carregando biblioteca de jogos',
  'pre.c3': 'Sincronizando publishers parceiros',
  'pre.c4': 'Conectando rede de estúdios',
  'pre.c5': 'Calibrando analógicos',
  'pre.c6': 'Player 1 pronto',
  'pre.loading': 'Carregando…',
  'pre.ready': 'Aperte start',
  'pre.skip': 'Pular introdução',

  'hero.aria': 'Grandes jogos. Vá mais longe.',
  'hero.t1': 'GRANDES',
  'hero.t2': 'JOGOS',
  'hero.t3': 'VÁ MAIS LONGE',
  'hero.panel': 'Escolha o modo',
  'hero.pause': 'Pausar reprodução automática',
  'hero.menuAria': 'Áreas da GoGo Games',
  'hero.mode.games': 'Jogos',
  'hero.mode.publishing': 'Publicação',
  'hero.mode.porting': 'Porting',
  'hero.mode.studios': 'Estúdios',
  'hero.desc.games': 'Nosso catálogo de jogos indie, publicados pela GoGo Games Interactive.',
  'hero.desc.publishing': 'Publicação, distribuição e promoções de jogos indie nas principais plataformas.',
  'hero.desc.porting': 'Um serviço de porting para jogos de outros estúdios.',
  'hero.desc.studios': 'Gerenciamos estúdios com inteligência — e construímos parcerias duradouras.',
  'hero.stat.games': 'Títulos no<br>catálogo',
  'hero.stat.publishing': 'Jogos<br>publicados',
  'hero.stat.porting': 'Jogos<br>portados',
  'hero.stat.studios': 'Estúdios<br>parceiros',
  'hero.st1': 'Seu jogo.',
  'hero.st2': 'Nossa parceria.',
  'hero.st3': 'Mais longe.',
  'hero.lead': 'Seu jogo merece ir mais longe.',
  'hero.copy': 'Publicação, distribuição, porting e parcerias de longo prazo para estúdios de games independentes.',
  'hero.btn1': 'Conheça nossos jogos',
  'hero.btn2': 'Seja nosso parceiro',
  'hero.preview': 'Prévia do jogo',
  'hero.previewTag': '▶ PRÉVIA',
  'hero.watch': 'Assistir ▶',
  'hero.channel': 'Canal ↗',
  'hero.meet': 'Conheça ↓',
  'hero.submitDown': 'Envie seu jogo ↓',
  'hero.studiosName': 'Nossos estúdios parceiros',
  'hero.directName': 'GoGo Direct · 1ª edição',
  'hero.hintClick': 'Clique para uma manobra',
  'hero.hintTap': 'Toque no controle',
  'hero.hintScroll': 'Role para começar',

  'link.steam': 'Página na Steam ↗',
  'link.steamLong': 'Trailer e página na Steam',
  'link.soon': 'Link em breve',
  'link.video': 'Assistir ao showcase',
  'link.channel': 'Canal no YouTube',
  'link.trailer': 'Trailer ↗',

  'games.h2': 'Nossos jogos',
  'games.kicker': '02 — Nossos jogos',
  'games.top': 'GOGO OS · SELEÇÃO DE JOGO',
  'games.loading': '● CARREGANDO',
  'games.big1': 'press',
  'games.big2': 'start.',
  'games.bottom': 'NOSSOS JOGOS · 08 PUBLICADOS · 04 PORTADOS',
  'games.p1': 'PLAYER 1 PRONTO',
  'games.select': 'SELEÇÃO',
  'games.title': 'TÍTULO',
  'games.score': 'PONTOS',
  'games.pts': 'pts',
  'games.game': 'JOGO',
  'games.lvl': 'NÍVEL',
  'games.press': 'APERTE ▶ PARA JOGAR',
  'games.kick': 'Publicado pela GoGo',
  'games.kickShow': 'Showcase',
  'games.roster': 'Lista de jogos',
  'games.swipe': 'Deslize para navegar',
  'games.alt': 'arte da capa',
  'games.prev': 'Jogo anterior',
  'games.next': 'Próximo jogo',

  'svc.kicker': '03 — O que fazemos',
  'svc.h2': 'Mais que uma publisher. <em>Uma parceira.</em>',
  'svc.p': 'Role para desmontar o controle — publicação, porting e apoio a estúdios, peça por peça.',
  'svc.pMobile': 'Publicação, porting e apoio a estúdios — tudo o que a GoGo faz pelos jogos e pelas equipes por trás deles.',
  'svc.1.h4': 'Publicação',
  'svc.1.t': 'Publicação e distribuição',
  'svc.1.p': 'Publicamos jogos indie e os levamos aos jogadores nas principais plataformas, com promoções e o melhor preço em mente.',
  'svc.2.h4': 'Porting',
  'svc.2.t': 'Serviço de porting',
  'svc.2.p': 'Um serviço dedicado de porting para jogos de outros estúdios.',
  'svc.3.h4': 'Estúdios',
  'svc.3.t': 'Gestão de estúdios',
  'svc.3.p': 'Gerenciamos estúdios com inteligência, planejando como um jogo pode evoluir ao longo dos anos.',
  'svc.4.h4': 'Propriedade intelectual',
  'svc.4.t': 'Propriedade intelectual',
  'svc.4.p': 'Cuidamos da PI de forma a fortalecer os estúdios, para que não percam seu maior patrimônio.',
  'svc.5.h4': 'Jogadores',
  'svc.5.t': 'Ecossistema de serviços ao jogador',
  'svc.5.p': 'Estatísticas, progresso e desempenho em todos os jogos da GoGo, em todas as plataformas.',
  'svc.6.h4': 'Criadores',
  'svc.6.t': 'Programa de Criadores',
  'svc.6.p': 'Criadores de conteúdo podem se tornar parceiros da GoGo Games Interactive.',
  'svc.6.link': 'Entrar no Programa de Criadores ↗',
  'svc.unit': 'títulos',
  'svc.small': 'No nosso catálogo hoje',
  'svc.meter': 'Vista explodida',
  'svc.img': 'Vista explodida do controle da GoGo mostrando suas peças internas',

  'port.kicker': '04 — Serviço de porting',
  'port.h2': 'Jogos de outros estúdios. <em>Em mais telas.</em>',
  'port.p': 'Além da nossa própria publicação, a GoGo Games Interactive oferece um serviço de porting para outros jogos. Estes são alguns dos títulos desse line-up.',
  'port.hint': 'Continue rolando →',
  'port.hintSwipe': 'Deslize →',
  'port.count': 'títulos portados',
  'port.small': 'Serviço de porting para outros jogos',
  'port.copy': 'Tem um jogo pronto que deveria estar em mais plataformas? Conte para nós — a gente cuida do resto.',
  'port.btn': 'Fale sobre porting',
  'port.queue': 'FILA DE PORTING',
  'port.mailSubject': 'Pedido de porting',

  'about.kicker': '05 — Sobre a GoGo Games',
  'about.h2': 'Uma nova era para <em>jogadores e desenvolvedores.</em>',
  'about.p': 'Somos uma empresa de games que não apenas publica jogos — gerenciamos estúdios com inteligência, pensando em como cada jogo pode ir mais longe ao longo dos anos. Cuidamos da propriedade intelectual para que os estúdios mantenham seu maior patrimônio.',
  'about.mission': '<b>Nossa missão:</b> proporcionar experiências únicas para os jogadores e construir parcerias duradouras com desenvolvedores talentosos. Seja você um jogador em busca de novidades ou um estúdio à procura de um parceiro estratégico, estamos aqui para levar seu potencial ao máximo.',
  'about.dist': 'Distância',
  'about.status': 'Status',
  'about.dodges': 'Esquivas',
  'about.idle': 'PARADO',
  'about.evading': 'ESQUIVANDO',
  'about.touch': 'Toque perto do controle para tentar pegá-lo',
  's1': 'títulos no catálogo',
  's2': 'jogos portados',
  's3': 'publishers parceiros',
  's4': 'estúdios parceiros',
  'about.players': 'Para os jogadores',
  'about.playersP': 'Para quem quer uma experiência única com os melhores jogos indie — com um ecossistema de serviços ao jogador para todos os jogos da GoGo, em todas as plataformas, levando os melhores jogos pelo melhor preço.',

  'pt.kicker': '06 — Nossos parceiros',
  'pt.h2': 'Boa companhia <em>faz bons jogos.</em>',
  'pt.p': 'Os publishers, plataformas e estúdios com quem construímos.',
  'pt.t1': '01 · Publishers parceiros',
  'pt.t2': '02 · Plataformas',
  'pt.t3': '03 · Estúdios parceiros',
  'pt.platAlt': 'Logos de Xbox, PlayStation, Nintendo Switch, Steam, Xsolla e Nuuvem',
  'pt.stuAlt': 'Estúdios parceiros: bytteam, DarkOcean Games, Ludus Studio, Teion Games, Orube Game Studio, Over Games, Sunny Horizon, Uruca, Giant Warrior Studio, Glitch, Cyber Monkey, S.E.R.A Games Studio, Red Sea, Icy Mountain Studios, Out Zoom, Fora do Eixo, Sergames Studio, Shark, HK Games Studio, Ramires Tech Games e Forgate Games',
  'pt.swipe': 'Deslize para ver todos os estúdios →',

  'sub.kicker': '07 — Envie seu jogo',
  'sub.h2': 'Tem um jogo? Encaixe-o <em>aqui.</em>',
  'sub.lead': 'Envie seu jogo ou apresentação. Aproveite para escolher uma skin para o controle — a doca está esperando.',
  'sub.dock': 'DOCA · PLAYER 1',
  'sub.waiting': 'AGUARDANDO',
  'sub.docking': 'ACOPLANDO',
  'sub.ready': 'PLAYER 1 PRONTO ✓',
  'sub.brasil': 'GOGO GAMES INTERACTIVE · BRASIL',
  'sub.skin': 'Skin do controle',
  'sub.skin1': 'Grafite',
  'sub.skin2': 'Ártico',
  'sub.skin3': 'Azul GoGo',
  'sub.skin4': 'Laranja GoGo',
  'sub.badge': 'Desenvolvedores · Envios abertos',
  'sub.h3': 'Envie seu jogo',
  'sub.need': 'O que você procura?',
  'sub.k1': 'Publicação',
  'sub.k1p': 'Publicação e distribuição do seu jogo',
  'sub.k2': 'Porting',
  'sub.k2p': 'Leve um jogo pronto para mais plataformas',
  'sub.k3': 'Parceria de estúdio',
  'sub.k3p': 'Parceria de longo prazo e gestão de estúdio',
  'sub.f.studio': 'Estúdio / seu nome',
  'sub.f.studioPh': 'Seu estúdio',
  'sub.f.game': 'Título do jogo',
  'sub.f.gamePh': 'Seu jogo',
  'sub.f.email': 'E-mail',
  'sub.f.emailPh': 'voce@estudio.com',
  'sub.f.link': 'Link da build, trailer ou apresentação',
  'sub.f.msg': 'Conte mais sobre o jogo',
  'sub.f.msgPh': 'Gênero, plataformas, estágio, equipe…',
  'sub.send': 'Enviar meu jogo',
  'sub.sending': 'Enviando…',
  'sub.sub': 'Respondemos por e-mail',
  'sub.err.required': 'Este campo é obrigatório.',
  'sub.err.email': 'Informe um e-mail válido.',
  'sub.err.url': 'Informe um link válido, começando com http:// ou https://',
  'sub.err.fix': 'Corrija os campos destacados.',
  'sub.ok': 'Obrigado! Seu jogo foi enviado. Retornaremos por e-mail.',
  'sub.fail': 'Não foi possível enviar agora. Tente novamente ou escreva diretamente para nós.',
  'sub.notConfigured': 'O envio online ainda não está disponível. Escreva diretamente para:',
  'sub.rate': 'Muitas tentativas. Aguarde um instante e tente de novo.',
  'sub.offline': 'Sem conexão. Verifique sua internet e tente novamente.',
  'sub.direct': 'Prefere e-mail? Escreva para',
  'sub.c.email': 'E-mail',
  'sub.c.phone': 'Telefone',
  'sub.c.creators': 'Criadores',
  'sub.c.creatorsLink': 'Formulário do Programa de Criadores ↗',
  'sub.c.store': 'Loja',

  'ft.line1': 'Grandes jogos.',
  'ft.line2': 'Vá mais longe.',
  'ft.cta': 'Envie seu jogo →',
  'ft.contact': 'Contato',
  'ft.follow': 'Siga',
  'ft.explore': 'Explore',
  'ft.store': 'Loja oficial ↗',
  'ft.creators': 'Programa de Criadores ↗',
  'ft.direct': 'GoGo Direct · 1ª edição ▶',
  'ft.tag': 'Jogos · Publicação · Porting · Estúdios',
  'ft.top': 'Voltar ao topo ↑',
  'ft.rights': '© 2026 GoGo Games Interactive',

  'vm.close': 'Fechar vídeo',
  'vm.title': 'GoGo Direct — primeira edição',
};

export const DICT = { en, pt };

/* ---------- state ---------- */
let lang = 'en';
const listeners = [];

export function detectLang() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.includes(q.toLowerCase().slice(0, 2))) return q.toLowerCase().slice(0, 2);
  } catch (e) { /* ignore */ }
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s && LANGS.includes(s)) return s;
  } catch (e) { /* storage blocked */ }
  return 'en'; // English is the default language
}

export const getLang = () => lang;
export const t = (key) => DICT[lang][key] ?? DICT.en[key] ?? key;
export const onLang = (fn) => listeners.push(fn);

export function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)));
  root.querySelectorAll('[data-i18n-html]').forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });
}

export function setLang(next, { persist = true } = {}) {
  if (!LANGS.includes(next)) next = 'en';
  lang = next;
  document.documentElement.lang = HTML_LANG[lang];
  document.title = t('meta.title');
  const d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute('content', t('meta.desc'));
  document.querySelectorAll('meta[property="og:title"],meta[name="twitter:title"]').forEach((m) => m.setAttribute('content', t('meta.title')));
  document.querySelectorAll('meta[property="og:description"],meta[name="twitter:description"]').forEach((m) => m.setAttribute('content', t('meta.desc')));
  const ol = document.querySelector('meta[property="og:locale"]');
  if (ol) ol.setAttribute('content', lang === 'pt' ? 'pt_BR' : 'en_US');
  applyI18n();
  document.querySelectorAll('.lang button').forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-pressed', on);
  });
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }
  listeners.forEach((fn) => fn(lang));
}

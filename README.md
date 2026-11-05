# GoGo Games Interactive — site

Site institucional premium (3D controller, scroll cinematográfico, PT/EN). Estático + 1 função serverless para o formulário.

## Rodar / publicar

```bash
npm install          # só para recompilar o JS
npm run build        # gera assets/app.js (three + gsap + lenis + código do site)
python3 -m http.server 4173   # visualização local (o formulário só funciona na Vercel)
```

**Vercel:** `vercel` dentro da pasta (Framework: *Other*, sem build command, output `.`). O `assets/app.js` já está compilado.
`vercel.json` define cache imutável em `/assets/*` e headers de segurança. A pasta `api/` vira a função `/api/submit` automaticamente.

## O que depende de configuração externa

| Item | O que fazer |
|---|---|
| **Envio do formulário** | Defina variáveis de ambiente na Vercel (abaixo). Sem elas o site informa ao visitante que o envio online não está disponível e mostra o e-mail direto — **nunca simula sucesso**. |
| **Domínio final (SEO)** | Em `index.html` troque `https://www.gogogames.com.br/` (canonical, hreflang, JSON-LD) pelo domínio onde o site será publicado. `og:image` também deve ser URL absoluta em produção. |
| **Link de *Cyber War: Neon City*** | Não existe página oficial verificada (Steam/loja). O botão mostra “Link em breve”. Preencha `steam` (ou `url`) em `src/data.js` e rode `npm run build`. |
| **Trailers individuais** | Os botões abrem a página oficial do jogo na Steam (onde o trailer é a primeira mídia). Se a GoGo quiser links diretos de YouTube por jogo, adicione um campo `trailer` em `src/data.js` (não inventamos URLs). |

### Variáveis de ambiente (Vercel → Settings → Environment Variables)

**Canal 1 — e-mail (Resend, https://resend.com)**
- `RESEND_API_KEY` — chave `re_...`
- `SUBMIT_FROM` — ex.: `GoGo Site <envios@seudominio.com>` (domínio verificado no Resend)
- `SUBMIT_TO` — opcional; padrão `gogogamesinteractive@gogogames.com.br`

**Canal 2 — banco (Supabase)** — pode usar junto com o e-mail ou sozinho
- `SUPABASE_URL` — `https://xxxx.supabase.co`
- `SUPABASE_SERVICE_KEY` — chave *service_role* (somente servidor; nunca no navegador)
- `SUPABASE_TABLE` — opcional; padrão `game_submissions`

```sql
create table public.game_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  studio text not null, game text not null, email text not null,
  link text, message text, need text, lang text,
  idempotency_key text unique
);
alter table public.game_submissions enable row level security;  -- sem policies: só a service key escreve/lê
```

O endpoint valida tudo no servidor, usa honeypot, limite de 5 envios/10 min/IP e `Idempotency-Key` (evita duplicados).

## Idiomas

Inglês é o padrão. O seletor 🇧🇷 PT | 🇺🇸 EN no cabeçalho troca na hora, grava em `localStorage` (`gogo-lang`), atualiza `<html lang>`, `<title>` e metas. `?lang=pt` força o idioma (usado nos `hreflang`).
Todos os textos ficam em **`src/i18n.js`** (`en` e `pt` lado a lado). Para editar: altere a chave nos dois dicionários e rode `npm run build`. Nomes de jogos, marcas e empresas não são traduzidos.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Estrutura/semântica (textos via `data-i18n`) |
| `styles.css` | Design system, desktop e layout mobile dedicado |
| `src/i18n.js` | Dicionários PT/EN + utilitários |
| `src/data.js` | Catálogo oficial e IDs verificados da Steam |
| `src/controller.js` | Controle 3D procedural (Three.js) |
| `src/main.js` | Scroll, câmera 3D, HUD, menu mobile, formulário |
| `api/submit.js` | Função serverless do formulário |
| `assets/` | Logo PNG transparente, capas, parceiros, fontes (WebP otimizado) |

## Comportamento por tela

- **> 1100 px (desktop):** experiência completa com seções fixas por scroll (reel de jogos que “mergulha” no controle, vista explodida, galeria horizontal, controle que desvia do cursor).
- **≤ 1100 px (celulares e tablets):** layout próprio, sem seções presas: hero vertical, carrossel de jogos por deslize, cartões de serviço tocáveis, porting em trilho horizontal, menu hambúrguer. O controle 3D aparece no hero e na doca de envio.
- `prefers-reduced-motion` desliga animações pesadas; a animação inicial é pulável (toque) e tem *failsafe* de 7 s (CSS libera a página em 9 s mesmo se o JS falhar).

## Dados verificados (nada inventado)

Conteúdo do site oficial gogogames.com.br: 8 jogos publicados, 4 de porting, parceiros (indie.io, Hooded Horse, plataformas e painel de estúdios), textos institucionais, contatos e redes. Páginas da Steam conferidas pela API pública (nome, desenvolvedora e publisher).

# BitBank — landing page (React + TypeScript + Tailwind)

Porte da landing page `BitBank Landing.dc.html` para React 19 + TypeScript + Tailwind CSS v4 (Vite).

## Rodar

```bash
cd react-ts
npm install
npm run dev
```

Build de produção: `npm run build` · type-check incluso no build (`tsc -b`).

## Estrutura

```
src/
  App.tsx                  # composição das seções + config (equivalente aos tweaks)
  content.ts               # todo o conteúdo e tipos (copy, planos, FAQ, features…)
  index.css                # Tailwind v4 + tokens em @theme + keyframes
  components/
    Header.tsx  Hero.tsx  Stats.tsx  Cashback.tsx  Features.tsx
    ApiSection.tsx  Pricing.tsx  Testimonials.tsx  Quickstart.tsx
    Faq.tsx  Waitlist.tsx  Footer.tsx
    Reveal.tsx             # entrada ao rolar (IntersectionObserver, fail-open)
    Terminal.tsx           # terminal com datilografia (um único loop de rAF)
    BankCard3D.tsx         # cartão 3D: inclina no ponteiro, vira no clique
```

## Tokens de tema

Definidos em `src/index.css` dentro de `@theme`, então viram utilitários direto:
`bg-ink-950`, `text-gold`, `border-line`, `font-mono`, `animate-blink`, etc.

| token | valor | uso |
| --- | --- | --- |
| `ink-950` | `#0A0908` | fundo base |
| `ink-900` / `ink-800` | `#0C0B0A` / `#121110` | seções alternadas e cards |
| `line` / `line-2` / `line-3` | `#1E1B17` … | bordas |
| `gold` / `gold-hi` | `#F5C542` / `#FFD866` | acento e hover |
| `cream` / `mute` | `#F1EEE7` / `#9C958A` | texto e texto secundário |

## Config (equivale aos tweaks)

Em `src/App.tsx`:

- `heroVariant`: `"split"` | `"centered"`
- `defaultAnnual`: começa a tabela de preços no ciclo anual
- `showTestimonials`: liga/desliga a seção de depoimentos

## Notas

- O formulário de waitlist só faz estado local — troque o `onSubmit` de `Waitlist.tsx` pelo seu endpoint.
- Números, depoimentos e dados do cartão são fictícios: substitua antes de publicar.
- Fontes vêm do Google Fonts em `index.html` (Space Grotesk + JetBrains Mono); ícones de marca via Font Awesome (CDN, AWS/Microsoft) e Simple Icons (CDN, Google Cloud/Vercel/Fly.io/Railway) — nenhuma logo de bandeira de cartão é usada.
- Assets de imagem (logo, assinatura, fundos dos cartões e do hero) ficam em `public/assets/`.

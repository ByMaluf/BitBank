# BitBank — landing page (React + TypeScript + Tailwind)

Porte da landing page `BitBank Landing.dc.html` para React 19 + TypeScript + Tailwind CSS v4 (Vite).

## Rodar

```bash
npm install
npm run dev
```

Build de produção: `npm run build` · type-check incluso no build (`tsc -b`).

## Estrutura

Cada componente vive na própria pasta, com o conteúdo (copy/dados) que só ele usa colocado ao lado. Imports usam o alias `@/` (ex.: `@/components/ui/Reveal`), configurado em `tsconfig.json` e `vite.config.ts`.

```
src/
  App.tsx                    # composição das seções + config (equivalente aos tweaks)
  index.css                  # Tailwind v4 + tokens em @theme + keyframes
  components/
    ui/
      Reveal/                # entrada ao rolar (IntersectionObserver, fail-open)
    layout/
      Header/
      Footer/                # + content.ts (colunas do rodapé)
    sections/                # blocos da página, na ordem em que aparecem
      Hero/                  # + Terminal.tsx (datilografia) + content.ts
      Stats/                 # + content.ts
      Cashback/              # + CardDeck.tsx + BankCard3D.tsx (cartão 3D)
      FounderLetter/
      Features/              # + content.ts
      ApiSection/            # + content.ts
      Pricing/               # + content.ts
      Testimonials/          # + content.ts
      Quickstart/            # + content.ts
      Faq/                   # + content.ts
      Waitlist/
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

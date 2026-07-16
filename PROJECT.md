# Tazza Produce — Next.js 14 (App Router) + Tailwind v3 + TypeScript

Logo-themed multi-page grocery site for Tazza Produce (Brooklyn NY). Ported from the v3 static mockup.

## Status
- **Build complete and verified** (`npm run build` exit 0; `next dev` all routes 200).
- Order model: **A — browse online, pay on pickup** (Stripe test-mode-ready; no live charge).
- GitHub: local only. Push deferred until `gh` auth is fixed.

## Stack
- Next.js 14 App Router, React 18, TypeScript, Tailwind v3.
- Palette = logo only (greens `#386838`/`#389858`, gold `#E8B838`, cream `#F8F8F8`) via CSS-var tokens in `tailwind.config.ts` + `app/globals.css`.
- Dark mode via `[data-theme="dark"]`; EN/AR via `LocaleProvider` (RTL for ar).

## Routes
`/` `/about` `/shop` `/hours` `/gallery` `/contact` `/legal` (+ not-found)

## Shared layer (`components/`)
- `Header.tsx` — sticky 74px, nav, lang + theme toggle, cart button.
- `Footer.tsx` — green band, explore/legal links.
- `ThemeProvider.tsx` / `LocaleProvider.tsx` — context + `useTheme()` / `useT()`.
- `Reveal.tsx` + `hooks/useReveal.ts` — bidirectional scroll reveal (reduced-motion safe).
- `shop/CartContext.tsx` + `CartButton.tsx` + `CartDrawer.tsx` — localStorage cart, global.

## Shop / Stripe
- `components/shop/` — 18-product catalog, cart drawer, Model A checkout (collect name/phone/pickup, confirm on pickup).
- Stripe integration point documented in `components/shop/Checkout.tsx` (`/api/checkout` -> PaymentIntent, test mode).
- `env.example` — `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (test keys). Live US keys require a US Stripe account.

## Run
- `npm install` (done; lockfile committed)
- `npm run dev` -> http://localhost:3000
- `npm run build` -> production build

## Notes
- `.second-brain/` — local dev scratch, gitignored.
- `public/` — 19 assets (logo, og-image, 17 store photos).
- `site/` — original static mockup (reference only, not part of the Next app).

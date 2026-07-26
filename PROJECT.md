# Tazza Produce — Next.js 16 (App Router) + Tailwind v3 + TypeScript

Logo-themed multi-page grocery site for Tazza Produce (Brooklyn NY). Ported from the v3 static mockup.

## Status
- **Delivery ready and PUSHED** to https://github.com/651Shadow/taza-produce (public, `main`).
- `npm run build` exit 0 (13 routes). Production server: all pages 200, security headers present, `llm.md` public.
- Audited (UI/UX/security) + hardened. Live on Vercel (deployment-protection gating public/indexable; toggle in dashboard).
- Stack: **Next.js 16 (App Router) + React 19**, TypeScript, Tailwind v3.

## Stack
- Next.js 16 App Router, React 19, TypeScript, Tailwind v3.
- Palette = logo only (greens `#386838`/`#389858`, gold `#E8B838`, cream `#F8F8F8`) via CSS-var tokens in `tailwind.config.ts` + `app/globals.css`.
- Dark mode via `[data-theme="dark"]`; English copy via `LocaleProvider`.

## Routes
`/` `/about` `/shop` `/hours` `/gallery` `/contact` `/legal` (+ not-found, `/api/contact`, `/api/checkout`, `/robots.txt`, `/sitemap.xml`)

## Shared layer (`components/`)
- `Header.tsx` — sticky 74px, nav, theme toggle (icons), cart + menu icons.
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
- `vercel deploy --prod --yes` -> deploy (CLI authed as 651shadow)

## Notes
- `.second-brain/` — committed local knowledge base (source of truth for agents).
- `public/` — 19 assets (logo, og-image, 17 store photos).
- `site/` — original static mockup (reference only, not part of the Next app).
- `REPORT/` / `_photo_originals/` — removed from the repo to keep it lean (build/status notes + photo backups no longer committed).

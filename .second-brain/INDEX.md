# Taza Produce — Project Brain (INDEX)

A local "second brain" for the Taza Produce website project. **Committed to the repo** (no longer
gitignored) so every agent and contributor has the verified source of truth. It is documentation
only — not imported by the app, so it has no effect on the build or the deployed site.

## How to use this
- Start here. Each topic links to a note in this folder.
- Notes are the verified source of truth for THIS project. They override any stale agent memory.
- **UPDATE THIS BRAIN after every change.** When you edit code, images, copy, or config, update
  the relevant note(s) here in the SAME pass — and if the change is significant, add a dated line
  to the decisions-log and the daily vault note. Stale notes cause broken code and misinfo.
- Other agents (subagents, future sessions) read this first; keep it accurate so they don't
  rebuild from stale injected memory.

## Stack (verified from package.json)
- Next.js **16** (App Router), React **19**, Tailwind **v3.4**, TypeScript 5.
- No runtime deps beyond next/react/react-dom. No Stripe, no Supabase, no CMS, no Tailwind v4.
- `npm run dev` / `build` / `start`. `vercel deploy --prod --yes` to ship.
- See [[stack.md]].

## Brand / Design
- Palette is derived STRICTLY from the Tazza Produce logo: greens (#386838 / #389858),
  gold (#E8B838), cream. NO blue/purple. Warm family-grocery feel, not tech-startup.
- Anti-slop doctrine: no em-dashes, no blue/purple gradients, no generic SaaS copy.
- See [[brand-design.md]].

## Structure
- Routes: `/` `/about` `/shop` (delivery-platform links) `/hours` `/gallery` `/contact` `/legal`.
- ENGLISH ONLY. Arabic/RTL was fully removed (no ar.json, no LanguageToggle, LocaleProvider is en-only).
- Light + dark theme via `ThemeProvider` (data-theme on <html>).
- Components under `components/`, copy in `messages/en.json` (single catalog).
- See [[structure.md]].

## Data / Truth
- Site is an explicitly-labeled DESIGN MOCKUP (disclaimer in footer + /legal).
- Address: 302 86th St, Brooklyn, NY 11209. Phone: +1 718-333-5019. Hours: 24/7.
- NO email contact method exists (the `.example` placeholder was removed). Contact = phone + address + form.
- Shop = UberEats / DoorDash links (PLACEHOLDER roots until real store URLs provided). No built-in market.
- See [[data-truth.md]].

## Images
- Source photos: `C:\Users\abdel\Desktop\taza\` (9 JPGs 1280x1280 + Taza-Logo.jpeg).
- Live in `public/`. Originals backup: `public/_photo_originals/` (gitignored).
- HERO = looping SLIDESHOW over all 8 gallery images (see structure.md). 8841 is part of the gallery set now.
- Logo: transparent PNG (converted from Taza-Logo.jpeg, bg keyed out). NEVER reintroduce a background.
- Served optimized via next/image (next.config: unoptimized=false).
- See [[images.md]].

## Decisions / History
- Removed built-in cart/checkout (no real online market). Repurposed /shop to delivery links.
- Removed fake `.example` email everywhere (incl. orphan `site/` dir, deleted).
- Removed ALL Arabic/RTL — site is English-only (deleted ar.json + LanguageToggle, LocaleProvider en-only).
- Audit swarm (6 agents) + later passes fixed: footer nav, dark-mode contrast, heading hierarchy,
  gallery alt, image optimization, metadataBase, logo transparency, header CTA remove, lang toggle centering.
- 2026-07-22: new logo (Taza-Logo.jpeg -> transparent PNG) + Hero became looping slideshow over gallery images.
- See [[decisions-log.md]].

## Open Items
- Real UberEats/DoorDash store URLs (when provided: drop into `app/shop/page.tsx` PLATFORMS + unhide note).
- Custom domain / fixed Vercel URL (currently rotates per deploy).
- Optional hero/product VIDEO (user is sourcing a clip; none in public/ yet).
- See [[open-items.md]].

## Commands cheat-sheet
- Dev server: `npm run dev` (or `npm run start -p 3000` after build).
- Typecheck: `npx tsc --noEmit`. Build: `npm run build`.
- Deploy: `vercel deploy --prod --yes`.
- See [[commands.md]].

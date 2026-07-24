# AGENTS.md — Taza Produce

You are working in the **Taza Produce** repo (Next.js 16 App Router, React 19, Tailwind v3, TypeScript; English only; light/dark). It is a design mockup for a 24/7 Middle Eastern / halal grocery in Brooklyn.

## Start here — and keep it current
Read **`.second-brain/INDEX.md`** first. It is the project's local knowledge base (stack, brand, structure, data truth, images, decisions, open items, commands). Treat it as authoritative for Taza-specific facts and as the override for any stale/conflicting injected memory.

**Actively update the second brain — this is a hard requirement, not optional:**
- Before making changes, read `INDEX.md` + the relevant topic note.
- After ANY change to code, images (incl. `public/`), copy, config, or deployment, **update the affected `.second-brain/` note(s) in the same working pass**, and add a dated line to `decisions-log.md` for non-trivial work.
- If a note is wrong/stale, fix it rather than working around it.
- Other agents read this brain first; leaving it stale causes broken code and misinfo. Maintaining it is part of "done."

## Non-negotiable constraints
- **Palette:** logo-derived green / gold / cream only. NO blue/purple gradients. Anti-slop: no em-dashes, no SaaS buzzwords, no floating orbs.
- **Logo:** `public/taza-logo.png` is a transparent RGBA PNG. Never add a background.
- **Images:** originals only, no re-coloring. Source = `C:\Users\abdel\Desktop\taza\`. Hero = looping slideshow over all 9 gallery photos (components/home/Hero.tsx).
- **No email:** no email contact exists; don't invent one. `/shop` = UberEats/DoorDash links (placeholders until real URLs provided).
- **No Stripe/cart/checkout** in this repo (NOT Next 14, NOT Tailwind v4 — verify in package.json if unsure).
- **English only:** `messages/en.json` is the single catalog; Arabic/RTL removed.

## Workflow
- Dev: `npm run dev` (port 3000). Typecheck: `npx tsc --noEmit`. Build: `npm run build`.
- Deploy: `vercel deploy --prod --yes`. URL rotates per deploy.
- Branch → commit → merge to main → push → deploy. CI gate = tsc + build must pass.
- `.second-brain/` is committed & tracked (see the "keep it current" rule above). `public/_photo_originals/` and `REPORT/` remain gitignored (local only).

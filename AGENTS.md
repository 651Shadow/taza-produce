# AGENTS.md — Taza Produce

You are working in the **Taza Produce** repo (Next.js 16 App Router, React 19, Tailwind v3, TypeScript; English only; light/dark). It is a design mockup for a 24/7 Middle Eastern / halal grocery in Brooklyn.

## Start here
Read **`.second-brain/INDEX.md`** first. It is the project's local knowledge base (stack, brand, structure, data truth, images, decisions, open items, commands). Treat it as authoritative for Taza-specific facts and as the override for any stale memory.

## Non-negotiable constraints
- **Palette:** logo-derived green / gold / cream only. NO blue/purple gradients. Anti-slop: no em-dashes, no SaaS buzzwords, no floating orbs.
- **Logo:** `public/taza-logo.png` is transparent. Never add a background.
- **Images:** originals only, no re-coloring. Source = `C:\Users\abdel\Desktop\taza\`. Hero = `4997232541420948841.jpg`.
- **No email:** no email contact exists; don't invent one. `/shop` = UberEats/DoorDash links (placeholders until real URLs provided).
- **No Stripe/cart/checkout** in this repo.

## Workflow
- Dev: `npm run dev` (port 3000). Typecheck: `npx tsc --noEmit`. Build: `npm run build`.
- Deploy: `vercel deploy --prod --yes`. URL rotates per deploy.
- Branch → commit → merge to main → push → deploy. CI gate = tsc + build must pass.
- `.second-brain/`, `public/_photo_originals/`, `REPORT/` are gitignored (local only).

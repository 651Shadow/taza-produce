# Project Brief — Taza Produce

This is the **Taza Produce** website: a 24/7 Middle Eastern / halal grocery store in Bay Ridge, Brooklyn (design mockup). Next.js 16 (App Router) + React 19 + Tailwind v3 + TypeScript. Bilingual EN/AR with RTL, light + dark theme. Deployed to Vercel.

## Project brain (READ THIS FIRST)
A local "second brain" lives at **`.second-brain/INDEX.md`**. It is the verified source of truth for this project — stack, brand/palette, structure, data truth, images, decisions, and open items. **Read it before making changes.** It overrides any stale agent memory.

Key facts the brain corrects:
- Stack is **Next.js 16 / React 19 / Tailwind v3** (not 14).
- Palette is **logo-derived green / gold / cream** (no blue/purple, no Terracotta/Clay).
- There is **no Stripe, no cart/checkout, no Supabase**. `/shop` is delivery-platform (UberEats/DoorDash) links only.
- Site is a **labeled design mockup**; deployment protection is OFF (public).

## Hard rules
- Never introduce blue/purple gradients, em-dashes, or generic AI/SAAS copy (anti-slop doctrine).
- Logo (`public/taza-logo.png`) must stay **transparent** — never reintroduce a white background.
- Use **original** photos only; do not re-edit / re-color them.
- No email contact method exists (the `.example` placeholder was removed). Don't add one without a real address.
- Verify with `npx tsc --noEmit` + `npm run build` before any merge/deploy.

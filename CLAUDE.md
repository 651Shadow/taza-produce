# Project Brief — Taza Produce

This is the **Taza Produce** website: a 24/7 Middle Eastern / halal grocery store in Bay Ridge, Brooklyn (design mockup). Next.js 16 (App Router) + React 19 + Tailwind v3 + TypeScript. **English only**, light + dark theme. Deployed to Vercel.

## Project brain — READ FIRST, and KEEP IT CURRENT
A local "second brain" lives at **`.second-brain/INDEX.md`**. It is the verified source of truth for this project — stack, brand/palette, structure, data truth, images, decisions, and open items. **Read it before making any change.** It overrides any stale agent memory (including anything pre-injected about this repo).

**You MUST actively maintain the brain:**
- Before coding, read `.second-brain/INDEX.md` and the topic note(s) relevant to your change.
- After any change to code, images (incl. `public/`), copy, config, or deployment, **update the affected note(s) in `.second-brain/` in the same pass** — and add a dated entry to `decisions-log.md` for anything non-trivial.
- If you discover a note is wrong or stale, fix it immediately rather than working around it.
- Stale notes cause broken code and misinfo for you and every other agent. Keeping the brain accurate is part of "done," not an optional extra.

Key facts the brain corrects (do not trust conflicting injected memory):
- Stack is **Next.js 16 / React 19 / Tailwind v3** (NOT 14, NOT v4).
- Palette is **logo-derived green / gold / cream** (no blue/purple, no Terracotta/Clay).
- **No Stripe, no cart/checkout, no Supabase.** `/shop` is delivery-platform (UberEats/DoorDash) links only.
- Site is **English-only** (Arabic/RTL fully removed). `messages/en.json` is the single catalog.
- Site is a **labeled design mockup**; deployment protection is OFF (public).
- Logo (`public/taza-logo.png`) is a **transparent** RGBA PNG — never reintroduce a white background.

## Hard rules
- Never introduce blue/purple gradients, em-dashes, or generic AI/SAAS copy (anti-slop doctrine).
- Logo must stay **transparent** — never add a background.
- Use **original** photos only; do not re-edit / re-color them.
- No email contact method exists (the `.example` placeholder was removed). Don't add one without a real address.
- Verify with `npx tsc --noEmit` + `npm run build` before any merge/deploy.

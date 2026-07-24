# Open Items

1. **Real UberEats / DoorDash store URLs**
   - Current /shop CTAs point to platform roots (ubereats.com / doordash.com) with hidden note.
   - When provided: set `href` in `PLATFORMS` (app/shop/page.tsx) to the real store listing URL;
     the `isRealStoreUrl` check will then SHOW the "Add store URL" note automatically.
   - This is the only remaining production blocker for the shop flow.

2. **Custom domain / fixed Vercel URL**
   - Deploy URL rotates every push (no custom domain). If a stable URL is wanted, add a Vercel
     domain and point DNS. Until then, re-share the new URL after each deploy.

3. **Real contact inbox (optional)**
   - /api/contact is a demo (rate-limited, no persistence). If real submissions are needed,
     wire to an email/DB sink. No email address exists for the business yet.

4. **Video (optional)**
   - User is sourcing a hero/product VIDEO clip. None in `public/` yet. When provided, drop into
     `public/` and wire it (hero background loop or inline section) with a poster + reduced-motion
     fallback. Photos (Taza-Logo.jpeg, 9 JPGs) live at `C:\Users\abdel\Desktop\taza\`.

5. **Stale injected agent memory (resolved)**
   - Older system-injected memory claimed Next 14 / "Terracotta/Clay" palette / Stripe test-mode /
     noindex — all WRONG vs the actual repo (Next 16, green/gold/cream, no Stripe, public).
   - Fixed by `CLAUDE.md` + `AGENTS.md` + this brain: they now instruct agents to READ and ACTIVELY
     UPDATE `.second-brain/` and override any conflicting injected memory. Prefer the brain for
     Taza-specific facts.

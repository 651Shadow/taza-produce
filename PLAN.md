# Tazza Produce — Website Plan (v3, mockup-complete + audit-cleaned)

*Family-owned Middle Eastern + halal grocery, 302 86th St, Brooklyn NY 11209. Open 24/7.
Phone +1 718-333-5019. In-person payments: debit, credit, Mastercard, NFC/Apple Pay/Google Pay.
Online (future): Stripe Checkout mirroring the same methods. Brand: Tazza Produce (logo-derived palette only).*

---

## 1. Hard requirements (locked)
- **Theme = logo colors ONLY.** Palette extracted from `assets/taza-logo.png`:
  light: `#386838` `#389858` `#A8C848` `#E8B838` `#C99A1F` `#1F3D1F` `#F8F8F8` `#F1F5E9` `#E9F0DB` `#DCE8C8` `#1C2A18` `#46553B` `#C9D8B4`.
  dark (overrides): `#15241A` `#1E3326` `#16271C` `#EEF3E6` `#A9D8A0` `#2E4636` `#6FBE84` `#7FD894` `#A9D8A0` `#F2C44B` `#E0B23C` `#F4F1E6` `#0E1A12`.
  No blue/purple, no pure `#000/#fff`, no generic theme colors. White minimized; greens lead.
- **No "vibe-code" tells:** no em-dashes in copy (titles use `|`), no emoji in UI (theme button = "Dark"/"Light" text), no fake badges, no mobile-cut content, no AI stock photos.
- **Real photos only** from `C:\Users\abdel\Desktop\taza\` (17 store images). Exceptions: map placeholder + generated OG image (logo on brand green).
- **Multi-page** (7 pages), not a single scroll. Fixed 74px header, no reflow between pages.
- **Animations:** Vertex-style fade-up on scroll, **bidirectional** (fade out on scroll away, up or down). IntersectionObserver; respects `prefers-reduced-motion`.
- **Dark mode** toggle, persistent (`localStorage`).
- **Language** EN primary + AR toggle, persistent; full body translation + RTL mirroring.
- **Legal pages** present (Terms, Privacy, Refund, Accessibility, Licenses) and launch-ready (NY law, liability cap, Stripe disclosure).

## 2. Pages (mockup done)
`index, about, shop, hours-location, gallery, contact, legal` + `404.html`.
Nav (uniform 7 links, `aria-current` per page): Home · Our Story · Shop · Hours & Location · Gallery · Contact · Legal.
Header actions: Language toggle, Dark-mode toggle, "Order Online" CTA.

## 3. What is built and verified (this mockup)
- Logo-themed palette (light + dark), green-forward (minimal white).
- 74px fixed header across all pages; sticky with shadow-on-scroll.
- Bidirectional scroll reveal (verified in a real browser).
- Dark mode: **all surfaces overridden in dark** (incl. `--surface-2` bands) — no light-on-light text. Verified readable in dark on index + shop.
- Language: EN/AR toggle translates nav, CTAs, **all body copy** (186-string map in `js/ar.js`), and the 4 legal sections (`js/legal.js`); sets `lang`+`dir=rtl`. Verified full Arabic + RTL on multiple pages in light and dark.
- Accessibility: skip link, semantic landmarks, `aria-current`, focus-visible, form labels, reduced-motion.
- SEO/launch stubs: favicon, meta description, OG/Twitter tags, `robots.txt`, `sitemap.xml`, `404.html`, branded `og-image.png`, `env.example` (Stripe test/live keys + US-account caveat).
- Production-readiness fixes from gap analysis: em-dash→`|` in titles, emoji removed, `aria-current` corrected, missing nav links added, kicker/tag contrast fixed (gold→`--green-900`), skip-link contrast fixed, `--ink-soft`→`--text-soft`, two untranslated CTAs wired, legal copy strengthened (NY governing law, liability cap, Stripe data disclosure, no-show handling).

## 4. Open items before a REAL launch (not blocking the mockup)
- **Replace placeholder email** `hello@tazzaproduce.example` in `contact.html` + `legal.html` with the real domain mailbox.
- **US Stripe account:** live US keys need a US entity + EIN + US bank. The Egyptian dev cannot open one — owner creates it post-handoff; test keys drive the demo.
- **Apple Pay on Web:** register + verify the production domain in Stripe; serve `.well-known/apple-developer-merchantid-authorization` on Vercel.
- **CMS/hosting decision:** Decap CMS needs a host with a server/API; **Vercel static cannot run Decap's auth backend.** Options: (a) Vercel static + Decap via Netlify/GitHub OAuth + Git-backed commits, or (b) drop Decap, edit content in repo. Decide before port.
- **Attorney review** of the legal copy (mockup includes a disclaimer to that effect).

## 5. Payment model (recommended: A — order online, pay on pickup)
Mirrors the business docx via Stripe Checkout: debit, credit, Mastercard, Apple Pay/Google Pay (online wallets). In-person NFC tap = Stripe Terminal (out of scope for v1). Card + wallet parity confirmed; "same methods" wording clarified (online=wallets, in-person=NFC at POS).

## 6. Build plan (port to Next.js + Tailwind + Stripe)
1. Scaffold Next.js (App Router) + Tailwind; map CSS vars → Tailwind theme tokens (logo palette only).
2. Convert 7 pages to routes; shared `Header`/`Footer`/`Layout` (74px header, no reflow).
3. Port animations (IntersectionObserver hook), dark mode (next-themes or cookie + `class`), i18n (next-intl: `/en` `/ar`, RTL via `dir`).
4. Shop → product data (MDX/JSON from the 17 photos + categories); cart + Stripe Checkout session; webhook for fulfillment; `.env` from `env.example` (test keys).
5. Legal pages from the strengthened copy; wire Stripe Apple Pay domain verification.
6. Deploy: Vercel; `robots.txt` + `sitemap.xml` + `404`; implement CMS per §4 decision.
7. Owner: create US Stripe account, set live keys, replace email, attorney review, verify Apple Pay domain.

## 7. File map (mockup)
```
site/
  index.html about.html shop.html hours-location.html gallery.html contact.html legal.html 404.html
  css/styles.css  js/main.js  js/ar.js  js/legal.js  ar-translations.json
  env.example  robots.txt  sitemap.xml
  assets/  (17 store photos + taza-logo.png + og-image.png)
```
`ar-translations.json` is the source of truth for `js/ar.js` (strings) + `js/legal.js` (legal). Edit there, regenerate the JS files.

## 8. Verification status
- Prior gap-analysis issues: **all RESOLVED** (post-fix audit confirmed).
- AR coverage: 186 body strings + 4 legal sections translated; 2 previously-missing CTAs wired.
- Production stubs present (env.example, robots, sitemap, 404, OG, favicon, meta).
- Remaining OPEN items are launch-owner tasks (§4), not mockup defects.

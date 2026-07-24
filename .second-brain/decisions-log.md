# Decisions Log

## Removed built-in market (cart/checkout)
- No real online store exists. Deleted CartContext/CartButton/CartDrawer/Checkout/ProductCard/
  ShopView/products.ts + app/api/checkout. Repurposed /shop as delivery-platform links page.
- CTA "Order online" repointed to /hours (actionable). Header green CTA -> /hours.

## Removed fake email
- `hello@tazzaproduce.example` (.example = reserved, non-existent). Removed from ReachBlock,
  ContactLinks, i18n, legal copy. Also deleted obsolete `site/` static-mockup dir that held it.
- Result: 0 email hits site-wide. Do not reintroduce without a real address.

## Image swap to Desktop/taza sources
- User provided 9 JPGs + logo at C:\Users\abdel\Desktop\taza\. Replaced public gallery.
- Removed 6 public-only orphans. Hero -> 8841. Logo re-transparented (desktop had white bg).

## Audit swarm (6 agents) + fixes
Driven by user request for production readiness. Findings + fixes (all verified live):
- Footer: full nav (home/about/shop/hours/gallery/contact), removed duplicate /hours. [HIGH]
- Why.tsx badge: dark fill #2f6b43 (was cream-on-light-green, invisible). [HIGH]
- CTA hover: dark:hover:bg-[#274f33] (was #7FD894, 1.53:1 invisible). [HIGH]
- Contact form error text: text-green900 on gold/10 (was text-gold, 1.51:1). [HIGH]
- Contact heading: H1 -> H2 (ReachBlock + Form) to fix skip. [MED]
- Gallery: next/image + per-photo alt map (was identical alt). [LOW]
- Shop: hide "Add store URL" placeholder note until real store URL. [MED]
- next.config: removed images.unoptimized -> Vercel serves WebP/AVIF (perf). [MED-HIGH]
- Deleted obsolete site/ dir (stale email). [MED]
- metadataBase via VERCEL_PROJECT_PRODUCTION_URL. [low]

## Logo transparency fix (two passes)
- Pass 1: alpha-key white -> alpha 0, but left semi-transparent halo (corner alpha 110) -> box at 46px.
- Pass 2 (final): hard-cut ANY near-white pixel (a>10 & rgb>235) -> alpha 0. Verified corners alpha 0.

## Language toggle knob centering
- Was left-1 w-[calc(50%-4px)] + translate-x-full -> 2-4px gaps, misaligned with EN/ع half.
- Fixed: inset-y-1 left-0 w-1/2 (flush halves, pixel-centered) -> but flush made green bleed to track
  edge (outer box didn't contain it).
- FINAL: track `p-[3px]`, knob `inset-y-[3px] left-[3px] h-[calc(2rem-6px)] w-[calc(50%-3px)]`,
  shift `translate-x-[calc(50%-3px)]` (exact half of inner box, not knob width). Knob now fully
  INSIDE the bordered box, 3px margin all around, centered on each letter half (LTR + RTL).

## Rejected audit claims
- Photo agent flagged 8927/8874 as "yellow cast" -> MEASURED R/B 1.43/1.45 vs hero 1.58
  (less yellow than hero, which agent called natural). Claim rejected; user said originals-only,
  so no photo edits made.

## 2026-07-20 — English-only + more animation
- Removed ALL Arabic/RTL: deleted messages/ar.json + components/LanguageToggle.tsx;
  LocaleProvider stripped to `Locale = 'en'` (no 'ar' branch, no dir write); Header drops the
  toggle + unused locale/setLocale. Docs softened (no bilingual/RTL claims). Verified 0 Arabic
  chars on live / + all 48 bundles.
- Added subtle animations (globals.css keyframes + classes, reduced-motion safe): hero zoom +
  staggered fade-up, Why card hover-lift. Palette/style untouched.

## 2026-07-22 — New logo + hero slideshow
- New logo: `C:\Users\abdel\Desktop\taza\Taza-Logo.jpeg` converted to `public/taza-logo.png`
  (RGBA 200x200, white bg keyed to alpha 0, LANCZOS resize). Corners alpha 0; glyph opaque.
  Asset-only swap, no code change.
- Hero -> looping SLIDESHOW: `components/home/Hero.tsx` cycles all 9 photos every 4.5s with a
  700ms crossfade; `.hero-float`/`.hero-zoom` preserved. Headline/CTA/layout untouched.
  Verified tsc=0, build=0.
- Commit `3bcdac1` (main), deployed. Both changes verified live.

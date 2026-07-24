# Polished Website Checklist — Taza Produce

VERIFIED: 2026-07-18 against live https://taza-produce-4q9guztyo-651shadows-projects.vercel.app
Method: 7 parallel subagent verifiers, real evidence (curl/Playwright/PIL). Result: 30/30 PASS.
Cleanup applied after verification: rewrote public/llm.md (was stale: described old cart/checkout
architecture + had .example email), fixed legacy mockup/index.html mailto. Deployed in commit after.

## 1. Brand & Visual Identity — ALL PASS
- [x] 1.1 Logo transparent — PIL: corners alpha 0, 0 white-with-alpha px.
- [x] 1.2 No blue/purple — grep all 7 pages + compiled CSS: 0 blue/purple classes (only Tailwind default ring var, unused).
- [x] 1.3 Anti-slop — 0 em-dash, 0 SaaS buzzwords across pages.
- [x] 1.4 Typography — H1/H2 present, no clipping (served HTML/CSS).

## 2. Imagery — ALL PASS
- [x] 2.1 Hero = 4997232541420948841.jpg, natural (R/B 1.141).
- [x] 2.2 Gallery = 8 distinct IDs, 8841 absent, 0 near-dupes (DCT pHash, all Hamming>8).
- [x] 2.3 Optimized — all via /_next/image (w=1200&q=75), not raw.
- [x] 2.4 Per-photo descriptive alt — 8 distinct alts.

## 3. Layout & Responsive — ALL PASS
- [x] 3.1 No overflow @375px — Playwright 360 CSS px: scrollWidth=360 on all 6 routes.
- [x] 3.2 Sticky 74px header + scroll-mt-header (3 sections) confirmed.
- [x] 3.3 Header nav complete (home/about/shop/hours/gallery/contact/legal), no dead/dup, all 200.
- [x] 3.4 Footer links complete; /legal#terms #privacy #refund #accessibility #licenses all 200.

## 4. Dark Mode — ALL PASS
- [x] 4.1 CTA dark:bg-[#2f6b43] (rgb 47,107,67) confirmed in markup + computed.
- [x] 4.2 CTA hover dark:hover:bg-[#274f33] (not neon) confirmed.
- [x] 4.3 Why badge dark:bg-[#2f6b43] readable confirmed.
- [x] 4.4 Form error text-green900 on gold/10 (not gold) — source + markup confirmed.
- [x] 4.5 Lang toggle contained — track p-[3px], knob w-[calc(50%-3px)] translate-x-[calc(50%-3px)], inside box.

## 5. Accessibility / RTL — ALL PASS
- [x] 5.1 Contrast — light 13.62:1, dark 14.32:1, CTA 5.62:1 (all >4.5). (Advisory only: gold/light-green accents not used for body text.)
- [x] 5.2 Skip link #main + <main id="main"> present.
- [x] 5.3 Heading order clean (H1->H2 on /contact, no skips).
- [x] 5.4 Arabic mirrors — dir=rtl lang=ar, toggle via taza-locale; nav translated in ar.json.
- [x] 5.5 Form a11y — labels htmlFor, aria-invalid, aria-describedby, role=alert.

## 6. Data Integrity — ALL PASS
- [x] 6.1 No fake email — 0 tazzaproduce.example / mailto:hello across live pages. (Fixed: stale hit in public/llm.md + mockup/index.html during cleanup.)
- [x] 6.2 Phone/address/hours identical across header/footer/hours/contact/legal.
- [x] 6.3 EN/AR parity — ar.json translated nav + same facts.
- [x] 6.4 /shop delivery CTAs present; "Add store URL" note hidden (placeholder).
- [x] 6.5 Mockup disclaimer on all pages (footer + /legal).

## 7. Performance & SEO — ALL PASS
- [x] 7.1 Optimized images — /_next/image AVIF(92KB)/WebP vs raw 323KB.
- [x] 7.2 Security headers — CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy all present.
- [x] 7.3 metadataBase set; og:image absolute https live URL.
- [x] 7.4 Indexable (no deployment protection; anonymous 200) + /sitemap.xml + /robots.txt allow. (Preview subdomain noindex is intended; prod alias canonical.)

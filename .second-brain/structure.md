# Structure

## Routes (app/)
- `/` — Home (Hero slideshow + Why + features)
- `/about` — Our Story
- `/shop` — Delivery platforms (UberEats / DoorDash links; no built-in market)
- `/hours` — Hours & Location (map embed, contact links)
- `/gallery` — Store photo grid (next/image, 8 photos)
- `/contact` — ReachBlock + ContactForm (demo, rate-limited)
- `/legal` — Terms / Privacy / Refund / Accessibility / Licenses (anchors)
- `/api/contact` — POST handler, in-memory rate-limit (429)

## i18n (ENGLISH ONLY)
- SINGLE catalog: `messages/en.json`. `ar.json` was DELETED (Arabic removed).
- `LocaleProvider` is en-only (`type Locale = 'en'`), reads `MESSAGES.en`, keyed `t('key')` lookup.
  No `dir` write, no RTL. Pages call `useT()` / `useLocale()` for `t`.

## Theme
- `ThemeProvider` (client) toggles `data-theme` on <html> (light/dark), persisted to localStorage.

## Key components
- `components/Header.tsx` — sticky 74px. Brand (logo+name), primary nav, ThemeToggle,
  mobile hamburger. (LanguageToggle REMOVED; desktop "Hours" CTA Link removed earlier — use nav/footer.)
- `components/home/Hero.tsx` — CLIENT component. Looping SLIDESHOW: `IMAGES` array (all 9 photos),
  `useState`+`setInterval(4500ms)` advancing `i % length`; stacked absolute imgs inside `.hero-float`,
  active = `opacity-100` else `opacity-0`, `transition-opacity duration-700` crossfade. `.hero-zoom`
  on each img. Headline/CTA/layout untouched.
- `components/home/Why.tsx` — 4 feature cards; badge `bg-green700 dark:bg-[#2f6b43]`; hover lift + stagger.
- `components/gallery/PhotoGrid.tsx` — next/image grid, 8 photos, per-photo alt map.
- `components/contact/ContactForm.tsx` — client form; error text `text-green900` (not gold).
- `components/contact/ReachBlock.tsx` — phone/address/hours (no email).

## Layout
- `app/layout.tsx` — metadata (metadataBase), LocaleProvider + ThemeProvider wrappers, skip link.
  `<html lang="en">`, no dir attribute.
- Fixed header height 74px -> content uses `scroll-mt-header` for anchor offset.

## Animations (globals.css)
- Keyframes: `taza-fade-up`, `taza-fade-in`, `taza-hero-zoom`; classes `.hero-zoom` (8s scale),
  `.hero-float`, `.fade-up`, `.fade-in`, `.card-lift`, `.delay-1..5` (stagger).
- ALL disabled under `@media (prefers-reduced-motion: reduce)` (forces visible final state).

# Brand / Design

## Palette (STRICTLY logo-derived — do not introduce other hues)
Source: Tazza Produce logo. Greens + gold + cream only. NO blue/purple anywhere. (Tailwind is v3, not v4.)
- Green dark: #386838  (--green-900)
- Green mid: #389858  (--green-700, light-mode button)
- Green light: #6FBE84 (--green-700 in dark mode)
- Gold: #E8B838 (--gold, accent)
- Cream / onBrand text: #F4F1E6 (--onBrand)
- Light bg: #F1F5E9 (--bg), surface #FFFFFF-ish, text #1C2A18 (--text)
- Dark bg: #15241A (--bg), surface #1E3326, text #EEF3E6 (--text)
- Deep (darkest green): CTA uses #2f6b43 (calm forest), hover #274f33.

## Anti-slop doctrine (first-class gate)
- No em-dashes in copy.
- No blue/purple gradients.
- No generic SaaS buzzwords (seamless/elevate/leverage/powerful/next-gen).
- No floating orbs / generic AI hero.
- Real store photography, not stock.
- Editorial serif headlines (Fraunces) + clean sans body (Hanken Grotesk).

## Typography
- Latin: Fraunces (serif display) + Hanken Grotesk (body). Both `subsets:['latin']`.
- NO Arabic webfont (Arabic/RTL was removed; site is English-only).

## Dark mode
- data-theme="dark" on <html>.
- CTA: `bg-green700 dark:bg-[#2f6b43]`, hover `hover:bg-green500 dark:hover:bg-[#274f33]`.
- Contrast rule: cream text on green must stay >= 4.5:1. Never light-green fill + cream in dark mode.

## Logo
- `public/taza-logo.png` — transparent RGBA PNG, 200x200. Built from `C:\Users\abdel\Desktop\taza\Taza-Logo.jpeg`
  (white bg keyed to alpha 0). Corners alpha 0, glyph opaque.
- NEVER reintroduce a white/solid background. If replacing, re-apply transparent treatment.

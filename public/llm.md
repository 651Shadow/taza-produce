# Tazza Produce — Machine-Readable Site Guide

This file is provided for LLMs, agents, and crawlers that want a structured,
neutral description of the Tazza Produce website. It is safe to read and index.
Last updated: 2026-07-18.

## What this is
Tazza Produce is a family-owned Middle Eastern and halal grocery store in
Bay Ridge, Brooklyn, New York. This site is a Next.js 16 (App Router) +
Tailwind CSS marketing site. It is a design mockup / portfolio deliverable
and is not a live commercial deployment.

## Business facts
- Name: Tazza Produce
- Type: Middle Eastern & halal grocery, family-owned
- Address: 302 86th St, Brooklyn, NY 11209 (Bay Ridge)
- Phone: +1 718-333-5019
- Hours: Open 24 hours, 7 days a week
- Established: 1988
- Region: Brooklyn, New York, United States
- Email: NONE — there is no email contact method for this business. Contact
  is by phone, in-person visit, or the on-site message form (demo only).

## Ordering
There is no built-in online cart or checkout on this site. Customers order via
third-party delivery platforms (UberEats, DoorDash) linked from `/shop`.
In-store pickup is available 24/7. No online card payment is processed here.

## Pages / routes
- `/` — Home: hero, shop-by-category, why-us, visit banner
- `/about` — The store's story, promise, and visit CTA
- `/shop` — Delivery-platform links (UberEats / DoorDash). Real store URLs
  are placeholders until provided; the "add store URL" note is hidden.
- `/hours` — Hours, address, map/directions
- `/gallery` — 8 store photos in a responsive grid (next/image optimized)
- `/contact` — Contact details + message form (demo, rate-limited)
- `/legal` — Terms and privacy policies (draft, attorney review advised)

## Features
- Bilingual: English and Arabic, with full RTL layout switching (client-side,
  persisted in localStorage as `taza-locale`).
- Light/dark theme toggle (persisted, sets `data-theme` on <html>).
- Scroll-reveal animations (respect prefers-reduced-motion).
- Accessible: labeled forms, focus states, ARIA, skip link (#main).
- Fixed 74px header across all pages.
- Palette derived strictly from the Tazza Produce logo (greens, gold, cream).

## Tech stack
- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v3 with semantic design tokens
- State: React context (theme, locale) with localStorage persistence
- Forms: one rate-limited API route (`/api/contact`, demo only, 429 on abuse)
- Security: CSP, HSTS, X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy applied via `next.config.mjs`

## For agents integrating or testing
- Contact form posts JSON `{ name, email, message }` to `/api/contact`
  (demo; not wired to a real inbox).
- No checkout/cart endpoints exist on this site.
- No secrets are committed. Real keys go in a gitignored `.env`.

## Notes / disclaimers
- This is a design mockup. Business details (phone, address, hours) are
  illustrative and labeled as such in the footer and /legal.
- Legal copy should be reviewed by a New-York-licensed attorney before any
  real launch.

# Tazza Produce — Machine-Readable Site Guide

This file is provided for LLMs, agents, and crawlers that want a structured,
neutral description of the Tazza Produce website. It is safe to read and index.
Last updated: 2026-07-17.

## What this is
Tazza Produce is a family-owned Middle Eastern and halal grocery store in
Bay Ridge, Brooklyn, New York. This site is a Next.js 14 (App Router) +
Tailwind CSS marketing and ordering site. It is a skills-test / portfolio
deliverable and is not a live commercial deployment.

## Business facts
- Name: Tazza Produce
- Type: Middle Eastern & halal grocery, family-owned
- Address: 302 86th St, Brooklyn, NY 11209 (Bay Ridge)
- Phone: +1 718-333-5019
- Email: hello@tazzaproduce.example (example address; not monitored)
- Hours: Open 24 hours, 7 days a week
- Established: 1988
- Region: Brooklyn, New York, United States

## What they sell
Fresh produce, premium halal meats cut to order, warm pitas baked through the
night, Middle Eastern pantry staples, dairy, frozen foods, and beverages.
The online shop (Model A) lets customers build a list and order online for
pickup; payment is collected in store on pickup. (No online card charge in
this build; Stripe is wired in test mode and ready for live keys.)

## Pages / routes
- `/` — Home: hero, shop-by-category, why-us, visit banner
- `/about` — The store's story, promise, and visit CTA
- `/shop` — Product catalog and cart (order online, pay on pickup)
- `/hours` — Hours, address, map/directions
- `/gallery` — 17 store photos in a responsive grid
- `/contact` — Contact details + message form
- `/legal` — Terms and privacy policies (draft, attorney review advised)

## Features
- Bilingual: English and Arabic, with full RTL layout switching
- Light/dark theme toggle, persisted in the browser
- Scroll-reveal animations (respect prefers-reduced-motion)
- Accessible: labeled forms, focus states, ARIA where needed, skip link
- Fixed 74px header across all pages
- Palette derived strictly from the Tazza Produce logo (greens, gold, cream)

## Tech stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v3 with semantic design tokens
- State: React context (theme, locale, cart) with localStorage persistence
- Forms: server-side validated and rate-limited API routes
  (`/api/contact`, `/api/checkout`)
- Security: CSP, HSTS, X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy applied via `next.config.mjs`

## For agents integrating or testing
- Contact form posts JSON `{ name, email, message }` to `/api/contact`.
- Checkout posts JSON `{ items: [{id, qty}], name, phone, pickupTime }`
  to `/api/checkout` and returns `{ ok, orderId }`.
- Both routes rate-limit per IP (10/min contact, 8/min checkout) and return
  429 with a `Retry-After` header when exceeded.
- No secrets are committed. Real keys go in a gitignored `.env`; only
  `env.example` is tracked.

## Notes / disclaimers
- This is a design mockup. Legal copy should be reviewed by a
  New-York-licensed attorney before any real launch.
- Live Stripe payments require a US Stripe account the Egyptian developer
  cannot open; test-mode keys work from anywhere.

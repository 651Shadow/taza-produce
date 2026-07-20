# Tazza Produce

A marketing website for **Tazza Produce** — a
family-owned Middle Eastern & halal grocery store in Bay Ridge, Brooklyn, open 24 hours.
Built as a polished, accessible, production-ready front-end deliverable.

> **Note:** This is a design mockup / portfolio build. Business details (phone, address,
> hours) are illustrative and labeled as such in the footer and on the legal page. There
> is no real online store, payment processing, or email contact on this site.

## What it is

- **7 routes:** Home, About, Shop, Hours & Location, Gallery, Contact, Legal
- **Light / dark theme** with a calm, logo-derived palette (greens, gold, cream)
- **Responsive:** mobile-first, no horizontal overflow down to 360px
- **Accessible:** WCAG 2.2 AA contrast, skip link, labeled forms, logical heading order
- **Optimized media:** images served via Next.js image optimization (AVIF / WebP)
- **Delivery, not checkout:** `/shop` links out to UberEats / DoorDash (placeholder URLs
  until the real store links are provided)

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v3 with semantic design tokens |
| State | React context (theme, locale) + `localStorage` |
| Forms | one rate-limited API route (`/api/contact`, demo only) |
| Deploy | Vercel |

There are **no payments, no database, and no API keys** required.

## Getting started

### Prerequisites
- Node.js 18.18+ (Node 20+ recommended)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev      # http://localhost:3000
```

### Build & start (production-like)

```bash
npm run build
npm run start    # serves the build on :3000
```

### Type-check

```bash
npx tsc --noEmit
```

### Lint

```bash
npm run lint
```

## Environment variables

**None required.**

- Local dev runs with zero configuration.
- On Vercel, the platform auto-injects `VERCEL_PROJECT_PRODUCTION_URL`, which is used for
  `metadataBase` and Open Graph image URLs. No `.env` setup is needed.
- See `env.example` for reference (it documents that no keys are necessary).

## Deploy

Push to the connected Git repo, or run:

```bash
vercel deploy --prod
```

The site is public (deployment protection is off) and includes `robots.txt` + `sitemap.xml`.

## Project structure

```
app/                 # routes (layout, page per route, api/contact)
components/          # Header, ThemeToggle, home/, gallery/, contact/, hours/
messages/            # en.json (all UI copy)
public/              # images (logo + store photos), llm.md
hooks/               # useReveal (scroll-reveal)
lib/                 # rateLimit (in-memory API limiter)
next.config.mjs      # image formats, security headers, metadataBase
tailwind.config.ts   # palette tokens
CLAUDE.md / AGENTS.md# agent onboarding (point to .second-brain/)
```

## For developers

`.second-brain/INDEX.md` is a local knowledge base (stack, brand rules, structure, data
truth, decisions, open items). It is gitignored and lives only in the working tree — read
it when extending the site. `CLAUDE.md` / `AGENTS.md` point future agents there.

## License

See the legal page (`/legal` → Licenses) for asset/attribution notes.

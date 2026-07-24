# Stack (verified — package.json)

- **Next.js:** ^16.0.0 (App Router)
- **React / React-DOM:** ^19.0.0
- **Tailwind CSS:** ^3.4.4 (v3, NOT v4)
- **TypeScript:** ^5.4.5
- **PostCSS / Autoprefixer:** 8.4 / 10.4
- **ESLint:** ^9.0.0 + eslint-config-next ^16.0.0

## Runtime dependencies
Only: `next`, `react`, `react-dom`. No DB, no auth, no payment SDK, no CMS.

## Scripts
- `dev` -> next dev
- `build` -> next build
- `start` -> next start
- `lint` -> next lint

## Config files
- `next.config.mjs` — image optimization ON (formats avif/webp), CSP + security headers,
  `metadataBase` via `VERCEL_PROJECT_PRODUCTION_URL`.
- `tailwind.config.ts` — custom palette tokens (green/gold/cream), darkMode 'class' (data-theme).
- `globals.css` — CSS variables for palette + dark theme + base styles.
- `tsconfig.json` — `@/*` path alias -> project root.

## Deploy
- Vercel. `vercel deploy --prod --yes`. URL rotates per deploy (no custom domain set).
- Deployment protection is OFF (site is public/indexable).
- CI gate before merge: `npx tsc --noEmit` + `npm run build` must both pass.

## Node
- Works on current Node (Next 16 requires Node 18.18+/20+). dev server runs in background on port 3000.

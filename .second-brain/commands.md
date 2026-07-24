# Commands Cheat-Sheet

## Local dev
- `cd C:\Users\abdel\Projects\taza-produce`
- Start dev server (background): `npm run dev`  -> http://localhost:3000
- Or after build: `npm run start -p 3000`

## Typecheck + build (CI gate before merge)
- `npx tsc --noEmit`
- `npm run build`

## Git workflow used in this project
- Feature branch: `git checkout -b fix/<name>`
- `git add -A && git commit -m "..."`
- `git checkout main && git merge fix/<name> && git branch -d fix/<name>`
- `git push origin main`

## Deploy
- `vercel deploy --prod --yes`
- Live URL rotates per deploy; re-share after each push.

## Verify live (after deploy)
- Get URL: `vercel ls --prod | grep -oE "https://taza-produce-[a-z0-9]+-651shadows-projects.vercel.app"`
- Spot checks:
  - `curl -s "$URL/" | grep -oE 'src="/49972325414209488[0-9]+\.jpg"'`  (hero img)
  - `curl -s "$URL/gallery" | grep -oE '/_next/image\?url=%2F49972325414209488[0-9]+\.jpg' | sort -u` (gallery)
  - `curl -s -o /tmp/logo.png "$URL/taza-logo.png" && python -c "from PIL import Image; ..."` (logo alpha)

## Image ops (Python / Pillow)
- Logo transparency: open RGBA, set any near-white (rgb>235 & a>10) alpha=0, save.
- Measure cast: resize to 64x64, avg RGB, R/B ratio (>1.3 = warm; ~1 = neutral).

## Notes
- `.second-brain/` is gitignored — never commit it.
- `public/_photo_originals/` is gitignored — local backup only.
- `REPORT/` is gitignored — private build/status notes.

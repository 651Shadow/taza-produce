# Images

## Source of truth (user-provided)
- Folder: `C:\Users\abdel\Desktop\taza\`
- Contents: 9 JPGs (1280x1280) + `Taza-Logo.jpeg` (the current logo source, captured 2026-07-22).
  (The old `taza-logo.png` in this folder is superseded — live logo is built from `Taza-Logo.jpeg`.)

## Live location
- `public/*.jpg` — the 9 store photos (8 gallery + 8841, all used in the hero slideshow).
- `public/taza-logo.png` — transparent logo (200x200 RGBA, built from Taza-Logo.jpeg).
- Source JPGs live on disk only at `C:\Users\abdel\Desktop\taza\`; `_photo_originals/` backups were removed from the repo to keep it lean.

## Which photo is where
- HERO = LOOPING SLIDESHOW over the gallery set, in `components/home/Hero.tsx` (IMAGES array):
  8804, 8841, 8851, 8854, 8870, 8874, 8918, 8919, 8927  (all 9 photos cycle every ~4.5s, crossfade).
- GALLERY (8 photos, `components/gallery/PhotoGrid.tsx`):
  8804, 8851, 8854, 8870, 8874, 8918, 8919, 8927.
  Note: 8841 is in the hero slideshow but NOT in the gallery grid (avoids duplicate display).

## Logo
- Source: `C:\Users\abdel\Desktop\taza\Taza-Logo.jpeg` (white-ish background, ~252,251,247).
- Built: convert JPEG -> RGBA PNG, key bg (rgb>235) to alpha 0, resize 1254->200 px (LANCZOS).
  Saved as `public/taza-logo.png` (same filename; header imports `/taza-logo.png`).
- MUST stay TRANSPARENT. If re-importing, re-apply the white->alpha-0 treatment. Never add a bg.

## Rules
- Use ORIGINAL photos only. Do NOT re-edit / re-color / duotone them. The user rejected
  earlier white-balance/duotone edits. If a photo looks off, name the file; do not auto-fix.
- Logo must stay TRANSPARENT (hard alpha-cut). The desktop source logo had a white bg; if
  re-imported, re-apply transparency (white -> alpha 0).
- Optimization: served via next/image (next.config images.unoptimized=false). Vercel outputs
  WebP/AVIF. Do not commit raw resized copies; let the optimizer handle it.
- Dedup: gallery must not show near-identical subjects. pHash check before adding any photo.

## Removed (no longer in public/)
- 6 orphans dropped when swapping to Desktop/taza sources: 8805, 8845, 8846, 8869, 8871, 8928.

'use client';

import { useT } from '@/components/LocaleProvider';
import { Reveal } from '@/components/Reveal';
import { PhotoGrid } from '@/components/gallery/PhotoGrid';
import { VisitBand } from '@/components/gallery/VisitBand';

export default function GalleryPage() {
  const t = useT();

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-12">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-green700">
          {t('gallery.eyebrow')}
        </p>
        <h1 className="mt-2 text-4xl font-bold text-text">{t('gallery.hero')}</h1>
        <p className="mt-3 text-lg text-textSoft">{t('gallery.sub')}</p>
      </Reveal>

      <Reveal className="mt-10">
        <PhotoGrid />
      </Reveal>

      <Reveal className="mt-12">
        <VisitBand />
      </Reveal>
    </main>
  );
}

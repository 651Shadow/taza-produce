'use client';

import { useT } from '@/components/LocaleProvider';
import { Reveal } from '@/components/Reveal';

export function AboutHero() {
  const t = useT();
  return (
    <Reveal as="section" className="scroll-mt-header bg-deep text-onBrand">
      <div className="mx-auto max-w-[1180px] px-5 py-[78px]">
        <p className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-gold">
          {t('about.eyebrow')}
        </p>
        <h1 className="mt-3 font-[Fraunces,Georgia,serif] text-[clamp(2.3rem,5.5vw,3.9rem)] font-bold leading-[1.12] text-onBrand">
          {t('about.hero')}
        </h1>
        <p className="mt-5 max-w-[66ch] text-onBrand">{t('about.story')}</p>
      </div>
    </Reveal>
  );
}

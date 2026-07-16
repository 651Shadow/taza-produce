'use client';

import { useT } from '@/components/LocaleProvider';
import { Reveal } from '@/components/Reveal';

export function AboutVisit() {
  const t = useT();
  return (
    <Reveal as="section" className="bg-deep py-[76px] text-onBrand">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-gold">
            {t('about.kicker')}
          </p>
          <h2 className="mt-2 font-[Fraunces,Georgia,serif] text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] text-onBrand">
            {t('about.visit')}
          </h2>
          <p className="mt-3 max-w-[60ch] text-onBrand">{t('about.visit.body')}</p>
        </div>
        <a
          href="/hours"
          className="inline-block shrink-0 rounded-lg bg-gold px-5 py-3 font-bold text-deep transition-transform duration-200 hover:-translate-y-0.5"
        >
          {t('cta.hours')}
        </a>
      </div>
    </Reveal>
  );
}

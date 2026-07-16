'use client';

import { useT } from '@/components/LocaleProvider';
import { Reveal } from '@/components/Reveal';

export function AboutStory() {
  const t = useT();
  return (
    <Reveal as="section" className="bg-bg py-[76px] text-text">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-5 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
        <div>
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-green900">
            {t('about.kicker')}
          </p>
          <h2 className="mt-2 font-[Fraunces,Georgia,serif] text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] text-green900">
            {t('about.story.head')}
          </h2>
        </div>
        <div>
          <p className="mb-4 max-w-[66ch] text-textSoft">{t('about.story.body1')}</p>
          <p className="max-w-[66ch] text-textSoft">{t('about.story.body2')}</p>
        </div>
      </div>
    </Reveal>
  );
}

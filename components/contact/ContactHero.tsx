'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

export function ContactHero() {
  const t = useT();
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green700">
            {t('contact.eyebrow')}
          </p>
          <h1 className="font-serif text-4xl font-semibold text-text md:text-5xl">
            {t('contact.hero')}
          </h1>
          <p className="mt-4 text-lg text-textSoft">{t('contact.sub')}</p>
        </Reveal>
      </div>
    </section>
  );
}

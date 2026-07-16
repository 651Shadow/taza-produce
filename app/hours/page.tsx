'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';
import { HoursTable } from '@/components/hours/HoursTable';
import { LocationMap } from '@/components/hours/LocationMap';
import { ContactLinks } from '@/components/hours/ContactLinks';
import { CtaBand } from '@/components/hours/CtaBand';

export default function HoursPage() {
  const t = useT();

  return (
    <main className="bg-bg">
      {/* Hero */}
      <Reveal as="section" className="mx-auto max-w-5xl px-5 pt-[calc(74px+3rem)] pb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green700 dark:text-green700">
          {t('hours.eyebrow')}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
          {t('hours.hero')}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-textSoft">{t('hours.sub')}</p>
      </Reveal>

      {/* Hours table */}
      <Reveal as="section" className="px-5 py-10">
        <HoursTable />
      </Reveal>

      {/* Location + map placeholder */}
      <Reveal as="section" className="px-5 py-10">
        <LocationMap />
      </Reveal>

      {/* Contact quick links */}
      <Reveal as="section" className="px-5 py-10">
        <ContactLinks />
      </Reveal>

      {/* CTA band */}
      <Reveal as="section" className="bg-deep text-onBrand">
        <CtaBand />
      </Reveal>
    </main>
  );
}

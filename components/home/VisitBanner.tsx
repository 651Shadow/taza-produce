'use client';

import Link from 'next/link';
import { useT } from '@/components/LocaleProvider';

export default function VisitBanner() {
  const t = useT();
  return (
    <section className="scroll-mt-header bg-deep text-onBrand">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-onBrand">
              {t('visit.head')}
            </h2>
            <p className="mt-2 text-onBrand opacity-90">{t('visit.body')}</p>
          </div>
          <Link
            href="/hours"
            className="shrink-0 rounded-lg bg-gold px-5 py-3 font-semibold text-deep hover:bg-gold-deep"
          >
            {t('cta.hours')}
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useT } from '@/components/LocaleProvider';

export function VisitBand() {
  const t = useT();
  return (
    <Link
      href="/hours"
      className="group block rounded-md bg-deep px-6 py-10 text-center text-onBrand transition hover:brightness-110"
    >
      <p className="text-lg font-semibold">{t('gallery.visit')}</p>
      <span className="mt-2 inline-block text-sm underline transition group-hover:text-gold">
        {t('cta.hours')}
      </span>
    </Link>
  );
}

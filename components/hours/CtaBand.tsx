'use client';

import Link from 'next/link';
import { useT } from '@/components/LocaleProvider';

export function CtaBand() {
  const t = useT();

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 text-center">
      <h2 className="text-2xl font-semibold sm:text-3xl">{t('cta.shop')}</h2>
      <p className="mx-auto mt-3 max-w-xl text-onBrand/80">{t('hours.sub')}</p>
      <Link
        href="/shop"
        className="mt-6 inline-block rounded-full bg-gold px-7 py-3 font-semibold text-deep transition-opacity hover:opacity-90"
      >
        {t('cta.order')}
      </Link>
    </div>
  );
}

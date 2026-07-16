'use client';

import { useT } from '@/components/LocaleProvider';

export function LocationMap() {
  const t = useT();

  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-text">{t('reach.title')}</h2>
        <address className="not-italic text-text">
          <p className="text-lg leading-relaxed">
            {t('reach.address1')}
            <br />
            {t('reach.address2')}
            <br />
            {t('reach.address3')}
          </p>
          <p className="mt-5">
            <span className="font-medium">{t('reach.phone')} </span>
            <a
              href="tel:+17183335019"
              className="text-green700 underline hover:text-gold dark:text-green700"
            >
              +1 718-333-5019
            </a>
          </p>
          <p className="mt-3 text-sm text-textSoft">{t('reach.pay')}</p>
        </address>
      </div>

      <div
        role="img"
        aria-label={`${t('reach.address1')}, ${t('reach.address2')}`}
        className="flex min-h-[260px] items-center justify-center rounded-2xl border border-line bg-surface2 p-6 text-center"
      >
        <div>
          <p className="font-medium text-text">{t('reach.address1')}</p>
          <p className="text-textSoft">{t('reach.address2')}</p>
          <p className="mt-2 text-sm text-textSoft">{t('hours.map')}</p>
        </div>
      </div>
    </div>
  );
}

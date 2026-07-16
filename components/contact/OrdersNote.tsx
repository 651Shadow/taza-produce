'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

export function OrdersNote() {
  const t = useT();
  return (
    <section className="border-t border-line bg-surface2">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green700">
              {t('contact.orders.kicker')}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-text md:text-3xl">
              {t('contact.orders.head')}
            </h2>
          </Reveal>
          <Reveal className="d2">
            <p className="text-textSoft">{t('contact.orders.body')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

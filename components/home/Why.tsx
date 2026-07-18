'use client';

import { useT } from '@/components/LocaleProvider';

const FEATS = [
  { key: 'fresh', n: '1' },
  { key: 'halal', n: '2' },
  { key: 'community', n: '3' },
  { key: 'value', n: '4' },
];

export default function Why() {
  const t = useT();
  return (
    <section className="scroll-mt-header bg-surface2 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-green900">
            {t('why.kicker')}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-green900">
            {t('why.head')}
          </h2>
          <p className="mt-2 text-textSoft">{t('why.sub')}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATS.map((f) => (
            <div
              key={f.key}
              className="flex flex-col rounded-xl border border-line bg-surface p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green700 dark:bg-[#2f6b43] font-serif font-bold text-onBrand">
                {f.n}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-green900">
                {t(`why.${f.key}`)}
              </h3>
              <p className="mt-1 text-sm text-textSoft">{t(`why.${f.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

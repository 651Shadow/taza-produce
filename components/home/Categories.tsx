'use client';

import Link from 'next/link';
import { useT } from '@/components/LocaleProvider';

const CATS: { key: string; icon: string }[] = [
  { key: 'produce', icon: 'bg-green700' },
  { key: 'meats', icon: 'bg-gold' },
  { key: 'pantry', icon: 'bg-accent' },
  { key: 'dairy', icon: 'bg-green500' },
  { key: 'frozen', icon: 'bg-green900' },
  { key: 'beverages', icon: 'bg-green700' },
];

function CatIcon({ color }: { color: string }) {
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-full ${color}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-onBrand"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C7 6 5 11 5 15a7 7 0 0014 0c0-4-2-9-7-13z" />
      </svg>
    </span>
  );
}

export default function Categories() {
  const t = useT();
  return (
    <section className="scroll-mt-header bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-green900">
            {t('cat.kicker')}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-green900">
            {t('cat.head')}
          </h2>
          <p className="mt-2 text-textSoft">{t('cat.sub')}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATS.map((c) => (
            <Link
              key={c.key}
              href="/shop"
              className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition-transform hover:-translate-y-1 hover:border-accent"
            >
              <CatIcon color={c.icon} />
              <h3 className="mt-4 font-serif text-xl font-bold text-green900">
                {t(`cat.${c.key}`)}
              </h3>
              <p className="mt-1 text-sm text-textSoft">{t(`cat.${c.key}.desc`)}</p>
              <span className="mt-3 font-semibold text-green700">
                {t(`cat.${c.key}.browse`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

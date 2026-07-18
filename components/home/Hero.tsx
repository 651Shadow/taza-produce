'use client';

import Link from 'next/link';
import { useT } from '@/components/LocaleProvider';

export default function Hero() {
  const t = useT();
  return (
    <section className="scroll-mt-header bg-deep text-onBrand">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-gold">
              {t('eyebrow.location')}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-onBrand sm:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="mt-4 max-w-xl text-onBrand opacity-90">{t('hero.sub')}</p>
            <p className="mt-4 font-semibold text-accent">{t('hero.family')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/hours"
                className="rounded-lg bg-green700 dark:bg-[#2f6b43] px-5 py-3 font-semibold text-onBrand hover:bg-green500 dark:hover:bg-[#274f33]"
              >
                {t('cta.hours')}
              </Link>
              <Link
                href="/about"
                className="btn-ghost rounded-lg border border-gold px-5 py-3 font-semibold text-gold hover:bg-gold hover:text-deep"
              >
                {t('hero.actions.visit')}
              </Link>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/4997232541420948841.jpg"
              alt={t('hero.title')}
              className="aspect-[4/3] w-full rounded-2xl border-2 border-gold object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

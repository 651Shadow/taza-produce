'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useT } from '@/components/LocaleProvider';

const IMAGES: { file: string; alt: string }[] = [
  { file: '4997232541420948804.jpg', alt: 'Fresh produce aisle with stacked fruits and vegetables' },
  { file: '4997232541420948851.jpg', alt: 'Display of fresh herbs and leafy greens' },
  { file: '4997232541420948854.jpg', alt: 'Bakery and bread section' },
  { file: '4997232541420948870.jpg', alt: 'Seasonal fruit display with price signs' },
  { file: '4997232541420948874.jpg', alt: 'Wire shelving with canned and packaged goods' },
  { file: '4997232541420948918.jpg', alt: 'Storefront interior with shoppers' },
  { file: '4997232541420948919.jpg', alt: 'Checkout and deli area' },
  { file: '4997232541420948927.jpg', alt: 'Garlic, mushrooms, and pantry containers' },
];

const SLIDE_MS = 4500;

export default function Hero() {
  const t = useT();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="scroll-mt-header bg-deep text-onBrand">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="fade-up delay-1 text-xs font-bold uppercase tracking-[0.1em] text-gold">
              {t('eyebrow.location')}
            </p>
            <h1 className="fade-up delay-2 mt-3 font-serif text-4xl font-bold text-onBrand sm:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="fade-up delay-3 mt-4 max-w-xl text-onBrand opacity-90">{t('hero.sub')}</p>
            <p className="fade-up delay-4 mt-4 font-semibold text-accent">{t('hero.family')}</p>
            <div className="fade-up delay-5 mt-6 flex flex-wrap gap-3">
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
          <div className="hero-float">
            <div className="relative aspect-[4/3] w-full">
              {IMAGES.map((img, idx) => (
                <img
                  key={img.file}
                  src={`/${img.file}`}
                  alt={img.alt}
                  className={`hero-zoom absolute inset-0 h-full w-full rounded-2xl border-2 border-gold object-cover transition-opacity duration-700 ${
                    idx === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

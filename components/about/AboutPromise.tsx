'use client';

import { useT } from '@/components/LocaleProvider';
import { Reveal } from '@/components/Reveal';

interface PromiseCard {
  tag: string;
  title: string;
  body: string;
}

export function AboutPromise() {
  const t = useT();

  const cards: PromiseCard[] = [
    { tag: 'about.card1.tag', title: 'about.card1.title', body: 'about.card1.body' },
    { tag: 'about.card2.tag', title: 'about.card2.title', body: 'about.card2.body' },
    { tag: 'about.card3.tag', title: 'about.card3.title', body: 'about.card3.body' },
  ];

  return (
    <Reveal as="section" className="border-y border-line bg-surface2 py-[76px] text-text">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="mb-9 max-w-[62ch]">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-green900">
            {t('about.promise.kicker')}
          </p>
          <h2 className="mt-2 font-[Fraunces,Georgia,serif] text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] text-green900">
            {t('about.promise')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="rounded-2xl border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="mb-2 inline-block text-[0.72rem] font-bold uppercase tracking-[0.06em] text-green900">
                {t(card.tag)}
              </span>
              <h3 className="mb-2 font-[Fraunces,Georgia,serif] text-[1.25rem] font-bold text-green900">
                {t(card.title)}
              </h3>
              <p className="max-w-[60ch] text-textSoft">{t(card.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

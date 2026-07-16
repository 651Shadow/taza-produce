'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

const SECTIONS = ['terms', 'privacy', 'refund', 'accessibility', 'licenses'] as const;

export default function LegalPage() {
  const t = useT();
  return (
    <main>
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green700">
              {t('legal.eyebrow')}
            </p>
            <h1 className="font-serif text-4xl font-semibold text-text md:text-5xl">
              {t('legal.title')}
            </h1>
            <p className="mt-4 text-lg text-textSoft">{t('legal.sub')}</p>
          </Reveal>
        </div>
      </section>

      <article className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="mb-10 rounded-lg border border-line bg-surface2 px-4 py-3 text-sm text-textSoft">
            {t('legal.disclaimer')}
          </p>
          <div className="space-y-12">
            {SECTIONS.map((s) => (
              <Reveal
                key={s}
                as="section"
                className="scroll-mt-[90px] border-t border-line pt-8 first:border-0 first:pt-0"
              >
                <h2
                  id={s}
                  className="scroll-mt-[90px] font-serif text-2xl font-semibold text-text"
                >
                  {t(`legal.${s}.title`)}
                </h2>
                <p className="mt-3 whitespace-pre-line text-textSoft">{t(`legal.${s}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}

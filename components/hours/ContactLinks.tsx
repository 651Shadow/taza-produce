'use client';

import { useT } from '@/components/LocaleProvider';

export function ContactLinks() {
  const t = useT();

  return (
    <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
      <a
        href="tel:+17183335019"
        className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-6 py-5 text-text transition-colors hover:border-gold"
      >
        <span className="font-medium">{t('reach.phone')}</span>
        <span className="text-green700 dark:text-green700">+1 718-333-5019</span>
      </a>
      <a
        href="mailto:hello@tazzaproduce.example"
        className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-6 py-5 text-text transition-colors hover:border-gold"
      >
        <span className="font-medium">{t('contact.reach.email')}</span>
        <span className="text-green700 dark:text-green700">
          hello@tazzaproduce.example
        </span>
      </a>
    </div>
  );
}

'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

export function ReachBlock() {
  const t = useT();
  const rows: { label: string; value: string; href?: string }[] = [
    { label: t('contact.reach.phone'), value: t('contact.reach.phone.val'), href: 'tel:+17183335019' },
    { label: t('contact.reach.address'), value: t('contact.reach.address.val') },
    { label: t('contact.reach.hours'), value: t('contact.reach.hours.val') },
  ];
  return (
    <Reveal className="rounded-xl border border-line bg-surface p-6">
      <h2 className="mb-4 text-xl font-semibold text-text">{t('contact.reach.title')}</h2>
      <dl className="space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <dt className="w-24 shrink-0 text-sm font-semibold text-green700">{r.label}</dt>
            <dd className="text-text">
              {r.href ? (
                <a href={r.href} className="underline underline-offset-2 hover:text-green700">
                  {r.value}
                </a>
              ) : (
                r.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

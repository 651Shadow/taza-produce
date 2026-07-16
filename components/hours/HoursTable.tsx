'use client';

import { useT } from '@/components/LocaleProvider';

const DAYS = [
  'hours.mon',
  'hours.tue',
  'hours.wed',
  'hours.thu',
  'hours.fri',
  'hours.sat',
  'hours.sun',
] as const;

export function HoursTable() {
  const t = useT();

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <h2 className="mb-5 text-xl font-semibold text-text">{t('hours.card.title')}</h2>
      <ul className="divide-y divide-line">
        {DAYS.map((day) => (
          <li
            key={day}
            className="flex items-center justify-between gap-4 py-3 text-text"
          >
            <span className="font-medium">{t(day)}</span>
            <span className="text-textSoft">{t('hours.open')}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-textSoft">{t('hours.pay')}</p>
    </div>
  );
}

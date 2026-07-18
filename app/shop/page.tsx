'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

// Delivery platforms. Replace the placeholder URLs with the real UberEats /
// DoorDash store links once available. No built-in online market exists.
// Note is only shown when a real store URL (not the platform root) is set.
const PLATFORMS = [
  {
    key: 'shop.ubereats',
    href: 'https://www.ubereats.com/',
    note: 'shop.placeholder',
    accent: 'bg-black',
  },
  {
    key: 'shop.doordash',
    href: 'https://www.doordash.com/',
    note: 'shop.placeholder',
    accent: 'bg-red-600',
  },
] as const;

const isRealStoreUrl = (href: string) =>
  !/^https:\/\/(www\.)?(ubereats|doordash)\.com\/?$/.test(href);

export default function ShopPage() {
  const t = useT();
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-10">
      <Reveal className="mb-10">
        <p className="text-sm font-medium text-green700">{t('shop.eyebrow')}</p>
        <h1 className="mt-2 text-4xl font-bold text-text">{t('shop.hero')}</h1>
        <p className="mt-3 max-w-2xl text-textSoft">{t('shop.sub')}</p>
      </Reveal>

      <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <p className="text-sm text-textSoft">{t('shop.platforms.intro')}</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PLATFORMS.map((p) => (
            <a
              key={p.key}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between gap-4 rounded-xl border border-line bg-surface2 px-5 py-5 font-semibold text-text shadow-sm transition-colors hover:border-green700 ${p.accent} `}
            >
              <span className="text-lg">{t(p.key)}</span>
              {isRealStoreUrl(p.href) && (
                <span className="text-xs font-normal text-textSoft">{t(p.note)}</span>
              )}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-textSoft">{t('shop.pickup.note')}</p>
      </Reveal>
    </main>
  );
}

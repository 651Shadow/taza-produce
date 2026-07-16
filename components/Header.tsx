'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { useTheme } from './ThemeProvider';

const NAV: { href: string; key: string }[] = [
  { href: '/', key: 'nav.home' },
  { href: '/story', key: 'nav.story' },
  { href: '/shop', key: 'nav.shop' },
  { href: '/hours', key: 'nav.hours' },
  { href: '/gallery', key: 'nav.gallery' },
  { href: '/contact', key: 'nav.contact' },
  { href: '/legal', key: 'nav.legal' },
];

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 h-[74px] w-full border-b border-line bg-surface">
      <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/taza-logo.png"
            alt="Tazza Produce logo"
            width={46}
            height={46}
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-text">Tazza Produce</span>
            <span className="text-xs text-green700">EST. 1988</span>
          </span>
        </Link>

        {/* Primary nav */}
        <nav
          aria-label="Primary"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-[74px] flex-col gap-1 border-b border-line bg-surface px-5 py-3 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:px-0 md:py-0`}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-green700'
                  : 'text-text hover:text-green700'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
            aria-label={t('nav.langSwitch')}
            title={t('nav.langSwitch')}
            className="rounded-md border border-line px-3 py-2 text-sm font-medium text-text hover:bg-surface2"
          >
            {locale === 'ar' ? 'English' : 'العربية'}
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={t('theme.toggle')}
            title={t('theme.toggle')}
            className="rounded-md border border-line px-3 py-2 text-sm font-medium text-text hover:bg-surface2"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <Link
            href="/shop"
            className="rounded-md bg-green700 px-4 py-2 text-sm font-semibold text-onBrand hover:bg-green500"
          >
            {t('cta.order')}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t('menu.open')}
            aria-expanded={menuOpen}
            className="rounded-md border border-line px-3 py-2 text-sm font-medium text-text hover:bg-surface2 md:hidden"
          >
            {t('menu.label')}
          </button>
        </div>
      </div>
    </header>
  );
}

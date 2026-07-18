'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocale } from './LocaleProvider';
import { useTheme } from './ThemeProvider';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const NAV: { href: string; key: string }[] = [
  { href: '/', key: 'nav.home' },
  { href: '/about', key: 'nav.story' },
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

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 h-[74px] w-full border-b border-line bg-surface">
      <div className="mx-auto flex h-full max-w-6xl items-center gap-2 px-3 md:gap-4 md:px-5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/taza-logo.png"
            alt="Tazza Produce logo"
            width={46}
            height={46}
            className="h-9 w-9 sm:h-11 sm:w-11"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-semibold text-text">Tazza Produce</span>
            <span className="text-xs text-green700">EST. 1988</span>
          </span>
        </Link>

        {/* Primary nav */}
        <nav
          aria-label="Primary"
          id="primary-nav"
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
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="/hours"
            className="hidden rounded-md bg-green700 dark:bg-green-500 px-4 py-2 text-sm font-semibold text-onBrand hover:bg-green500 md:inline-block"
          >
            {t('cta.hours')}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? t('menu.close') : t('menu.open')}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            className="flex min-h-[44px] items-center rounded-md border border-line p-2 text-text hover:bg-surface2 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

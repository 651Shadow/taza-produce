'use client';

import Link from 'next/link';
import { useT } from './LocaleProvider';

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-deep text-onBrand">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand block */}
          <div>
            <h3 className="text-lg font-semibold">Tazza Produce</h3>
            <p className="mt-3 text-sm opacity-90">
              {t('foot.brand')}
            </p>
            <p className="mt-3 text-sm opacity-90">
              302 86th St, Brooklyn, NY 11209
              <br />
              Phone:{' '}
              <a href="tel:+17183335019" className="underline hover:text-gold">
                +1 718-333-5019
              </a>
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold">{t('foot.explore')}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:text-gold">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:text-gold">
                  {t('nav.story')}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="opacity-90 hover:text-gold">
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <Link href="/hours" className="opacity-90 hover:text-gold">
                  {t('nav.hours')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="opacity-90 hover:text-gold">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:text-gold">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold">{t('foot.legal')}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/legal#terms" className="opacity-90 hover:text-gold">
                  {t('legal.terms.title')}
                </Link>
              </li>
              <li>
                <Link href="/legal#privacy" className="opacity-90 hover:text-gold">
                  {t('legal.privacy.title')}
                </Link>
              </li>
              <li>
                <Link href="/legal#refund" className="opacity-90 hover:text-gold">
                  {t('legal.refund.title')}
                </Link>
              </li>
              <li>
                <Link href="/legal#accessibility" className="opacity-90 hover:text-gold">
                  {t('legal.accessibility.title')}
                </Link>
              </li>
              <li>
                <Link href="/legal#licenses" className="opacity-90 hover:text-gold">
                  {t('legal.licenses.title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-onBrand/20 pt-6 text-sm opacity-80">
          {t('foot.lic')}
        </p>
        <p className="mt-3 text-sm opacity-80">{t('foot.rights')}</p>
      </div>
    </footer>
  );
}

'use client';

import { useLocale } from './LocaleProvider';

// Sliding language switch: EN <-> AR. The knob slides toward the active side.
// In RTL the whole control mirrors via the document direction, so EN stays on
// the leading edge and AR on the trailing edge automatically.
export default function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();
  const isAr = locale === 'ar';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isAr}
      aria-label={t('nav.langSwitch')}
      title={t('nav.langSwitch')}
      onClick={() => setLocale(isAr ? 'en' : 'ar')}
      className="relative inline-flex h-8 w-[4.25rem] items-center justify-between overflow-hidden rounded-full border border-line bg-surface2 px-2 text-xs font-semibold"
    >
      <span className={`z-10 ${isAr ? 'text-textSoft' : 'text-text'}`}>EN</span>
      <span className={`z-10 ${isAr ? 'text-text' : 'text-textSoft'}`}>ع</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1 h-6 w-6 rounded-full bg-green700 transition-transform duration-200 ${
          isAr ? 'translate-x-[2.0rem]' : 'translate-x-0'
        }`}
        style={{ left: '2px' }}
      />
    </button>
  );
}

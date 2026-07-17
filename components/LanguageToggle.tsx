'use client';

import { useLocale } from './LocaleProvider';

// Sliding language switch: EN <-> AR. The green knob sits centered behind the
// active label's half of the track. In RTL the control mirrors automatically.
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
      className="relative inline-flex h-8 w-14 items-stretch overflow-hidden rounded-full border border-line bg-surface2 shadow-sm transition-colors dark:bg-[#223424] dark:shadow-none dark:ring-1 dark:ring-white/10 sm:w-[4.25rem]"
    >
      {/* Sliding knob: fills one half, centered on the active label.
          The slide is direction-aware: in RTL the labels mirror, so the
          translate must invert to keep the knob over the active letter. */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-green700 transition-transform duration-200 dark:bg-deep ${
          isAr
            ? 'translate-x-full rtl:translate-x-0 ltr:translate-x-full'
            : 'translate-x-0 rtl:translate-x-full ltr:translate-x-0'
        }`}
      />
      <span
        className={`relative z-10 flex flex-1 items-center justify-center text-xs font-semibold transition-colors ${
          isAr ? 'text-textSoft' : 'text-text'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex flex-1 items-center justify-center text-base font-semibold transition-colors ${
          isAr ? 'text-text' : 'text-textSoft'
        }`}
      >
        ع
      </span>
    </button>
  );
}

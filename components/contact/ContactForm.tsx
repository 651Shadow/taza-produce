'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

export function ContactForm() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErrors({});
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.status === 429) {
        setFormError(t('contact.form.ratelimit'));
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) setErrors(data.fields as FieldErrors);
        setFormError(data.error || t('contact.form.error'));
        return;
      }
      setSent(true);
    } catch {
      setFormError(t('contact.form.error'));
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <Reveal className="rounded-xl border border-line bg-surface p-6">
        <h3 className="mb-2 text-xl font-semibold text-text">{t('contact.form.title')}</h3>
        <p className="text-textSoft">{t('contact.form.thanks')}</p>
      </Reveal>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-line bg-surface px-3 py-2 text-text placeholder:text-textSoft/70 focus:border-green700 focus:outline-none focus:ring-1 focus:ring-green700';

  const fieldError = (key: keyof FieldErrors) =>
    errors[key] ? (
      <p id={`cf-${key}-err`} className="mt-1 text-xs text-gold">
        {errors[key]}
      </p>
    ) : null;

  return (
    <Reveal className="rounded-xl border border-line bg-surface p-6">
      <h3 className="mb-4 text-xl font-semibold text-text">{t('contact.form.title')}</h3>
      {formError && (
        <p role="alert" className="mb-3 rounded-md border border-gold/40 bg-gold/10 px-3 py-2 text-sm text-gold">
          {formError}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-text">
            {t('contact.form.name')}
          </label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('contact.form.name.ph')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            className={inputClass}
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-text">
            {t('contact.form.email')}
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('contact.form.email.ph')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            className={inputClass}
          />
          {fieldError('email')}
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-1 block text-sm font-medium text-text">
            {t('contact.form.message')}
          </label>
          <textarea
            id="cf-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('contact.form.message.ph')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'cf-message-err' : undefined}
            className={inputClass}
          />
          {fieldError('message')}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={busy}
            className="rounded-md bg-green700 dark:bg-deep px-4 py-2 text-sm font-semibold text-onBrand hover:bg-green500 disabled:opacity-50"
          >
            {busy ? t('cta.sending') : t('cta.send')}
          </button>
          <span className="text-xs text-textSoft">{t('contact.form.demo')}</span>
        </div>
      </form>
    </Reveal>
  );
}

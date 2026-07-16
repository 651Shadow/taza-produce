'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';

export function ContactForm() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <Reveal className="rounded-xl border border-line bg-surface p-6">
        <h3 className="mb-2 text-xl font-semibold text-text">{t('contact.form.title')}</h3>
        <p className="text-textSoft">Thanks, we will reply soon.</p>
      </Reveal>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-line bg-surface px-3 py-2 text-text placeholder:text-textSoft/70 focus:border-green700 focus:outline-none focus:ring-1 focus:ring-green700';

  return (
    <Reveal className="rounded-xl border border-line bg-surface p-6">
      <h3 className="mb-4 text-xl font-semibold text-text">{t('contact.form.title')}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-text">
            {t('contact.form.name')}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('contact.form.name.ph')}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-text">
            {t('contact.form.email')}
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('contact.form.email.ph')}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-1 block text-sm font-medium text-text">
            {t('contact.form.message')}
          </label>
          <textarea
            id="cf-message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('contact.form.message.ph')}
            className={inputClass}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-md bg-green700 px-4 py-2 text-sm font-semibold text-onBrand hover:bg-green500"
          >
            {t('cta.send')}
          </button>
          <span className="text-xs text-textSoft">{t('contact.form.demo')}</span>
        </div>
      </form>
    </Reveal>
  );
}

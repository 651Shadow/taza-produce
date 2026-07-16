'use client';

import { ContactHero } from '@/components/contact/ContactHero';
import { ReachBlock } from '@/components/contact/ReachBlock';
import { ContactForm } from '@/components/contact/ContactForm';
import { OrdersNote } from '@/components/contact/OrdersNote';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
          <ReachBlock />
          <ContactForm />
        </div>
      </section>
      <OrdersNote />
    </main>
  );
}

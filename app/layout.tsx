import type { Metadata } from 'next';
import { Hanken_Grotesk, Fraunces } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const body = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Tazza Produce: Fresh Halal Grocery, Brooklyn',
  description:
    'Tazza Produce: family-owned Middle Eastern and halal grocery in Bay Ridge, Brooklyn. Fresh produce, halal meats, and warm pitas, open 24 hours.',
  openGraph: {
    title: 'Tazza Produce: Fresh Halal Grocery, Brooklyn',
    description:
      'Fresh produce, halal meats, and Middle Eastern groceries. Open 24 hours in Bay Ridge, Brooklyn.',
    siteName: 'Tazza Produce',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  icons: { icon: '/taza-logo.png' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <head>
        {/* Anti-flash: set theme + js flag before paint (enables reveal enhancement only when JS runs) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document.documentElement;d.dataset.theme=localStorage.getItem('taza-theme')||'light';d.classList.add('js');`,
          }}
        />
      </head>
      <body className="font-sans">
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

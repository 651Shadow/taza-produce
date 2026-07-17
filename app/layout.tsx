import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
import { CartProvider } from '@/components/shop/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://tazzaproduce.example'),
  title: 'Tazza Produce: Fresh Halal Grocery, Brooklyn',
  description:
    'Tazza Produce: family-owned Middle Eastern and halal grocery in Bay Ridge, Brooklyn. Fresh produce, halal meats, and warm pitas, open 24 hours.',
  openGraph: {
    title: 'Tazza Produce: Fresh Halal Grocery, Brooklyn',
    description:
      'Fresh produce, halal meats, and Middle Eastern groceries. Open 24 hours in Bay Ridge, Brooklyn.',
    url: 'https://tazzaproduce.example',
    siteName: 'Tazza Produce',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  icons: { icon: '/taza-logo.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash: set theme + js flag before paint (enables reveal enhancement only when JS runs) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document.documentElement;d.dataset.theme=localStorage.getItem('taza-theme')||'light';d.classList.add('js');`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider>
          <LocaleProvider>
            <CartProvider>
              <Header />
              {children}
              <Footer />
            </CartProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

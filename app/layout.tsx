import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tazza Produce',
  description: 'Family-owned Middle Eastern + halal grocery in Brooklyn, NY.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

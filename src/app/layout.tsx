import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rose Azuma Nutri',
  description: 'Site da nutricionista Rosemary Azuma',
  keywords: ['nutrição', 'nutricionista', 'Rosemary Azuma'],
  authors: [{ name: 'Rosemary Azuma' }],
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: {
    title: 'Rose Azuma Nutri',
    description: 'Site da nutricionista Rosemary Azuma',
    url: 'https://rosenutri.com.br',
    siteName: 'Rose Azuma Nutri',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rose Azuma Nutri',
    description: 'Site da nutricionista Rosemary Azuma',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={inter.className}>
        <div className="bg-white">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

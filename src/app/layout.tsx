import type { Metadata } from 'next';
import { Libre_Caslon_Text } from 'next/font/google';
import Header from '@/components/client/Header';

import './globals.css';

const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Matilda Björk',
  description: 'Personal website of Matilda Björk',
  metadataBase: new URL(
    'https://hagelstudio-nqf91z4d6-fredrik-ps-projects.vercel.app/',
  ),
  openGraph: {
    title: 'Matilda Björk',
    description: 'Personal website of Matilda Björk',
    url: 'https://matildabjork.se',
    images: [
      {
        url: 'https://hagelstudio.com/opengraph-image.png',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  keywords: [
    'Björk',
    'Konstnär',
    'Developer',
    'Matild',
    'Matilda Björk',
    'Matilda Björk Konstnär',
    'Akvarell',
    'Akvarell Konstnär',
  ],
  publisher: 'Matilda Björk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={libreCaslonText.className}>
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

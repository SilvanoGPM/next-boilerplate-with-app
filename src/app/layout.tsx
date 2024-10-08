import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import '$styles/globals.css';

const EnableMSW = dynamic(
  () => import('$app/api/mocks/mws').then((mod) => mod.EnableMSW),
  { ssr: false },
);

export const viewport: Viewport = {
  themeColor: '#FFFFFFF',
};

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate for NextJS projects',

  manifest: '/manifest.json',

  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <EnableMSW />
        <NextTopLoader color="green" />

        {children}
      </body>
    </html>
  );
}

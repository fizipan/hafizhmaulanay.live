import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

const interVariable = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}

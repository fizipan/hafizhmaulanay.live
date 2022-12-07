import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

const interVariable = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96CZSLKGHT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-96CZSLKGHT');
        `}
        </Script>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}

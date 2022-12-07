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
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJVGNK8');
        `}
        </Script>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}

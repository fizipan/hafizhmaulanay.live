import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />

        <link href="https://github.com/hafizhmaulanay" rel="me" />
        <link href="https://twitter.com/hafizhmaulanay" rel="me" />

        <link rel="webmention" href="https://webmention.io/hafizhmaulanay.live/webmention" />
        <link rel="pingback" href="https://webmention.io/hafizhmaulanay.live/xmlrpc" />

        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#4a9885" href="/static/favicons/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#000000" name="theme-color" />
        <meta content="#000000" name="msapplication-TileColor" />
        <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body className="bg-white text-white dark:bg-black dark:text-black">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJVGNK8" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

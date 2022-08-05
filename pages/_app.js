import Head from "next/head";
import Script from 'next/script'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <Script async src="https://cdn.panelbear.com/analytics.js?site=4Jdh7AyQ4x" />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
              panelbear('config', { site: '4Jdh7AyQ4x' });
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

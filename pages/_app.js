import '../styles/globals.css'

import Head from "next/head";
import Script from 'next/script'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Script async src="https://cdn.panelbear.com/analytics.js?site=4Jdh7AyQ4x" />
      <Script
        id="panelbear"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
            panelbear('config', { site: '4Jdh7AyQ4x' });
          `,
        }}
      />
    </>
  );
}

export default App;

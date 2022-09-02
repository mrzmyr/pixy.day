import '../styles/globals.css'

import { usePostHog } from 'next-use-posthog'
import Head from "next/head";

function App({ Component, pageProps }) {
  usePostHog('phc_GBlaJ7lH6EM1dxaXsH7D3iBaHE2OnnW9xHmSZOgmd88', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
    },
  })  

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

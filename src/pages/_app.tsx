import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import theme from 'styles/theme'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The best Game Stores in the world" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

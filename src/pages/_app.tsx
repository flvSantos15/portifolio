import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />

      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

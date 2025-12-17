import type { AppProps } from "next/app";

import { Provider } from "urql";
import { client } from "../lib/urql";

import { Toaster } from "react-hot-toast";

// import GlobalStyles from "../styles/global";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={theme}>
    <Provider value={client}>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      {/* <GlobalStyles /> */}
    </Provider>
    // </ThemeProvider>
  );
}

export default App;

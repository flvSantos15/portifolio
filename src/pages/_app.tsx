import type { AppProps } from "next/app";

import { Provider } from "urql";
import { client } from "../lib/urql";

import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

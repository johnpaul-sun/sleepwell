import "~/shared/css/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { GlobalContextProvider } from "~/context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <div className="min-h-screen h-full">
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </div>
    </GlobalContextProvider>
  );
}

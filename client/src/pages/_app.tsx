import "~/shared/css/globals.css";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

import { GlobalContextProvider } from "~/context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <div className="min-h-screen h-full px-9">
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#2D3D63",
              color: "#fff",
            },
          }}
        />
        <Component {...pageProps} />
      </div>
    </GlobalContextProvider>
  );
}

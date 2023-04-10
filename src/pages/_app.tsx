import type { AppProps } from "next/app";

import "@/styles/globals.scss";
import "@/styles/custom.scss";

import { ModalContextProvider } from "@/contexts/modal-context";

import { Poppins } from "next/font/google";

import create from "zustand";
import NextNProgress from "nextjs-progressbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </div>
  );
}

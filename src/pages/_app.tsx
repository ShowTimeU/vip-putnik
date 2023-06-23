import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "../../public/css/all.css";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

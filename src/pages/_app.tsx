import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "../../public/css/all.css";
import React from "react";
import dynamic, { LoaderComponent } from "next/dynamic";

// const AnimatedCursor = dynamic<LoaderComponent>(
//   () => import("react-animated-cursor") as any,
//   { ssr: false }
// );

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*<AnimatedCursor color="20, 167, 214" outerSize={24} outerScale={1.5} />*/}
      {/*<CustomCursor />*/}
      <Component {...pageProps} />
    </>
  );
}

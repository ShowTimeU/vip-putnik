import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "../../public/css/all.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*<CustomCursor />*/}
      <Component {...pageProps} />
    </>
  );
}

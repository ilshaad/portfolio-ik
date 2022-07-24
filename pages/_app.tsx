import "../styles/globals.scss";
import type { AppProps } from "next/app";
import BackgroundParticles from "../components/BackgroundParticles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <BackgroundParticles /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

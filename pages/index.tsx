"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import BackgroundParticles from "../components/BackgroundParticles";
import Body from "../components/Body";
import LoadingFullScreen from "../components/LoadingFullScreen";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Ilshaad Kheerdali portfolio | Web developer</title>
        <meta
          name="description"
          content="Ilshaad Kheerdali portfolio | web developer"
        />
        <meta
          name="keyword"
          content="Ilshaad Kheerdali portfolio javascript react node.js typescript"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {isLoading ? (
        <LoadingFullScreen />
      ) : (
        <>
          <Body />
        </>
      )}

      {/* for Netlify to detect form in my app */}
      <form name="iknetlifyform" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <BackgroundParticles />
    </>
  );
};

export default Home;

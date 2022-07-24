import Head from "next/head";
import React, { useState } from "react";
import BackgroundParticles from "./BackgroundParticles";
import Footer from "./Footer";
import Header from "./Header";
import SlidingContents from "./SlidingContents";

type Props = {};

export default function Body({}: Props) {
  const [slidingCssClassName, setSlidingCssClassName] =
    useState("LandingSlideCss");

  return (
    <div id="divBody">
      

      {/* <BackgroundParticles /> */}

      <Header setSlidingCssClassName={setSlidingCssClassName} />

      <main
        id="Main"
        className={
          slidingCssClassName === "PlaygroundSlideCss"
            ? "PlaygroundSlideCss"
            : ""
        }
      >
        <SlidingContents slidingCssClassName={slidingCssClassName} />
      </main>

      <Footer />
    </div>
  );
}

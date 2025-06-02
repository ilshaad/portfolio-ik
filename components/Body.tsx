"use client";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SlidingContents from "./SlidingContents";
// import One from "../unusedPagesiK/One";
// import Two from "../unusedPagesiK/Two";

type Props = {};

export default function Body({}: Props) {
  const [slidingCssClassName, setSlidingCssClassName] =
    useState("LandingSlideCss");

  return (
    <div id="divBody">
      {/* <BackgroundParticles /> */}

      <Header
        slidingCssClassName={slidingCssClassName}
        setSlidingCssClassName={setSlidingCssClassName}
      />

      <main
        id="Main"
        className={
          slidingCssClassName === "PlaygroundSlideCss"
            ? "PlaygroundSlideCss"
            : ""
        }
      >
        <SlidingContents
          slidingCssClassName={slidingCssClassName}
          setSlidingCssClassName={setSlidingCssClassName}
        />
        {/* <One /> */}
        {/* <Two /> */}
      </main>

      <Footer />
    </div>
  );
}

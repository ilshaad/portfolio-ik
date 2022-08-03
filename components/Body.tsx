import { useState } from "react";
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
      </main>

      <Footer />
    </div>
  );
}

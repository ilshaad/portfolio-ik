import React from "react";

import styles from "../styles/components/SlidingConents.module.scss";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Projects from "./Projects";

type Props = {};

export default function SlidingContents({}: Props) {
  const { SlidingContents_component, SlidingContent_container } = styles;

  return (
    <div className={SlidingContents_component}>
      <div className={`${SlidingContent_container}`}>
        <LandingPage />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

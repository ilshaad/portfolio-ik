import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/SlidingConents.module.scss";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Techstack from "./Techstack";

type Props = { slidingCssClassName: string };

export default function SlidingContents({ slidingCssClassName }: Props) {
  const {
    SlidingContents_component,
    SlidingContent_container,
    sliderItems,
    landingSlide,
    aboutSlide,
    projectSlide,
    contactSlide,
  } = styles;

  // place css to specific content in the slide so it can animate slide css transition
  const goToCorrectSlideWithCss = (slideType: string) => {
    // set css type to content if it is correct
    if (slidingCssClassName === slideType) {
      // notLandingSlidePageCon();
      return slidingCssClassName;
    }

    // if it is the Landing slide but not acive, than keep it to the left, opposite side to the other slide to give it a nice effect
    if (slideType === "LandingSlideCss") {
      return "NotLandingContent";
    }

    // remove all slides for use to play with background
    if (slidingCssClassName === "PlaygroundSlideCss") {
      return "";
    }

    // if slideType is not matching than keep it out of view
    return "";
  };

  return (
    <Container className={`${SlidingContents_component}`}>
      <Container className={`${SlidingContent_container}`}>
        <div
          className={`${sliderItems} ${landingSlide} ${(() =>
            goToCorrectSlideWithCss("LandingSlideCss"))()}`}
        >
          <LandingPage />
        </div>

        <div
          className={`${sliderItems} ${aboutSlide} ${(() =>
            goToCorrectSlideWithCss("AboutSlideCss"))()}`}
        >
          <About />
        </div>

        <div
          className={`${sliderItems} ${aboutSlide} ${(() =>
            goToCorrectSlideWithCss("TechstackSlideCss"))()}`}
        >
          <Techstack />
        </div>

        <div
          className={`${sliderItems} ${projectSlide} ${(() =>
            goToCorrectSlideWithCss("ProjectsSlideCss"))()}`}
        >
          <Projects />
        </div>

        <div
          className={`${sliderItems} ${contactSlide} ${(() =>
            goToCorrectSlideWithCss("ContactSlideCss"))()}`}
        >
          <Contact />
        </div>
      </Container>
      {/* </Row> */}
    </Container>
  );
}

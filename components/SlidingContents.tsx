import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/SlidingConents.module.scss";
import About_content from "./About_content";
import Contact_content from "./Contact_content";
import Landing_content from "./Landing_content";
import Projects_content from "./Projects_content";
import Techstack_content from "./Techstack_content";

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
          <Landing_content />
        </div>

        <div
          className={`${sliderItems} ${aboutSlide} ${(() =>
            goToCorrectSlideWithCss("AboutSlideCss"))()}`}
        >
          <About_content />
        </div>

        <div
          className={`${sliderItems} ${aboutSlide} ${(() =>
            goToCorrectSlideWithCss("TechstackSlideCss"))()}`}
        >
          <Techstack_content />
        </div>

        <div
          className={`${sliderItems} ${projectSlide} ${(() =>
            goToCorrectSlideWithCss("ProjectsSlideCss"))()}`}
        >
          <Projects_content />
        </div>

        <div
          className={`${sliderItems} ${contactSlide} ${(() =>
            goToCorrectSlideWithCss("ContactSlideCss"))()}`}
        >
          <Contact_content />
        </div>
      </Container>
      {/* </Row> */}
    </Container>
  );
}

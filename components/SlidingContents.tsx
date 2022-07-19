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

  // for when landing page is not select by link than motion the css transition slide apprriately since this is the starting content of the slide
  // const [notLandingSlidePage, setNotLandingSlidePage] = useState("");
  // useEffect(() => {

  //   // const notLandingSlidePageCon = () => {
  //     if (slidingCssClassName === "LandingSlideCss") {
  //       setNotLandingSlidePage("");
  //       return;
  //     }

  //     setNotLandingSlidePage("notLandContent");
  //   // };
  // )}

  // ! zzzzzzzzzzzzz continue from here I think ||||||||||||
  const [slidingCssContent, setSlidingCssContent] = useState("");

  // place css to specific content in the slide so it can animate slide css transition
  const goToCorrectSlideWithCss = (slideType: string) => {
    if (slidingCssClassName === slideType) {
      if (slidingCssClassName !== "LandingSlideCss") {
        // setnotLandingSlidePageCon();
        return "NotLandingContent";
      }

      // notLandingSlidePageCon();
      return slidingCssClassName;
    }

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

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Container } from "react-bootstrap";

import styles from "../styles/components/SlidingConents.module.scss";
// import About_content from "./About_content";
// import Contact_content from "./Contact_content";
import Landing_content from "./Landing_content";
// import Projects_content from "./Projects_content";
// import Techstack_content from "./Techstack_content";

const About_content = dynamic(() => import("./About_content"), {
  suspense: true,
});

const Techstack_content = dynamic(() => import("./Techstack_content"), {
  suspense: true,
});

const Projects_content = dynamic(() => import("./Projects_content"), {
  suspense: true,
});

const Contact_content = dynamic(() => import("./Contact_content"), {
  suspense: true,
});

type Props = { slidingCssClassName: string; setSlidingCssClassName: Function };

export default function SlidingContents({
  slidingCssClassName,
  setSlidingCssClassName,
}: Props) {
  const {
    SlidingContents_component,
    SlidingContent_container,
    sliderItems,
    landingSlide,
    aboutSlide,
    techstackSlide,
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
        {/* landing slide content */}
        <div
          className={`${sliderItems} ${landingSlide} ${(() =>
            goToCorrectSlideWithCss("LandingSlideCss"))()}`}
        >
          <Landing_content setSlidingCssClassName={setSlidingCssClassName} />
        </div>

        {/* About slide content */}
        <div
          className={`${sliderItems} ${aboutSlide} ${(() =>
            goToCorrectSlideWithCss("AboutSlideCss"))()}`}
        >
          <Suspense fallback={`Loading...`}>
            <About_content />
          </Suspense>

          {/* <About_content /> */}
        </div>

        {/* techstack slide content */}
        <div
          className={`${sliderItems} ${techstackSlide} ${(() =>
            goToCorrectSlideWithCss("TechstackSlideCss"))()}`}
        >
          <Suspense fallback={`Loading...`}>
            <Techstack_content />
          </Suspense>

          {/* <Techstack_content /> */}
        </div>

        {/* projects slide content */}
        <div
          className={`${sliderItems} ${projectSlide} ${(() =>
            goToCorrectSlideWithCss("ProjectsSlideCss"))()}`}
        >
          <Suspense fallback={`Loading...`}>
            <Projects_content />
          </Suspense>

          {/* <Projects_content /> */}
        </div>

        {/* contact slide content */}
        <div
          className={`${sliderItems} ${contactSlide} ${(() =>
            goToCorrectSlideWithCss("ContactSlideCss"))()}`}
        >
          <Suspense fallback={`Loading...`}>
            <Contact_content />
          </Suspense>

          {/* <Contact_content /> */}
        </div>
      </Container>
      {/* </Row> */}
    </Container>
  );
}

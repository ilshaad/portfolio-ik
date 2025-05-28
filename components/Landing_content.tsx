// the inital content use will see when they visit the site, so making a big impression & clearly stating who you are is crucial

import { Button, Container } from "react-bootstrap";

import styles from "../styles/components/Landing_content.module.css";

import Image from "next/image";
import picOfMe from "../public/picOfMe/portfolioPic.jpg";
import { useEffect } from "react";

// import rss from
// Welcome!
// I’m ilshaad Kheerdali
// Frontend / Full stack developer
// Specialised in Javascript / React / Typescript / Node.js
// Always follow your heart but remember to bring your brain along.
// <Get in Touch>

type Props = {
  setSlidingCssClassName: Function;
};

export default function Landing_content({ setSlidingCssClassName }: Props) {
  const {
    blockquote_p_container,
    role_h_container,
    role_h,
    LandingPage_component,
    welcome_h,
    getInTouchButtonContainer,
    name_h,
    specialised_h_container,
    specialised_h,
    welcomeName_container,
    picOfMe_img,
    picOfMe_imgElement,
    blurringAnimation,
  } = styles;

  const goToSlide = (cssClassName: string) => {
    setSlidingCssClassName(cssClassName);
  };

  useEffect(() => {
    console.log("ik styles", styles);
  }, [styles]);

  return (
    <Container fluid className={`${LandingPage_component}`}>
      <div className={`${welcomeName_container}`}>
        <h4 className={`${welcome_h} fst-italic`}>Welcome!</h4>
        <h1 className={`${name_h} fw-bolder`}>I&#39;m Ilshaad</h1>
      </div>

      {/* <div xs={12}></div> */}

      <div className={`${picOfMe_img}`}>
        <Image
          src={picOfMe}
          alt="photo of ilshaad"
          className={picOfMe_imgElement}
        />
      </div>

      <div className={`${role_h_container}`}>
        <h2 className={`${role_h}`}>Frontend / Full stack developer</h2>
      </div>

      <div className={`${specialised_h_container}`}>
        <h3 className={`${specialised_h} fw-light`}>
          Specialised in&#160;<span>Javascript</span> /&#160;
          <span>React</span>
          &#160;/&#160;<span>Typescript</span> /&#160;<span>Node.js</span>
        </h3>
      </div>

      <blockquote className={`${blockquote_p_container}`}>
        <p>
          &#34;Always follow your heart but remember to bring your brain
          along!&#34;
        </p>
      </blockquote>

      <div className={`${getInTouchButtonContainer} text-center`}>
        <Button
          onClick={() => {
            goToSlide("ContactSlideCss");
          }}
        >
          Get in touch
        </Button>
      </div>

      <br />
    </Container>
  );
}

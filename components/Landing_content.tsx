// the inital content use will see when they visit the site, so making a big impression & clearly stating who you are is crucial

import React from "react";
import { Button } from "react-bootstrap";

import styles from "../styles/components/Landing_content.module.scss";

// import rss from
// Welcome!
// I’m ilshaad Kheerdali
// Frontend / Full stack developer
// Javascript / React / Typescript / Node.js
// Always follow your heart but remember to bring your brain along.
// <Get in Touch>

type Props = {};

export default function Landing_content({}: Props) {
  const {
    blockquote_p,
    role_h,
    LandingPage_component,
    welcome_h,
    getInTouchButtonContainer,
    name_h,
    specialised_h,
  } = styles;

  return (
    <div className={`${LandingPage_component}`}>
      <h4 className={`${welcome_h} fst-italic`}>Welcome!</h4>

      <h1 className={`${name_h} fw-bolder`}>I&#39;m Ilshaad</h1>

      <h2 className={`${role_h}`}>Frontend / Full stack developer</h2>

      <h3 className={`${specialised_h} fw-light`}>
        Specialised in&#160;<span>Javascript</span> /&#160;<span>React</span>
        &#160;/&#160;<span>Typescript</span> /&#160;<span>Node.js</span>
      </h3>

      <blockquote className={`${blockquote_p} blockquote text-dark text-muted`}>
        <p>Always follow your heart but remember to bring your brain along!</p>
      </blockquote>

      <div className={`${getInTouchButtonContainer} text-center`}>
        <Button>Get in touch</Button>
      </div>
    </div>
  );
}

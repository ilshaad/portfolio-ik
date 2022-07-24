// the inital content use will see when they visit the site, so making a big impression & clearly stating who you are is crucial

import React from "react";
import { Button } from "react-bootstrap";

import styles from "../styles/components/LandingPage.module.scss";

// import rss from
// Welcome!
// I’m ilshaad Kheerdali
// Frontend / Full stack developer
// Javascript / React / Typescript / Node.js
// Always follow your heart but remember to bring your brain along.
// <Get in Touch>

type Props = {};

export default function Landing_content({}: Props) {
  const { LandingPage_component } = styles;

  return (
    <div className={`${LandingPage_component}`}>
      <h4>Welcome!</h4>
      <h1>I&#39;m Ilshaad</h1>
      <h2>Frontend / Full stack developer</h2>
      <h3>Javascript / React / Typescript / Node.js</h3>
      <div>
        <i>Always follow your heart but remember to bring your brain along!</i>
      </div>
      <div>
        <Button>Contact me!</Button>
      </div>
    </div>
  );
}

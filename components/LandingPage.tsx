import React, { useEffect } from "react";

import styles from "../styles/components/LandingPage.module.scss";

type Props = {};

export default function LandingPage({}: Props) {
  const { LandingPage_component } = styles;

  useEffect(() => {
    console.log(window.outerWidth);
  });

  return (
    <div className={`${LandingPage_component} border border-3 text-dark`}>
      LandingPage
    </div>
  );
}

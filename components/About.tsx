import React from "react";

import styles from "../styles/components/About.module.scss";

type Props = {};

export default function About({}: Props) {
  const { About_component } = styles;

  return <div className={`${About_component} border border-3`}>About</div>;
}

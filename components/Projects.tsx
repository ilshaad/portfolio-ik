import React from "react";

import styles from "../styles/components/Projects.module.scss";

type Props = {};

export default function Projects({}: Props) {
  const { Projects_component } = styles;

  return <div className={`${Projects_component}`}>Projects</div>;
}

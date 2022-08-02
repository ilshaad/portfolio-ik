import React from "react";

import Rs_logo_svg from "./svgs/Rs_logo_svg";
import styles from "../styles/components/LoadingFullScreen.module.scss";

type Props = {};

export default function LoadingFullScreen({}: Props) {
  const { LoadingFullScreen_component } = styles;

  return (
    <div
      className={`${LoadingFullScreen_component} d-flex flex-column align-items-center w-100 vh-100`}
    >
      <Rs_logo_svg />
      <p className={`mt-2`}>Loading</p>
    </div>
  );
}

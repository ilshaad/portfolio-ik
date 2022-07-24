import React from "react";
import { Spinner } from "react-bootstrap";
import Rs_logo_svg from "./svgs/Rs_logo_svg";
type Props = {};

export default function LoadingScreen({}: Props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
      <Rs_logo_svg classProp="w-25" />
      <Spinner animation="grow" variant="primary" />
    </div>
  );
}

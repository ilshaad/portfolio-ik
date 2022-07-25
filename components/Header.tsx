import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/Header.module.scss";
import NavOffcanva from "./NavOffcanva";
import Github_svg from "./svgs/Github_svg";
import LinkedIn_svg from "./svgs/LinkedIn_svg";
import Resume_svg from "./svgs/Resume_svg";

import rsLogo from "../public/rs-logo/RS-optimize.jpg";

type Props = {
  setSlidingCssClassName: Function;
};

export default function Header({ setSlidingCssClassName }: Props) {
  const {
    Header_component,
    MobileBarList,
    MainListLinks,
    blueBackground,
    rsLogoContainer,
    logoName,
    svgContainer,
  } = styles;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goToSlide = (cssClassName: string) => {
    setSlidingCssClassName(cssClassName);
  };

  return (
    <header id="Header" className={`${Header_component} mx-auto w-100 pt-2`}>
      <Container className={`mx-auto  text-center`}>
        <Row className={`mx-auto text-center pt-1`}>
          {/* !!!! insert rechadsalma logo with link to home content */}
          <Col
            onClick={() => {
              goToSlide("LandingSlideCss");
            }}
            xs={2}
            className={`p-0`}
          >
            <div className={`${rsLogoContainer}`}>
              <Image src={rsLogo} alt="rechad salma logo" />
            </div>
          </Col>

          <Col className={`p-0`}>
            <h1 className={`${logoName}`}>Ilshaad</h1>
          </Col>
          {/* <Col>Ilshaad</Col> */}

          {/* svg links */}
          <Col
            xs={4}
            className={`${svgContainer} d-flex justify-content-around`}
          >
            {/* <LinkedIn_svg classProps="w-100" />
            <Github_svg classProps="w-100" />
            <Resume_svg classProps={`h-50`} /> */}
            sif
          </Col>

          {/* offcanva button links for mobile view only */}
          <Col className={`${MobileBarList} p-0 text-end`}>
            <Button variant="primary" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Button>
          </Col>

          {/* Links outside the mobile view */}
          <Col
            onClick={() => {
              goToSlide("LandingSlideCss");
            }}
            className={`${MainListLinks}`}
          >
            Home
          </Col>
          <Col
            onClick={() => {
              goToSlide("AboutSlideCss");
            }}
            className={`${MainListLinks}`}
          >
            About me
          </Col>
          <Col
            onClick={() => {
              goToSlide("TechstackSlideCss");
            }}
            className={`${MainListLinks}`}
          >
            Tech stack
          </Col>
          <Col
            onClick={() => {
              goToSlide("ProjectsSlideCss");
            }}
            className={`${MainListLinks}`}
          >
            Projects
          </Col>
          <Col
            onClick={() => {
              goToSlide("ContactSlideCss");
            }}
            className={`${MainListLinks}`}
          >
            Contact
          </Col>
          <Col
            onClick={() => {
              goToSlide("PlaygroundSlideCss");
            }}
            className={`${MainListLinks}`}
          >
            Playground
          </Col>
          <Col className={`${MainListLinks}`}>
            <Link href="https://www.ilshaadblog.tk/" passHref>
              <a target="_blank">Blog</a>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* space for blue background */}
      <div className={`${blueBackground} d-flex justify-content-around`}>
        <LinkedIn_svg classProps="w-100 text-light" />
        <Github_svg classProps="w-100 text-light" />
        <Resume_svg classProps={`text-light bg-primary`} />
      </div>

      <NavOffcanva
        show={show}
        handleClose={handleClose}
        setSlidingCssClassName={setSlidingCssClassName}
        goToSlide={goToSlide}
      />
    </header>
  );
}

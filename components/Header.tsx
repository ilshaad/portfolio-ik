import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/Header.module.scss";
import NavOffcanva from "./NavOffcanva";
import Github_svg from "./svgs/Github_svg";
import LinkedIn_svg from "./svgs/LinkedIn_svg";
import Resume_svg from "./svgs/Resume_svg";

type Props = {
  setSlidingCssClassName: Function;
};

export default function Header({ setSlidingCssClassName }: Props) {
  const { Header_component, MobileBarList, MainListLinks } = styles;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goToSlide = (cssClassName: string) => {
    setSlidingCssClassName(cssClassName);
  };

  return (
    <header id="Header" className={`${Header_component} mx-auto w-100`}>
      <Container className={`mx-auto`}>
        <Row>
          {/* !!!! insert rechadsalma logo with link to home content */}
          <Col
            onClick={() => {
              goToSlide("LandingSlideCss");
            }}
          >
            Image comes here
          </Col>

          {/* <Col>Ilshaad</Col> */}

          {/* svg links */}
          <Col>
            <LinkedIn_svg /> <Github_svg />
            <Resume_svg classProps={`w-25`} />
          </Col>

          {/* offcanva button links for mobile view only */}
          <Col className={`${MobileBarList}`}>
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

      <NavOffcanva
        show={show}
        handleClose={handleClose}
        setSlidingCssClassName={setSlidingCssClassName}
        goToSlide={goToSlide}
      />

      {/* <nav>
        <ul>
          <li onClick={() => goToSlide("LandingSlideCss")}>Home</li>
          <li onClick={() => goToSlide("AboutSlideCss")}>About</li>
          <li onClick={() => goToSlide("TechstackSlideCss")}>Tech stack</li>
          <li onClick={() => goToSlide("ProjectsSlideCss")}>Projects</li>
          <li onClick={() => goToSlide("ContactSlideCss")}>Contact</li>
          <li>Download Resume</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>blog</li>
          <li onClick={() => goToSlide("PlaygroundSlideCss")}>Playground</li>
        </ul>
      </nav> */}
    </header>
  );
}

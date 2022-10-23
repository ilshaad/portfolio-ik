import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/Header.module.scss";
import NavOffcanva from "./NavOffcanva";
import Github_svg from "./svgs/Github_svg";
import LinkedIn_svg from "./svgs/LinkedIn_svg";
import Resume_svg_anchor from "./svgs/Resume_svg_anchor";
import Instagram_svg from "./svgs/Instagram_svg";

import rsLogo from "../public/rs-logo/RS-optimize.jpg";
import Resume_svg_rawElement from "./svgs/Resume_svg_rawElement";

type Props = {
  slidingCssClassName: string;
  setSlidingCssClassName: Function;
};

export default function Header({
  slidingCssClassName,
  setSlidingCssClassName,
}: Props) {
  const {
    Header_component,
    firstHeaderContainer,
    MobileBarList,
    MainListLinks,
    secondHeaderContainer,
    rsLogoContainer,
    logoName,
    resumeSvgElement_mobile,
    resumeSvgElement_desktop,
    shineAnimation,
    mobileNavButton,
    navLinkButtonsContainer,
    mobileSvgContactLinks,
    desktopSvgContactLinks,
    linkedinSvg_desktop,
    githubSvg_desktop,
    linkedSvgElement_mobile,
    githubSvgElement_mobile,
    linkedinSvgContainer_desktop,
    resumeSvgContainer_desktop,
    instagramSvg_desktop,
    instagramCol,
    // svgContainer,
    activeLink,
  } = styles;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goToSlide = (cssClassName: string) => {
    setSlidingCssClassName(cssClassName);
  };

  // LandingSlideCss
  // AboutSlideCss
  // TechstackSlideCss
  // ProjectsSlideCss
  // ContactSlideCss
  // PlaygroundSlideCss
  const activeLinkFunc = (cssClassName: string) => {
    if (cssClassName === slidingCssClassName) {
      return activeLink;
    } else {
      return "";
    }
  };

  return (
    <header id="Header" className={`${Header_component} mx-auto w-100 pt-2`}>
      {/* first container for header */}
      <Container
        fluid
        className={`${firstHeaderContainer} mx-auto text-center`}
      >
        <Row className={`mx-auto text-center pt-1`}>
          {/* rs logo image */}
          <Col
            xs={6}
            sm={8}
            // lg={1}
            onClick={() => {
              goToSlide("LandingSlideCss");
            }}
            // xs={2}
            className={`p-0`}
          >
            <div className={`${rsLogoContainer}`}>
              <Image src={rsLogo} alt="rechad salma logo" />
            </div>
          </Col>

          {/* ilshaad heading */}
          {/* <Col xs={8} sm={7} lg={8} className={`p-0`}>
            <h1 className={`${logoName}`}>Ilshaad</h1>
          </Col> */}

          {/* offcanva button links for mobile view only */}
          <Col xs={6} className={`${MobileBarList} p-0 text-end`}>
            <Button className={`${mobileNavButton}`} onClick={handleShow}>
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

          {/* svg contact links only in desktop viewpoint */}
          <Col
            xs={0}
            sm={1}
            // lg={1}
            className={`${desktopSvgContactLinks} ${linkedinSvgContainer_desktop} mx-auto`}
          >
            <LinkedIn_svg classProps={`${linkedinSvg_desktop}`} />
          </Col>
          <Col
            xs={0}
            sm={1}
            // lg={1}
            className={`${desktopSvgContactLinks} mx-auto`}
          >
            <Github_svg classProps={`${githubSvg_desktop} text-primary`} />
          </Col>
          <Col
            xs={0}
            sm={1}
            // lg={1}
            className={`${desktopSvgContactLinks} ${resumeSvgContainer_desktop} mx-auto`}
          >
            <Resume_svg_anchor
              svgElement={
                <Resume_svg_rawElement classProps={resumeSvgElement_desktop} />
              }
            />
          </Col>
          <Col
            xs={0}
            sm={1}
            // lg={1}
            className={`${desktopSvgContactLinks} ${instagramCol} mx-auto`}
          >
            <Instagram_svg
              classProps={`${instagramSvg_desktop} text-primary`}
            />
          </Col>
        </Row>
      </Container>

      {/* second container of header */}
      {/* blue background for svg contact links */}
      <Container
        fluid
        className={`${secondHeaderContainer} d-flex justify-content-around`}
      >
        {/* svg links only in mobile viewpoint */}
        <Row
          className={`${mobileSvgContactLinks} justify-content-center align-items-center`}
        >
          <Col xs={3} className={`mx-auto`}>
            <LinkedIn_svg
              classProps={`${linkedSvgElement_mobile} w-100 text-light`}
            />
          </Col>
          <Col xs={3} className={`mx-auto`}>
            <Github_svg
              classProps={`${githubSvgElement_mobile} w-100 text-light`}
            />
          </Col>
          <Col xs={3} className={`mx-auto`}>
            <Resume_svg_anchor
              svgElement={
                <Resume_svg_rawElement classProps={resumeSvgElement_mobile} />
              }
            />
          </Col>
          {/* zzzzzzzzzzzzzzzzzzzzzz IK readjust size */}
          <Col xs={3} className={`mx-auto`}>
            <Instagram_svg
              classProps={`${instagramSvg_desktop} w-100 text-light`}
            />
          </Col>
        </Row>

        {/* Links display outside the mobile view */}
        <Row className={`${navLinkButtonsContainer}`}>
          <Col
            onClick={() => {
              goToSlide("LandingSlideCss");
            }}
            xs={1}
            className={`${MainListLinks} ${(() =>
              activeLinkFunc("LandingSlideCss"))()}`}
          >
            Home
          </Col>
          <Col
            onClick={() => {
              goToSlide("AboutSlideCss");
            }}
            xs={1}
            className={`${MainListLinks} ${(() =>
              activeLinkFunc("AboutSlideCss"))()}`}
          >
            About me
          </Col>
          <Col
            onClick={() => {
              goToSlide("TechstackSlideCss");
            }}
            xs={1}
            className={`${MainListLinks} ${(() =>
              activeLinkFunc("TechstackSlideCss"))()}`}
          >
            {/* cannot add another word because it will not show, unless I re-style again */}
            Tech
          </Col>
          <Col
            onClick={() => {
              goToSlide("ProjectsSlideCss");
            }}
            xs={1}
            className={`${MainListLinks} ${(() =>
              activeLinkFunc("ProjectsSlideCss"))()}`}
          >
            Projects
          </Col>
          <Col
            onClick={() => {
              goToSlide("ContactSlideCss");
            }}
            xs={1}
            className={`${MainListLinks} ${(() =>
              activeLinkFunc("ContactSlideCss"))()}`}
          >
            Contact
          </Col>
          <Col
            onClick={() => {
              goToSlide("PlaygroundSlideCss");
            }}
            xs={1}
            className={`${MainListLinks} ${(() =>
              activeLinkFunc("PlaygroundSlideCss"))()}`}
          >
            Playground
          </Col>
          <Col xs={1} className={`${MainListLinks}`}>
            <Link href="https://www.ilshaadblog.tk/" passHref>
              <a target="_blank">Blog</a>
            </Link>
          </Col>
        </Row>
        <i className={`${shineAnimation}`}></i>
      </Container>

      {/* nav menu when user clicks button on mobile view */}
      <NavOffcanva
        show={show}
        handleClose={handleClose}
        setSlidingCssClassName={setSlidingCssClassName}
        goToSlide={goToSlide}
      />
    </header>
  );
}

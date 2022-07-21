import Link from "next/link";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";

import styles from "../styles/components/NavOffcanv.module.scss";

type Props = {
  show: boolean;
  handleClose: Function;
  setSlidingCssClassName: Function;
  goToSlide: Function;
};

export default function NavOffcanva({
  show,
  handleClose,
  setSlidingCssClassName,
  goToSlide,
}: Props) {
  const { NavOffcanva_component } = styles;

  // const goToSlide = (cssClassName: string) => {
  //   setSlidingCssClassName(cssClassName);
  // };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={"end"}
      className={`w-50`}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Where would you like to go?</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav
          // activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className={`flex-column`}
        >
          <Nav.Item
            onClick={() => {
              goToSlide("LandingSlideCss");
              handleClose();
            }}
          >
            Home
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              goToSlide("AboutSlideCss");
              handleClose();
            }}
          >
            About
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              goToSlide("TechstackSlideCss");
              handleClose();
            }}
          >
            Tech stack
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              goToSlide("ProjectsSlideCss");
              handleClose();
            }}
          >
            Projects
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              goToSlide("ContactSlideCss");
              handleClose();
            }}
          >
            Contact
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              goToSlide("PlaygroundSlideCss");
              handleClose();
            }}
          >
            Playground
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              handleClose();
            }}
          >
            <Link href="https://www.ilshaadblog.tk/" passHref>
              <a target="_blank">Blog</a>
            </Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

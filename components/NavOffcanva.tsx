// offcanva menu for mobile viewpoint only

import Link from "next/link";
import { Nav, Offcanvas } from "react-bootstrap";

import styles from "../styles/components/NavOffcanv.module.css";

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
  const { NavOffcanva_component, bs_offcanvas_header, navUlContainer } = styles;

  // const goToSlide = (cssClassName: string) => {
  //   setSlidingCssClassName(cssClassName);
  // };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={"end"}
      className={`${NavOffcanva_component}`}
    >
      <Offcanvas.Header closeButton className={`${bs_offcanvas_header}`}>
        <Offcanvas.Title>
          <h4>Where to?</h4>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className={`pt-0`}>
        <Nav
          // activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className={`${navUlContainer} flex-column`}
          as="ul"
        >
          <Nav.Item
            as="li"
            onClick={() => {
              goToSlide("LandingSlideCss");
              handleClose();
            }}
          >
            Home
          </Nav.Item>
          <Nav.Item
            as="li"
            onClick={() => {
              goToSlide("AboutSlideCss");
              handleClose();
            }}
          >
            About
          </Nav.Item>
          <Nav.Item
            as="li"
            onClick={() => {
              goToSlide("TechstackSlideCss");
              handleClose();
            }}
          >
            Tech skills
          </Nav.Item>
          <Nav.Item
            as="li"
            onClick={() => {
              goToSlide("ProjectsSlideCss");
              handleClose();
            }}
          >
            Projects
          </Nav.Item>
          <Nav.Item
            as="li"
            onClick={() => {
              goToSlide("ContactSlideCss");
              handleClose();
            }}
          >
            Contact
          </Nav.Item>
          <Nav.Item
            as="li"
            onClick={() => {
              goToSlide("PlaygroundSlideCss");
              handleClose();
            }}
          >
            Playground
          </Nav.Item>
          <Nav.Item
            as="li"
            onClick={() => {
              handleClose();
            }}
          >
            <Link href="https://www.ilshaadblog.tk/" passHref legacyBehavior>
              <a target="_blank">Blog</a>
            </Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

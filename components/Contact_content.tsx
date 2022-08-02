import ContactForm from "./ContactForm";
import Github_svg from "./svgs/Github_svg";
import LinkedIn_svg from "./svgs/LinkedIn_svg";
import Resume_svg_anchor from "./svgs/Resume_svg_anchor";
import Resume_svg_rawElement from "./svgs/Resume_svg_rawElement";
import styles from "../styles/components/Contact_content.module.scss";
import { Col, Container, Row } from "react-bootstrap";

type Props = {};

export default function Contact_content({}: Props) {
  const {
    Contact_content_component,
    linkedin_container,
    github_container,
    resume_container,
    svgRowContainer,
    svgColContainer,
    contactFormContainer,
    svgContainer,
  } = styles;

  return (
    <div className={`${Contact_content_component}`}>
      <h2>Contact me</h2>

      <p>
        Interested in working together! Than contact me with the available
        options below. And I will get back to you.
      </p>

      <p>Or you can leave a friendly message.</p>

      <Container className={`${svgContainer}`}>
        <Row className={`${svgRowContainer} justify-content-center`}>
          <Col xs={4} sm={3} md={2} xl={1} className={`${svgColContainer}`}>
            <div className={`${linkedin_container}`}>
              <LinkedIn_svg />
            </div>
          </Col>

          <Col xs={4} sm={3} md={2} xl={1} className={`${svgColContainer}`}>
            <div className={`${github_container}`}>
              <Github_svg />
            </div>
          </Col>

          <Col xs={4} sm={3} md={2} xl={1} className={`${svgColContainer}`}>
            <div className={`${resume_container}`}>
              <Resume_svg_anchor svgElement={<Resume_svg_rawElement />} />
            </div>
          </Col>
        </Row>
      </Container>

      <div className={`${contactFormContainer}`}>
        <ContactForm />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";

import styles from "../styles/components/Projects.module.scss";
import ProjectCard from "./ProjectCards/ProjectCard";
import BugTrackerModal from "./ProjectCards/BugTrackerModal";

import bugtrackerImg from "../public/projectsPreview/bugTrackerSite.jpg";

type Props = {};

export default function Projects({}: Props) {
  const { Projects_component } = styles;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`${Projects_component}`}>
      <h2>My projects</h2>
      <Container>
        <Row>
          <Col>
            {/* ensure image sizew is 960 x 540im */}
            {/* bug tracker app */}
            <ProjectCard
              handleShow={handleShow}
              title="Bug tracking web application system"
              summary="I created this fully functional bug tracker. It allows developers to
              report defects within developing projects."
              image={bugtrackerImg}
              imageAlt="Bug Tracker app preview"
            />
          </Col>
        </Row>
      </Container>

      <BugTrackerModal show={show} handleClose={handleClose} />
    </div>
  );
}

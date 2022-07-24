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

// import jssvg from '../public/'

type Props = {};

export default function Projects_content({}: Props) {
  const { Projects_component } = styles;

  // bug tracker project modal
  const [showBugTrackerModal, setShowBugTrackerModal] = useState(false);
  const closeBugTrackerModal = () => setShowBugTrackerModal(false);
  const openBugTrackerModal = () => setShowBugTrackerModal(true);

  return (
    <div className={`${Projects_component}`}>
      <h2>My projects</h2>
      <Container>
        <Row>
          <Col>
            {/* ensure image sizew is 960 x 540im */}
            {/* bug tracker app */}
            <ProjectCard
              handleShow={openBugTrackerModal}
              title="Bug tracking web application system"
              summary="I created this fully functional bug tracker. It allows developers to
              report defects within developing projects."
              // image={bugtrackerImg}
              // imageAlt="Bug Tracker app preview"
              youtubeIframe={
                <iframe
                  // width="560"
                  // height="315"
                  src="https://www.youtube.com/embed/WJYVmT5baO4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              }
              projectUrl="https://bug-tracker-frontend-ik-202203.herokuapp.com/"
              projectGitRepoUrl="https://github.com/RechadSalma/bug-tracker-ik"
            />
          </Col>
        </Row>
      </Container>

      <BugTrackerModal
        show={showBugTrackerModal}
        handleClose={closeBugTrackerModal}
      />
    </div>
  );
}

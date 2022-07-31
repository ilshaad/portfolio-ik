import Link from "next/link";
import React from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";

import styles from "../../styles/components/ProjectCards/AllProjectModals.module.scss";

type Props = { show: boolean; handleClose: Function };

export default function PortfolioModal({ show, handleClose }: Props) {
  const { AllProjectModals, bottomCloseButton } = styles;

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      centered
      className={`${AllProjectModals}`}
    >
      <Modal.Header closeButton>
        <Modal.Title as="h2">Portfolio Site</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* feature */}
        <h4>Features:</h4>
        <ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li">
            Implementations of canvas and css animations.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            Carefully crafted styles and spacing.
          </ListGroup.Item>
          <ListGroup.Item as="li">Mobile first approach.</ListGroup.Item>
          <ListGroup.Item as="li">PWA for downloadable app.</ListGroup.Item>
        </ListGroup>

        {/* Main technologies */}
        <h4>Main technologies:</h4>
        <ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li">React</ListGroup.Item>
          <ListGroup.Item as="li">JavaScript / TypeScript</ListGroup.Item>
          <ListGroup.Item as="li">Next.js</ListGroup.Item>
          <ListGroup.Item as="li">SASS / Bootstrap</ListGroup.Item>
          <ListGroup.Item as="li">PWA</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer className={`border border-0`}>
        <Button
          onClick={() => handleClose()}
          className={`${bottomCloseButton}`}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

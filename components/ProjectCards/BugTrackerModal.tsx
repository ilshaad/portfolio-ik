import Link from "next/link";
import React from "react";
import { Button, Modal } from "react-bootstrap";

type Props = { show: boolean; handleClose: Function };

export default function BugTrackerModal({ show, handleClose }: Props) {
  return (
    <Modal show={show} onHide={() => handleClose()} centered>
      <Modal.Header closeButton>
        <Modal.Title>Bug tracking web application system</Modal.Title>
        <Button variant="primary" onClick={() => handleClose()}>
          <Link
            href="https://bug-tracker-frontend-ik-202203.herokuapp.com/"
            passHref
          >
            <a target="_blank">Visit site</a>
          </Link>
        </Button>
        <Button variant="primary" onClick={() => handleClose()}>
          Github repo
        </Button>
      </Modal.Header>
      <Modal.Body>
        Woohoo, youre reading this text in a modal!
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WJYVmT5baO4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

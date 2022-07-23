import Link from "next/link";
import React from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";

type Props = { show: boolean; handleClose: Function };

export default function BugTrackerModal({ show, handleClose }: Props) {
  return (
    <Modal size="xl" show={show} onHide={() => handleClose()} centered>
      <Modal.Header closeButton>
        <Modal.Title>Bug tracking web application system</Modal.Title>
        <Button variant="primary">
          <Link
            href="https://bug-tracker-frontend-ik-202203.herokuapp.com/"
            passHref
          >
            <a target="_blank">Visit site</a>
          </Link>
        </Button>
        <Button variant="primary">
          <Link href="https://github.com/RechadSalma/bug-tracker-ik" passHref>
            <a target="_blank">Github repo</a>
          </Link>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/WJYVmT5baO4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* feature */}
        <h3>Features:</h3>
        <ListGroup>
          <ListGroup.Item>PERN stack build.</ListGroup.Item>
          <ListGroup.Item>
            Authentication with Auth0, includes in check securities.
          </ListGroup.Item>
          <ListGroup.Item>Heavy REST API and CRUD operation.</ListGroup.Item>
          <ListGroup.Item>
            Stored within PSQL database and Redux state management conjointly.
          </ListGroup.Item>
          <ListGroup.Item>Mobile first approach.</ListGroup.Item>
          <ListGroup.Item>
            Full CI/CD pipeline, using Docker / Github Actions / Heroku.
          </ListGroup.Item>
        </ListGroup>

        {/* Main technologies */}
        <h3>Main technologies:</h3>
        <ListGroup>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>JavaScript / TypeScript</ListGroup.Item>
          <ListGroup.Item>Node.js / Express.js</ListGroup.Item>
          <ListGroup.Item>Redux</ListGroup.Item>
          <ListGroup.Item>Webpack</ListGroup.Item>
          <ListGroup.Item>PostgreSQL</ListGroup.Item>
          <ListGroup.Item>SASS / Bootstrap</ListGroup.Item>
          <ListGroup.Item>Auth0</ListGroup.Item>
          <ListGroup.Item>etc...</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

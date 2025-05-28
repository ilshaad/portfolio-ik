import { Button, ListGroup, Modal } from "react-bootstrap";

import styles from "../../styles/components/ProjectCards/AllProjectModals.module.css";

type Props = { show: boolean; handleClose: Function };

export default function BugTrackerModal({ show, handleClose }: Props) {
  const {
    AllProjectModals,
    bottomCloseButton,
    modalHeader,
    modalBody,
    modalFooter,
  } = styles;

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      centered
      animation={false}
      className={`${AllProjectModals}`}
    >
      <Modal.Header closeButton className={`${modalHeader}`}>
        <Modal.Title as="h2">Bug tracking web application system</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${modalBody}`}>
        {/* feature */}
        <h4>Features:</h4>
        <ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li">PERN stack build.</ListGroup.Item>
          <ListGroup.Item as="li">
            Authentication with Auth0, includes in check securities.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            Heavy REST API and CRUD operation.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            Stored within PSQL database and Redux state management conjointly.
          </ListGroup.Item>
          <ListGroup.Item as="li">Mobile first approach.</ListGroup.Item>
          <ListGroup.Item as="li">
            Full CI/CD pipeline, using Docker / Github Actions / Heroku.
          </ListGroup.Item>
          <ListGroup.Item as="li">Etc...</ListGroup.Item>
        </ListGroup>

        {/* Main technologies */}
        <h4>Main technologies:</h4>
        <ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li">React</ListGroup.Item>
          <ListGroup.Item as="li">JavaScript / TypeScript</ListGroup.Item>
          <ListGroup.Item as="li">Node.js / Express.js</ListGroup.Item>
          <ListGroup.Item as="li">Redux</ListGroup.Item>
          <ListGroup.Item as="li">Webpack</ListGroup.Item>
          <ListGroup.Item as="li">PostgreSQL</ListGroup.Item>
          <ListGroup.Item as="li">SASS / Bootstrap</ListGroup.Item>
          <ListGroup.Item as="li">Auth0</ListGroup.Item>
        </ListGroup>
      </Modal.Body>

      <Modal.Footer className={`${modalFooter}`}>
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

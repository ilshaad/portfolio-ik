import { Button, ListGroup, Modal } from "react-bootstrap";

import styles from "../../styles/components/ProjectCards/AllProjectModals.module.scss";

type Props = { show: boolean; handleClose: Function };

export default function BlogSiteModal({ show, handleClose }: Props) {
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
        <Modal.Title as="h2">Blog Site</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${modalBody}`}>
        {/* feature */}
        <h4>Features:</h4>
        <ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li">
            Successful testing, including API testing.
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
          <ListGroup.Item as="li">Jest</ListGroup.Item>
          <ListGroup.Item as="li">React-Testing-Library</ListGroup.Item>
          <ListGroup.Item as="li">SASS / Bootstrap</ListGroup.Item>
          <ListGroup.Item as="li">PWA</ListGroup.Item>
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

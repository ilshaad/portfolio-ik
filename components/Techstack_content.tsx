// list the main technologies you can use

import { Col, Container, ListGroup, Row } from "react-bootstrap";

import styles from "../styles/components/Techstack_content.module.scss";

type Props = {};

export default function Techstack_content({}: Props) {
  const { Techstack_component } = styles;

  return (
    <div className={`${Techstack_component}`}>
      <h2>Primary tech stack</h2>

      <Container>
        <Row>
          <Col xs={12} md={6} className={`mt-3`}>
            <h4>Frontend skills:</h4>
            <ListGroup variant={"flush"} as="ul">
              <ListGroup.Item as="li">JavaScript</ListGroup.Item>
              <ListGroup.Item as="li">React</ListGroup.Item>
              <ListGroup.Item as="li">TypeScript</ListGroup.Item>
              <ListGroup.Item as="li">HTML & CSS</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={12} md={6} className={`mt-3`}>
            <h4>Backend skills:</h4>
            <ListGroup variant={"flush"} as="ul">
              <ListGroup.Item as="li">Node.js & Express.js</ListGroup.Item>
              <ListGroup.Item as="li">PostgreSQL</ListGroup.Item>
              <ListGroup.Item as="li">MongoDB</ListGroup.Item>
              <ListGroup.Item as="li">SQL</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className={`mt-3`}>
            <h4>Tools:</h4>
            <ListGroup variant={"flush"} as="ul">
              <ListGroup.Item as="li">Testing (Jest & RTL)</ListGroup.Item>
              <ListGroup.Item as="li">Webpack</ListGroup.Item>
              <ListGroup.Item as="li">Next.js</ListGroup.Item>
              <ListGroup.Item as="li">Docker</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={12} md={6} className={`mt-3`}>
            <h4>Notable mentions:</h4>
            <ListGroup variant={"flush"} as="ul">
              <ListGroup.Item as="li">Redux</ListGroup.Item>
              <ListGroup.Item as="li">Responsive design</ListGroup.Item>
              <ListGroup.Item as="li">SASS / SCSS</ListGroup.Item>
              <ListGroup.Item as="li">
                Bootstrap / React-Bootstrap
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* <Row>
          <Col xs={12} md={12} className={`mt-3`}>
            <h4>Soft skills:</h4>
            <ListGroup variant={"flush"} as="ul">
              <ListGroup.Item as="li">Grit</ListGroup.Item>
              <ListGroup.Item as="li">Humility</ListGroup.Item>
              <ListGroup.Item as="li">Zealous</ListGroup.Item>
              <ListGroup.Item as="li">Architect approach</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row> */}
      </Container>

      <br />
    </div>
  );
}

// list the main technologies you can use

import React from "react";
import { ListGroup } from "react-bootstrap";

type Props = {};

export default function Techstack({}: Props) {
  return (
    <div>
      <h2>My Tech stack</h2>

      <h4>Frontend skills:</h4>
      <ListGroup>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>TypeScript</ListGroup.Item>
        <ListGroup.Item>HTML & CSS</ListGroup.Item>
      </ListGroup>

      <h4>Backend skills:</h4>
      <ListGroup>
        <ListGroup.Item>Node.js & Express.js</ListGroup.Item>
        <ListGroup.Item>PostgreSQL</ListGroup.Item>
        <ListGroup.Item>MongoDB</ListGroup.Item>
        <ListGroup.Item>SQL</ListGroup.Item>
      </ListGroup>

      <h4>Tools:</h4>
      <ListGroup>
        <ListGroup.Item>Testing (Jest & React-Testing-Library)</ListGroup.Item>
        <ListGroup.Item>Webpack</ListGroup.Item>
        <ListGroup.Item>Next.js</ListGroup.Item>
        <ListGroup.Item>Docker</ListGroup.Item>
      </ListGroup>

      <h4>Notable mentions:</h4>
      <ListGroup>
        <ListGroup.Item>Redux</ListGroup.Item>
        <ListGroup.Item>Responsive design</ListGroup.Item>
        <ListGroup.Item>SASS / SCSS</ListGroup.Item>
        <ListGroup.Item>Bootstrap / React-bootstrap</ListGroup.Item>
      </ListGroup>

      <h4>Soft skills:</h4>
      <ListGroup>
        <ListGroup.Item>Grit</ListGroup.Item>
        <ListGroup.Item>Humility</ListGroup.Item>
        <ListGroup.Item>Zealous</ListGroup.Item>
        <ListGroup.Item>Architect approach</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

import React from "react";
import Image, { StaticImageData } from "next/image";

import { Button, Card } from "react-bootstrap";

import bugTrackerImg from "../../public/projectsPreview/bugTrackerSite.jpg";

type Props = {
  handleShow: Function;
  title: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
};

export default function ProjectCard({
  handleShow,
  title,
  summary,
  image,
  imageAlt,
}: Props) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={bugTrackerImg} /> */}
      <Image
        src={image}
        alt={imageAlt}
        width={960}
        height={540}
        className={`border border-5 border-primary`}
        onClick={() => handleShow()}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Button variant="primary" onClick={() => handleShow()}>
          Learn more!
        </Button>
      </Card.Body>
    </Card>
  );
}

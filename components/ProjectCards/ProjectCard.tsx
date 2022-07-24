import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import { Button, Card } from "react-bootstrap";
import Link from "next/link";

type Props = {
  handleShow: Function;
  title: string;
  summary: string;
  image?: StaticImageData;
  imageAlt?: string;
  youtubeIframe?: JSX.Element;
  projectUrl: string;
  projectGitRepoUrl: string;
};

export default function ProjectCard({
  handleShow,
  title,
  summary,
  image,
  imageAlt,
  youtubeIframe,
  projectUrl,
  projectGitRepoUrl,
}: Props) {
  // if no youtube tour video for the project than display the project image
  const displayYoutubeOrImage = () => {
    if (image && imageAlt) {
      return (
        <Image
          src={image}
          alt={imageAlt}
          width={960}
          height={540}
          className={`border border-5 border-primary`}
          onClick={() => handleShow()}
        />
      );
    }

    if (youtubeIframe) {
      return youtubeIframe;
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={bugTrackerImg} /> */}

      {/* display the youtube tour video or the project image */}
      {displayYoutubeOrImage()}

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Button variant="primary">
          <Link href={projectUrl} passHref>
            <a target="_blank">Visit site</a>
          </Link>
        </Button>
        <Button variant="primary">
          <Link href={projectGitRepoUrl} passHref>
            <a target="_blank">Github repo</a>
          </Link>
        </Button>
        <Button variant="primary" onClick={() => handleShow()}>
          Tech info
        </Button>
      </Card.Body>
    </Card>
  );
}

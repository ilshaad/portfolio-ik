import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import styles from "../../styles/components/ProjectCards/ProjectCard.module.css";

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
  const {
    ProjectCard_component,
    mediaContainer,
    titleHeader,
    summaryText,
    cardBody,
    projectButtonsContainer,
    projectButtons,
    techInfo_button,
  } = styles;

  // if no youtube tour video for the project than display the project image
  const displayYoutubeOrImage = () => {
    if (image && imageAlt) {
      return (
        <Image
          src={image}
          alt={imageAlt}
          width={960}
          height={540}
          // className={`border border-5 border-primary`}
          // onClick={() => handleShow()}
        />
      );
    }

    if (youtubeIframe) {
      return youtubeIframe;
    }
  };

  return (
    <Card className={`${ProjectCard_component}`}>
      {/* <Card.Img variant="top" src={bugTrackerImg} /> */}

      <Card.Header>
        <h4 className={`${titleHeader}`}>{title}</h4>
      </Card.Header>

      <Card.Body className={`${cardBody}`}>
        {/* display the youtube tour video or the project image */}
        <div className={`${mediaContainer}`}>{displayYoutubeOrImage()}</div>

        <Card.Text className={`${summaryText}`}>{summary}</Card.Text>

        <Container>
          <Row className={`${projectButtonsContainer} justify-content-center`}>
            <Col xs={4} md={3} className={`p-0`}>
              <Button
                className={`${projectButtons}`}
                size="sm"
                disabled={title === "Portfolio site" ? true : false}
              >
                <Link
                  href={projectUrl}
                  passHref
                  legacyBehavior
                  className={`w-100 h-100 p-0`}
                >
                  <a target="_blank">Visit site</a>
                </Link>
              </Button>
            </Col>

            <Col xs={4} md={3} className={`p-0`}>
              <Button className={`${projectButtons}`} size="sm">
                <Link href={projectGitRepoUrl} passHref legacyBehavior>
                  <a target="_blank">Github repo</a>
                </Link>
              </Button>
            </Col>

            <Col xs={4} md={3} className={`p-0`}>
              <Button
                className={`${projectButtons} ${techInfo_button}`}
                size="sm"
                onClick={() => handleShow()}
              >
                Tech info
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

// * create show & close useState >> for each project you will need to use the <ProjectCard/> component >>  create a modal for it to include tech infor

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/Projects_content.module.scss";
import ProjectCard from "./ProjectCards/ProjectCard";

// bug tracker project
const BugTrackerModal = dynamic(
  () => import("./ProjectCards/BugTrackerModal"),
  { suspense: true }
);
// import BugTrackerModal from "./ProjectCards/BugTrackerModal";

const BugTrackerYoutubeEmbedCode = dynamic(
  () => import("./ProjectCards/BugTrackerYoutubeEmbedCode"),
  {
    suspense: true,
  }
);

// blog site
const BlogSiteModal = dynamic(() => import("./ProjectCards/BlogSiteModal"), {
  suspense: true,
});
// import BlogSiteModal from "./ProjectCards/BlogSiteModal";

import blogPreviewImg from "../public/projectsPreview/ilshaadBlogSite.jpg";

// portfolio site
const PortfolioModal = dynamic(() => import("./ProjectCards/PortfolioModal"), {
  suspense: true,
});
// import PortfolioModal from "./ProjectCards/PortfolioModal";

import PortfolioPreviewImg from "../public/projectsPreview/portfolioSite.jpg";

type Props = {};

export default function Projects_content({}: Props) {
  const { Projects_component } = styles;

  // bug tracker project modal
  const [showBugTrackerModal, setShowBugTrackerModal] = useState(false);
  const closeBugTrackerModal = () => setShowBugTrackerModal(false);
  const openBugTrackerModal = () => setShowBugTrackerModal(true);

  // blog project modal
  const [showBlogModal, setShowBlogModal] = useState(false);
  const closeBlogModal = () => setShowBlogModal(false);
  const openBlogModal = () => setShowBlogModal(true);

  // Portfolio project modal
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const closePortfolioModal = () => setShowPortfolioModal(false);
  const openPortfolioModal = () => setShowPortfolioModal(true);

  return (
    <div className={`${Projects_component}`}>
      <h2>My projects</h2>
      <Container>
        <Row>
          {/* bug tracker app */}
          {/* ensure image size is w960 x h540 */}
          <Col xs={12}>
            <ProjectCard
              handleShow={openBugTrackerModal}
              title="Bug tracking web application system"
              summary="I created this fully functional bug tracker system. It allows developers to
              report defects within developing projects."
              // image={bugtrackerImg}
              // imageAlt="Bug Tracker app preview"
              youtubeIframe={
                <Suspense fallback={`Loading...`}>
                  <BugTrackerYoutubeEmbedCode />
                </Suspense>
              }
              projectUrl="https://bug-tracker-frontend-ik-202203.herokuapp.com/"
              projectGitRepoUrl="https://github.com/RechadSalma/bug-tracker-ik"
            />
          </Col>

          {/* blog app */}
          {/* ensure image size is w960 x h540 */}
          <Col xs={12}>
            <ProjectCard
              handleShow={openBlogModal}
              title="Blog site"
              summary="My personal blog site, to share and help others on certain web sticky points.  I implemented testing and API’s within the Next.js template."
              image={blogPreviewImg}
              imageAlt="ilshaad blog site preview"
              // youtubeIframe={
              //   <Suspense fallback={`Loading...`}>
              //     <BlogYoutubeEmbedCode />
              //   </Suspense>
              // }
              projectUrl="https://www.ilshaadblog.tk/"
              projectGitRepoUrl="https://github.com/RechadSalma/my-blog-site-ik"
            />
          </Col>

          {/* Portfolio */}
          {/* ensure image size is w960 x h540 */}
          <Col xs={12}>
            <ProjectCard
              handleShow={openPortfolioModal}
              title="Portfolio site"
              summary="My web developer portfolio site. Shows a bit of who I am and what I am about."
              image={PortfolioPreviewImg}
              imageAlt="ilshaad Portfolio site preview"
              // youtubeIframe={
              //   <Suspense fallback={`Loading...`}>
              //     <PortfolioYoutubeEmbedCode />
              //   </Suspense>
              // }
              projectUrl="/"
              projectGitRepoUrl="https://github.com/RechadSalma/portfolio-ik"
            />
          </Col>
        </Row>
      </Container>

      <Suspense fallback={``}>
        <BugTrackerModal
          show={showBugTrackerModal}
          handleClose={closeBugTrackerModal}
        />
      </Suspense>
      {/* <BugTrackerModal
        show={showBugTrackerModal}
        handleClose={closeBugTrackerModal}
      /> */}

      <Suspense fallback={``}>
        <BlogSiteModal show={showBlogModal} handleClose={closeBlogModal} />
      </Suspense>
      {/* <BlogSiteModal show={showBlogModal} handleClose={closeBlogModal} /> */}

      <Suspense fallback={``}>
        <PortfolioModal
          show={showPortfolioModal}
          handleClose={closePortfolioModal}
        />
      </Suspense>
      {/* <PortfolioModal
        show={showPortfolioModal}
        handleClose={closePortfolioModal}
      /> */}
    </div>
  );
}

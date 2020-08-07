import React from 'react';
import {Header} from "../Header";
import {Container} from "react-bootstrap";
import {useParams, Redirect} from "react-router-dom";
import {PROJECTS} from "../../resources/projects";
import ImageGallery from "react-image-gallery";

export const Project = () => {
  const { id } = useParams(); // access the dynamic pieces of the URL. See https://reactrouter.com/web/example/url-params
  const project = PROJECTS.find(project => project.id === id);

  if (!project) return <Redirect from='*' to='/404' />;

  const { title, images, long } = project;

  const carouselItems = images.map((image) => (
    { original: image }
  ))

  return (
    <>
      <Header />

      <main>
        <Container>
          <h1>{title}</h1>

          <ImageGallery
            items={carouselItems}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />

          <p>{long}</p>
        </Container>
      </main>
    </>
  );
};

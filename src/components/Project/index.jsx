import React from 'react';
import { Header } from "../Header";
import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import { PROJECTS } from "../../resources/projects";
import { ProjectCarousel } from '../ProjectCarousel';

import classes from './project.module.scss';

export const Project = () => {
  const { id } = useParams(); // access the dynamic pieces of the URL
  const project = PROJECTS.find(project => project.id === id);

  if (!project) return <Navigate to='/404' replace />;

  const { title, long } = project;

  // The long description could be either a single string or an array of strings. Convert to ensure it is always an array.
  const descriptionParagraphs = Array.isArray(long) ? long : [long];

  return (
    <>
      <Header />

      <main>
        <Container>
          <div className={classes.section}>
            <h1>{title}</h1>
            <ProjectCarousel project={project} className={classes.carousel} />
            {
              // Loop over the description and create a paragraph for each block of text
              descriptionParagraphs.map((str, index) => <p key={index}>{str}</p>)
            }
          </div>
        </Container>
      </main>
    </>
  );
};

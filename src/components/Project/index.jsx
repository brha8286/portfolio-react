import React from 'react';
import { Header } from "../Header";
import { Container } from "react-bootstrap";
import { useParams, Redirect } from "react-router-dom";
import { PROJECTS } from "../../resources/projects";
import { ProjectCarousel } from '../ProjectCarousel';

import classes from './project.module.scss';

export const Project = () => {
  const { id } = useParams(); // access the dynamic pieces of the URL. See https://reactrouter.com/web/example/url-params
  const project = PROJECTS.find(project => project.id === id);

  if (!project) return <Redirect from='*' to='/404' />;

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
              descriptionParagraphs.map(str => <p>{str}</p>)
            }
          </div>
        </Container>
      </main>
    </>
  );
};

import React from 'react';
import {Modal} from 'react-bootstrap'

import {useQuery} from "../../hooks/useQuery";
import {LinkButton} from "../LinkButton";
import {useNavigate, useLocation} from "react-router-dom";

import { ProjectCarousel } from '../ProjectCarousel';
import classes from './projectDialog.module.scss';

export function ProjectDialog({ project }) {
  const query = useQuery(); // Parse the URL query params
  const navigate = useNavigate(); // Get access to the react router navigate function
  const location = useLocation();

  const handleClose = () => {
    query.delete("project"); // remove ?project=<id> from the param list
    const newLocation = { ...location, search: query.toString() } // make a clone of the location object with the new query string

    navigate(newLocation); // Navigate to the new URL
  }

  const { title, id } = project || {}; // project could be undefined so give empty object as a fallback

  // Only show the modal if we have a valid project. We want to use the 'show' property so we can animate the Model opening/closing
  return (
    <Modal show={!!project} onHide={handleClose} size="lg" aria-labelledby="modal-title">
      {/* Only try and render the Modal body if we have a valid project */}
      {project && (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ProjectCarousel project={project} className={classes.carouselContainer}/>
          </Modal.Body>

          <Modal.Footer>
            <LinkButton to={`/project/${id}`} variant="primary">
              See More
            </LinkButton>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

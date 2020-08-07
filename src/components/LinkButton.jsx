import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {Button} from "react-bootstrap";

const HEADER_HEIGHT = 50;

/**
 * Custom scroll-to function that accounts for the header height
 */
function scrollWidthOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate - HEADER_HEIGHT, behavior: 'smooth' });
}

/**
 * If we use the Button component to link to another URL it will trigger a full page reload (slow).
 * To prevent a page load we need to change the URL by interacting with react-router via the Link component.
 *
 * This component just wraps a Button with a react-router Link.
 */
export const LinkButton = ({ to, ...otherProps }) => {
  return (
    <Link to={to} scroll={scrollWidthOffset}>
      <Button {...otherProps} />
    </Link>
  )
};

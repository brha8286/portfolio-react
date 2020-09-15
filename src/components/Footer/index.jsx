import React from "react";

import classes from './footer.module.scss';
import {Container} from "react-bootstrap";
import clsx from "clsx";

export const Footer = ({ style, className }) => {
  return (
    <footer className={clsx(classes.footer, className)} style={style}>
      <Container>
        {'Copyright © '} Brandon Harris {new Date().getFullYear()}{'.'}
      </Container>
    </footer>
  )
};

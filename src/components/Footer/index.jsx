import React from "react";

import classes from './footer.module.scss';
import {Container} from "react-bootstrap";
import clsx from "clsx";
import { SocialIcon } from "react-social-icons";

export const Footer = ({ style, className }) => {
  return (
    <footer className={clsx(classes.footer, className)} style={style}>
      <SocialIcon url="mailto:brha8286@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.icons}/>
      <SocialIcon url="https://www.linkedin.com/in/brandon-harris-co/" target="_blank" rel="noopener noreferrer" className={classes.icons}/>
      {/* <Container> */}
        {'Copyright © '} Brandon Harris {new Date().getFullYear()}{'.'}
      {/* </Container> */}
    </footer>
  )
};

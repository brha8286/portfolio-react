import React from "react";

import classes from './header.module.scss';
import clsx from "clsx";
import { LinkButton } from "../LinkButton";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
const resume = `${process.env.PUBLIC_URL}/BrandonHarris.pdf`;


export const Header = ({ className, brandClassName, navClassName }) => {
  return (
    <header className={clsx(classes.header, className)}>
      <Container className={classes.container}>
        <Link className={clsx(classes.brandonBrand, brandClassName)} to="/" onClick={()=>window.scrollTo(0,0)}>
          Brandon Harris
        </Link>
        <nav className={clsx(classes.pageNavigation, navClassName)}>
          <LinkButton variant="outline-light" to="/#about">
            About
          </LinkButton>
          <LinkButton variant="outline-light" to="/#projects">
            Projects
          </LinkButton>
          <Button variant="outline-light" href={resume} target="_blank" className={classes.resumeButton}>
            Résumé
            <span className="material-icons" aria-hidden={true}>get_app</span>
          </Button>
        </nav>
      </Container>
    </header>
  )
};

import React from "react";

import classes from './header.module.scss';
import clsx from "clsx";
import {LinkButton} from "../LinkButton";

export const Header = ({ className }) => {
  return (
    <header className={clsx(classes.header, className)}>
      <nav className={clsx('container', classes.pageNavigation)}>
        <LinkButton variant="outline-light" to="/#projects">
          Projects
        </LinkButton>

        <LinkButton variant="outline-light" to="/#resume">
          Résumé
        </LinkButton>
      </nav>
    </header>
  )
};

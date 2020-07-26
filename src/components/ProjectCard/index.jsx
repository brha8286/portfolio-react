import React from 'react';
import Card from '@material-ui/core/Card';
import { Link, Route } from 'react-router-dom';
import {ProjectDialog} from '../ProjectDialog';

import classes from './projectCard.module.scss';

export function ProjectCard(props) {
    return (
        <Card className={classes.card}>
            <Link to={"/projects/" + props.id}>
                <img src={"https://source.unsplash.com/random"} className={classes.cardMedia} alt="" />
            </Link>
            <main className={classes.cardContent}>
              <h2>{props.title}</h2>
              <p>{props.short}</p>
              <Link to={"/projects/" + props.id}>
                More
              </Link>
              <Route path={"/projects/" + props.id}>
                <ProjectDialog {...props} />
              </Route>
            </main>
        </Card>
    );
}



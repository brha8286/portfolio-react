import { Button, Container, Row, Col } from "react-bootstrap";
import React from 'react';
import ImageGallery from 'react-image-gallery';
import clsx from 'clsx';

import {ScrollAfter} from "../ScrollAfter";
import {ProjectCard} from "../ProjectCard";

import {PROJECTS} from 'resources/projects';
import 'react-image-gallery/styles/css/image-gallery.css';
import bannerImage from "resources/banner.jpg";

import classes from './homepage.module.scss';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export function Homepage() {
  return (
    <>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundImage: `url(${bannerImage})`}}>
          <div className={classes.heroOverlay}>
            <Container className={'container'}>
              <h1>Brandon Harris</h1>
              <p>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don't simply skip over it
                entirely.
              </p>
            </Container>
            <ScrollAfter className={classes.notStuckButton} afterClassName={classes.stuckButton}>
              <nav className={classes.heroButtons}>
                {/* <Grid container spacing={2} justify="center"> */}
                <Button variant="contained" color="primary" href="#projects" className={classes.buttonStyle}>
                  Projects
                </Button>

                <Button variant="outlined" color="primary" href="#resume" className={classes.darkenStyle}>
                  Résumé
                </Button>
                {/* </Grid> */}
              </nav>
            </ScrollAfter>
          </div>
        </div>
        <Container id="projects" className={classes.cardGrid}>
          <h2 className={classes.sectionTitle}>Projects</h2>
          <Row>
            {PROJECTS.map((card) => (
              <Col key={card.id} xs={12} sm={6} md={4}>
                <ProjectCard {...card} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container id="resume" className={classes.cardGrid}>
          <h2 className={clsx(classes.sectionTitle, 'text-primary')}>
            Resume
          </h2>
          <ImageGallery items={images}/>;
        </Container>
        <div/>
      </main>
    </>
  );
}

import {Container, Card} from "react-bootstrap";
import React from 'react';
import clsx from 'clsx';

import {PROJECTS} from 'resources/projects';
import 'react-image-gallery/styles/css/image-gallery.css';
import bannerImage from "resources/banner.jpg";

import classes from './homepage.module.scss';
import {useScrollWatch} from "../../hooks/useScrollWatch";
import {Link} from "react-router-dom";
import {ProjectDialog} from "../ProjectDialog";
import {Header} from "../Header";
import {LinkButton} from "../LinkButton";
import {useQuery} from "../../hooks/useQuery";

export function Homepage() {
  const introSectionRef = React.useRef(null); // A reference to the element around the buttons so we can watch if we have scrolled past it
  const [, hasScrolledPastIntro] = useScrollWatch(introSectionRef);

  const projectId = useQuery().get("project"); // ?project=id
  const project = PROJECTS.find(project => project.id === projectId);

  return (
    <>
      <div className={classes.heroImage} style={{backgroundImage: `url(${bannerImage})`}}/>

      {/* If there is a project ID in the URL then show the project modal */}
      <ProjectDialog project={project}/>

      <div className={classes.heroOverlay}>
        <section ref={introSectionRef}>
          <Container className={classes.brandonIntro}>
            <h1>Brandon Harris</h1>
            <p>
              Raised by wolves in the Siberian tundra, Brandon was taught aerospace engineering by an equally
              out-of-place cocker spaniel. Little did he know that the housepet was none other than the grandchild-dog
              of Werner von Braun, father of modern rocketry. Across continents, oceans, and an array of challenges,
              a friendship stronger than permafrost and hotter than KFC mashed potatoes was born; and our dashing hero
              would learn fluid dynamics along the way.
            </p>
          </Container>
        </section>

        <Header
          className={clsx(classes.header, hasScrolledPastIntro && classes.fixed)}
          brandClassName={classes.headerBrand}
          navClassName={classes.headerNav}
        />
      </div>

      <main>
        <section className={classes.section}>
          <Container id="projects">
            <h2>Projects</h2>
            <div className={classes.projectGrid}>
              {PROJECTS.map((card) => (
                <Card key={card.id} className={classes.card}>
                  <Link to={`?project=${card.id}`} title={"See more images"}>
                    <img className={clsx("card-img-top", classes.projectImg)} src={card.images[0]}/>
                  </Link>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                      {card.short}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <LinkButton to={`/project/${card.id}`} variant="primary">
                      See More
                    </LinkButton>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

import { Container } from "react-bootstrap";
import React from 'react';
import clsx from 'clsx';

import { PROJECTS } from 'resources/projects';
import bannerImage from "resources/banner.jpg";
import aboutImage from "resources/about.png";

import classes from './homepage.module.scss';
import { useScrollWatch } from "../../hooks/useScrollWatch";
import { ProjectDialog } from "../ProjectDialog";
import { Header } from "../Header";
import { LinkButton } from "../LinkButton";
import { useQuery } from "../../hooks/useQuery";
import { ProjectCarousel } from "../ProjectCarousel";

export function Homepage() {
  const introSectionRef = React.useRef(null); // A reference to the element around the buttons so we can watch if we have scrolled past it
  const [, hasScrolledPastIntro] = useScrollWatch(introSectionRef);

  const projectId = useQuery().get("project"); // ?project=id
  const project = PROJECTS.find(project => project.id === projectId);

  return (
    <>
      <div className={classes.heroImage} style={{ backgroundImage: `url(${bannerImage})` }} />

      {/* If there is a project ID in the URL then show the project modal */}
      <ProjectDialog project={project} />

      <div className={classes.heroOverlay}>
        <div ref={introSectionRef}>
          <Container className={classes.brandonIntro}>
            <h1>Brandon Harris</h1>
            {/* <p>
              Raised by wolves in the Siberian tundra, Brandon was taught aerospace engineering by an equally
              out-of-place cocker spaniel. Little did he know that the housepet was none other than the grandchild-dog
              of Werner von Braun, father of modern rocketry. Across continents, oceans, and an array of challenges,
              a friendship stronger than permafrost and hotter than KFC mashed potatoes was born; and our dashing hero
              would learn fluid dynamics along the way.
            </p> */}
            <p style={{ fontSize: "1.4rem" }}>
              Designer, Thinker, Problem Solver, Engineer...er
            </p>
            <p>
              I am seeking new challenging opportunities in the eVTOL aerospace, electric vehicle, and hardware product design fields.
          </p>
          </Container>
        </div>

        <Header
          className={clsx(classes.header, hasScrolledPastIntro && classes.fixed)}
          brandClassName={classes.headerBrand}
          navClassName={classes.headerNav}
        />
      </div>

      <main className={classes.main}>
        <section>
          <Container className={clsx(classes.section, classes.outer)}>
            <h2 id="about">About Me</h2>
            <p>
              I'm Brandon.  I like to make things.  I'm an aerospace engineer by education and trade, but enjoy a broad scope of
              product development.  I'm drawn toward attractive, functional design projects that require an array of
              cross-disciplinary systems, which I excel at combining into a cohesive whole.  I am currently developing the vehicle operator
              training program and designing/prototyping human factors hardware, and have worked extensively in flight testing at Opener, working toward personal electric eVTOL aviation.
          </p>

            <div class={classes.inner}>
              <img className={classes.aboutImage} src={aboutImage} alt={""} />
            </div>
          </Container >
        </section>

        <section>
          <Container className={classes.section}>
            <h2 id="projects">Projects</h2>
            <p>Outside of my work at Opener, I've always sought challenging and engaging projects in my academic and personal life.
            I enjoy seeing a project through from concept to execution, particularly when I'm involved in all steps in between.  Take a look
            at some of the things I've made.</p>
          </Container >
        </section>

        {PROJECTS.map((project, index) => (
          <section key={project.id}>
            <Container className={classes.section}>
              <ProjectCarousel project={project} showThumb={false} autoPlay={true} />
              <h3>{project.title}</h3>
              <p className={classes.projectDescription}>{project.short}</p>

              <LinkButton to={`/project/${project.id}`} variant="primary" className={classes.seeMoreBtn}>
                Read More
              </LinkButton>
            </Container>
          </section>
        ))}
      </main>
    </>
  );
}

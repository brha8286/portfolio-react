import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../projects';
import bannerImage from "../resources/banner.jpg";
import {
  Link,
  Route,
} from 'react-router-dom';
import ScrollAfter from './ScrollAfter';
import { lightBlue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    padding: theme.spacing(8, 0, 6),
    minHeight: '100vh',
    color: theme.palette.primary.light,
  },
  heroOverlay: {
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    padding: '20px 0px',
  },
  heroButtons: {
    position: "sticky",
    marginTop: theme.spacing(4),
    top: 0,
  },
  notStuckButton: {
    marginTop: 0,
    marginLeft: 0,
    transition: `margin-left 1s`,
  },
  stuckButton: {
    position: "fixed",
    top: 0,
    left: 0,
    // marginTop: -theme.spacing(2),
    // marginLeft: theme.spacing(2),
    marginLeft: 100,
    marginTop: 100,
  },
  stickyContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    minWidth: '100vw',
    backgroundPosition: 'center',
    // padding: '20px 0px',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    minHeight: "100vh",
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  sectionTitle: {
    marginBottom: "30px",
  },
}));


export default function Homepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <div className={classes.heroOverlay}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" gutterBottom>
                Brandon Harris
                </Typography>
              <Typography variant="h5" align="center" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don't simply skip over it
                entirely.
                </Typography>
              {/* TODO: add translucent background to div containing buttons */}
              
            </Container>
            <ScrollAfter className={classes.notStuckButton} afterClassName={classes.stuckButton}>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary" href="#projects">
                          Projects
                          </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Résumé
                          </Button>
                      </Grid>
                    </Grid>
                  </div>
              </ScrollAfter>
          </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md" id="projects">
          {/* End hero unit */}
          <Typography variant="h3" align="center" color="textPrimary" className={classes.sectionTitle}>
            Projects
          </Typography>
          <Grid container spacing={6}>
            {PROJECTS.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <ProjectCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <div />
      </main>
    </React.Fragment>
  );
}
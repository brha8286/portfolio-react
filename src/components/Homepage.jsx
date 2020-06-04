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
  notStuckButton: {
    position: 'relative',
    marginTop: 10,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    // left: '50%',
    // paddingRight: 0,
    //display: 'inline-block',
    // transform: 'translateX(50%)',
    //transition: `transform 1s`,
    // justifyContent: 'center',
    // marginTop: theme.spacing(4),
    // marginLeft: 0,
    // transition: `justifyContent 1s`,
  },
  stuckButton: {
    left: '0%',
    transform: 'translate(0%, 0%)',
    // left: '0%',
    // paddingRight: 100,
    //transform: 'translateX(25%)',
    // justifyContent: 'left',
    // position: "fixed",
    // top: 0,
    // left: 0,
    // marginTop: theme.spacing(2),
    // marginLeft: theme.spacing(2),
    // marginLeft: 100,
    // marginTop: 100,
  },
  stickyContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    minWidth: '100vw',
    backgroundPosition: 'center',
  },
  buttonStyle: {
    // display: 'inline-block',
    // transform:'translateX(-100%)',
    // margin: 5,
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
              <ScrollAfter className={classes.notStuckButton} afterClassName={classes.stuckButton}>
                {/* <div className={classes.heroButtons}> */}
                {/* <Grid container spacing={2} justify="center"> */}

                <Button variant="contained" color="primary" href="#projects" className={classes.buttonStyle}>
                  Projects
                </Button>

                <Button variant="outlined" color="primary" className={classes.buttonStyle}>
                  Résumé
                  </Button>
                {/* </Grid> */}
                {/* </div> */}
              </ScrollAfter>
            </Container>

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
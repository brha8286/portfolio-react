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
import ScrollAfter from './ScrollAfter';
import styles from './homepage.module.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';


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
    padding: '10px',
  },
  stickyContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    minWidth: '100vw',
    backgroundPosition: 'center',
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
            </Container>
            <ScrollAfter className={styles.notStuckButton} afterClassName={styles.stuckButton}>
                <div className={classes.heroButtons}>
                {/* <Grid container spacing={2} justify="center"> */}
                <Button variant="contained" color="primary" href="#projects" className={styles.buttonStyle}>
                  Projects
                </Button>

                <Button variant="outlined" color="primary" href="#resume" className={styles.darkenStyle}>
                  Résumé
                </Button>
                {/* </Grid> */}
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

        <Container className={classes.cardGrid} maxWidth="md" id="resume">
          {/* End hero unit */}
          <Typography variant="h3" align="center" color="textPrimary" className={classes.sectionTitle}>
            Resume
          </Typography>
          <ImageGallery items={images} />;
        </Container>
        <div />
      </main>
    </React.Fragment>
  );
}
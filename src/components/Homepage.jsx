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

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    padding: theme.spacing(8, 0, 6),
    minHeight: '100vh',
  },
  heroOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: '20px 0px',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
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
  }
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
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Brandon Harris
            </Typography>
              <Typography variant="h5" align="center" color="textPrimary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                  </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
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
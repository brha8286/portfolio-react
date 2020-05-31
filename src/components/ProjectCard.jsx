import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link,
    Route,
} from 'react-router-dom';
import ProjectDialog from './ProjectDialog';


const useStyles = makeStyles((theme) => ({
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
}));



export default function ProjectCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Link to={"/projects/" + props.id}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
            </Link>
            <CardContent className={classes.cardContent}>
                <h2>{props.title}</h2>
                <p>{props.short}</p>
            </CardContent>
            <CardActions>
                <Link to={"/projects/" + props.id}>
                    More
                </Link>
            </CardActions>

            <Route path={"/projects/" + props.id}>
                <ProjectDialog {...props} />
            </Route>


        </Card>
    );
}



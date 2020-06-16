import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import carouselStyles from './projectDialog.module.scss';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
console.log(carouselStyles);
const useStyles = makeStyles((theme) =>
    ({
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    })
);

export default function ProjectDialog(props) {
    const history = useHistory();
    const classes = useStyles();
    const handleClose = () => {
        history.push("/projects/");
    }
    const carouselItems = props.images.map((image) => (
        {original: image, originalClass: carouselStyles.carouselImage}
    ))

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={true} onClose={handleClose} fullWidth={true}>
            <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>

            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <div className={carouselStyles.carouselContainer}>
                <ImageGallery 
                    items={carouselItems} 
                    showThumbnails={false} 
                    showPlayButton={false} 
                    showFullscreenButton={false} 
                    renderRightNav={(onClick, disabled) => (
                        <IconButton
                            className={carouselStyles.carouselRight}
                            disabled={disabled}
                            onClick={onClick}>
                                <ArrowRightIcon/>
                        </IconButton>
                    )}
                    renderLeftNav={(onClick, disabled) => (
                        <IconButton
                            className={carouselStyles.carouselLeft}
                            disabled={disabled}
                            onClick={onClick}>
                                <ArrowLeftIcon/>
                        </IconButton>
                    )}
                />
            </div>
            Hello world
        </Dialog>
    )
}


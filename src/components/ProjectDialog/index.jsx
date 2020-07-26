import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ImageGallery from 'react-image-gallery';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import classes from './projectDialog.module.scss';

export function ProjectDialog(props) {
    const history = useHistory();

    const handleClose = () => {
        history.push("/projects/");
    }

    const carouselItems = props.images.map((image) => (
        {original: image, originalClass: classes.carouselImage}
    ))

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={true} onClose={handleClose} fullWidth={true}>
            <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>

            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <div className={classes.carouselContainer}>
                <ImageGallery
                    items={carouselItems}
                    showThumbnails={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    renderRightNav={(onClick, disabled) => (
                        <IconButton
                            className={classes.carouselRight}
                            disabled={disabled}
                            onClick={onClick}>
                                <ArrowRightIcon/>
                        </IconButton>
                    )}
                    renderLeftNav={(onClick, disabled) => (
                        <IconButton
                            className={classes.carouselLeft}
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

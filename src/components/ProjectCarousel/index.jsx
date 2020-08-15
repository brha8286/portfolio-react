import React from 'react';
import ImageGallery from 'react-image-gallery';
import clsx from "clsx";

import classes from './projectCarousel.module.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

export function ProjectCarousel({ project, className }) {

    const { images } = project || {}; // project could be undefined so give empty object as a fallback
    if (!images || !images.length) {
        return null
    }

    return (
        <div className={clsx(classes.carouselContainer, className)}>
            <ImageGallery
                items={images.map((image) => (
                    { original: image, originalClass: classes.carouselImage }
                ))}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
            />
        </div>
    )
}

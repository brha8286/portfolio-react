import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import clsx from "clsx";

import classes from './projectCarousel.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ProjectCarousel({project, className, showThumbs = true, autoPlay= false }) {
  const {images} = project || {}; // project could be undefined so give empty object as a fallback
  if (!images || !images.length) {
    return null
  }

  return (
    <div className={clsx(classes.carouselContainer, className)}>
      <Carousel
        showThumbs={showThumbs}
        autoPlay={autoPlay}
        stopOnHover={false}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        useKeyboardArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          <button type="button" onClick={onClickHandler} title={label} className={clsx(classes.controlButton, classes.left)}>
            <span className="material-icons">navigate_before</span>
          </button>
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          <button type="button" onClick={onClickHandler} title={label} className={clsx(classes.controlButton, classes.right)}>
            <span className="material-icons">navigate_next</span>
          </button>
        }
      >
        {
          images.map(image => (
            <div className={classes.image}>
              <img src={image} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

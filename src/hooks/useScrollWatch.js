import React from "react";

/**
 * React hook that watches the provided element and returns a tuple containing information regarding if the top and
 * bottom of the element are in the viewport.
 *
 * Example Usage:
 *   const [hasScrolledPastTop, hasScrolledPastBottom] = useScrollWatch(elementRef);
 */
export function useScrollWatch(elementRef, topThreshold = 0, bottomThreshold = 0) {
  const [scrolledPastTop, setScrolledPastTop] = React.useState(false);
  const [scrolledPastBottom, setScrolledBottom] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = (e) => window.requestAnimationFrame(() => {
      const trackingElm = elementRef?.current;

      if (!trackingElm) return;

      const { top, bottom } = trackingElm.getBoundingClientRect();

      setScrolledPastTop(top <= topThreshold);
      setScrolledBottom(bottom <= bottomThreshold)
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, topThreshold, bottomThreshold]);

  return [scrolledPastTop, scrolledPastBottom];
}

import React from "react";

export default function ScrollAfter({ children, className , afterClassName}) {
  const containerRef = React.useRef(null);
  const childrenWrapper = React.useRef(null);
  const [scrolledPast, setScrolledPast] = React.useState(false);
  const heightRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = e => {
      if (!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      if (top <= 0) {
        heightRef.current = childrenWrapper.current.offsetHeight; // save the value of the height as it is now
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const trackerPixelHeight = scrolledPast && heightRef.current ? `${heightRef.current}px` : 'auto';

  return (
    <>
      <div ref={containerRef} style={{visibility: 'hidden', height: trackerPixelHeight }} /> {/* Tracking pixel */}
      <div ref={childrenWrapper} className={`${className} ${scrolledPast ? afterClassName : ""}`}>
        {children}
      </div>
    </>
  );
}
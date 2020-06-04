import React from "react";

export default function ScrollAfter({ children, className , afterClassName}) {
  const containerRef = React.useRef(null);
  const [scrolledPast, setScrolledPast] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = e => {
      if (!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      if (top <= 0) {
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

  return (
    <>
      <div ref={containerRef} style={{visibility: 'hidden'}}> {/* Tracking pixel */}
          {/* {
              scrolledPast ? React.cloneElement(children) : null
          } */}
      </div>
      <div className={`${className} ${scrolledPast ? afterClassName : ""}`}>
        {children}
      </div>
    </>
  );
}
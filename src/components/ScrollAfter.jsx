import React from "react";

export default function ScrollAfter({ children, className }) {
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
      <div ref={containerRef} /> {/* Tracking pixel */}
      <div className={scrolledPast ? className : ""}>
        {children}
      </div>
    </>
  );
}
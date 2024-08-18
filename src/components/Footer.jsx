import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({
    value: "relative",
    bottom: "auto",
  });

  const updatePosition = () => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      console.log(elementTop, viewportHeight);

      if (elementTop < viewportHeight) {
        setPosition({
          value: "absolute",
          bottom: "0px",
        });
      } else {
        setPosition({
          value: "relative",
          bottom: "auto",
        });
      }
    }
  };
  useEffect(() => {
    updatePosition();
  }, []);



  return (
    <footer
      ref={elementRef}
      className="footer"
      style={{ position: `${position.value}`, bottom: `${position.bottom}` }}
    >
      &#169;All Rights Reserved. Prasanth Patta
    </footer>
  );
};

export default Footer;

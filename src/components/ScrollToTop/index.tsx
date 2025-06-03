import React, { useState, useEffect } from "react";
import { Fab, Fade } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import "./styles.scss";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={visible}>
      <Fab
        className="scroll-to-top"
        color="primary"
        size="medium"
        onClick={scrollToTop}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUp />
      </Fab>
    </Fade>
  );
};

export default ScrollToTop;

import React from "react";
import { Box } from "@mui/material";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
// import { Experience } from "./components/Experience";
// import { Education } from "./components/Education";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ExperienceSection } from "./components/Experience";
// import "./styles.scss";

export const Homepage: React.FC = () => {
  return (
    <Box className="homepage">
      <Welcome />
      <About />
      <ExperienceSection />
      {/* <Education /> */}
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </Box>
  );
};

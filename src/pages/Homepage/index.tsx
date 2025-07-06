import React from "react";
import { Box } from "@mui/material";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { ExperienceSection } from "./components/Experience";
// import { Education } from "./components/Education";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { EducationSection } from "./components/Education";


export const Homepage: React.FC = () => {
  return (
    <Box className="homepage">
      <Welcome />
      <About />
      <ExperienceSection />
      <EducationSection />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </Box>
  );
};

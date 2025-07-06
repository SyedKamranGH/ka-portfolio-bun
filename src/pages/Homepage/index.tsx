import React from "react";
import { Box } from "@mui/material";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { ExperienceSection } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { EducationSection } from "./components/Education";
import { SkillsSection } from "./components/Skills";

export const Homepage: React.FC = () => {
  return (
    <Box className="homepage">
      <Welcome />
      <About />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <Projects />
      <Contact />
    </Box>
  );
};

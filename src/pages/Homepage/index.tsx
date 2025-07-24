import React from "react";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { EducationSection } from "./components/Education";
import { SkillsSection } from "./components/Skills";
import { Contact } from "./components/Contact";
import { ExperienceSection } from "./components/Experience";
import { Projects } from "./components/Projects";

export const Homepage: React.FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <Projects />
      <Contact />
    </>
  );
};

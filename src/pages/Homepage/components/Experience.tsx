import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { experiences } from "../../../constants/data/experiences";
import { ExperienceAnimations } from "../../../components/Animations";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { ExperienceTimeline } from "../../../components/Timeline/ExperienceTimeline";
import { CallToAction } from "../../../components/CallToAction/CallToAction";
import type { Experience } from "../../../types";
import "./Experience.scss";

const MotionBox = motion(Box);

export const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isLightMode = theme.palette.mode === "light";

  const handleExperienceClick = (experience: Experience) => {
    navigate(`/experience/${experience.id}`);
  };

  return (
    <Box
      component="section"
      id="experience"
      className={`experience-section ${
        isLightMode ? "light-mode" : "dark-mode"
      }`}
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Animated Tech Background */}
      <ExperienceAnimations />

      <Container maxWidth="lg" className="experience-content">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <SectionHeader
            title="Professional Experience"
            subtitle="My journey through various roles and experiences in the tech industry"
            className="experience-header"
          />

          {/* Experience Timeline */}
          <ExperienceTimeline
            experiences={experiences}
            onExperienceClick={handleExperienceClick}
          />

          {/* Call to Action */}
          <CallToAction
            title="Want to know more?"
            subtitle="Click on any experience card to view detailed information about my roles, responsibilities, and achievements."
          />
        </MotionBox>
      </Container>
    </Box>
  );
};

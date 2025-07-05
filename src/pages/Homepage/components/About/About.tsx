import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ProfileSection } from "./ProfileSection";
import { HighlightsSection } from "./HighlightsSection";
import { AchievementsSection } from "./AchievementsSection";
import "../About.scss";

const MotionBox = motion(Box);

export const About: React.FC = () => {
  return (
    <Box component="section" id="about" className="about-section">
      <Container maxWidth="lg" className="about-container">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box className="about-header">
            <Typography
              variant="h3"
              component="h2"
              color="primary"
              className="about-title"
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              className="about-subtitle"
            >
              Passionate about creating exceptional digital experiences through
              clean code and innovative solutions
            </Typography>
          </Box>

          <Box className="about-main-content">
            <ProfileSection />
            <HighlightsSection />
          </Box>

          <AchievementsSection />
        </MotionBox>
      </Container>
    </Box>
  );
};

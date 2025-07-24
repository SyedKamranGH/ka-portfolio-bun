import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import { useTheme as useCustomTheme } from "../../../context/ThemeContext";
import WelcomeTechStackImage from "../../../assets/images/WelocmeTechStackLight.png";
import "./Welcome.scss";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const Welcome: React.FC = () => {
  const { isDarkMode } = useCustomTheme();

  const handleQuickLink = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      component="section"
      id="welcome"
      className={`welcome-section ${isDarkMode ? "theme-dark" : "theme-light"}`}
      sx={{
        backgroundImage: `url(${WelcomeTechStackImage})`,
      }}
    >
      <Container maxWidth="lg" className="welcome-container">
        <Box className="welcome-content">
          {/* Left side - main content */}
          <Box className="welcome-main-content">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="welcome-card"
            >
              <Stack className="welcome-content-stack">
                {/* Professional Welcome Header */}
                <MotionTypography
                  variant="h6"
                  className="welcome-header"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Welcome to my Portfolio
                </MotionTypography>

                {/* Main Title */}
                <MotionTypography
                  variant="h1"
                  className="welcome-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Syed Kamran Ahmed
                </MotionTypography>

                {/* Subtitle */}
                <MotionTypography
                  variant="h4"
                  className="welcome-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Full-Stack Developer
                </MotionTypography>

                {/* Professional Summary */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="welcome-summary"
                >
                  <Typography variant="body1" className="summary-text">
                    Crafting innovative digital solutions with 6+ years of
                    expertise in modern web technologies. Specialized in{" "}
                    <Box component="span" className="highlight-text">
                      React, TypeScript, and Node.js
                    </Box>{" "}
                    with a passion for creating exceptional user experiences.
                  </Typography>
                </MotionBox>

                {/* Action Buttons */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="welcome-actions"
                >
                  <Stack className="actions-stack">
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => handleQuickLink("projects")}
                      className="primary-button"
                    >
                      View My Work
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => handleQuickLink("experience")}
                      className="secondary-button"
                    >
                      My Experience
                    </Button>
                  </Stack>
                </MotionBox>
              </Stack>
            </MotionBox>
          </Box>

          {/* Right side - magical decorative elements */}
          <Box className="welcome-decorative">
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {/* Magical floating elements */}
              <Box className="magical-container">
                {/* Floating glass orb */}
                <Box className="floating-orb" />

                {/* Floating glass card */}
                <Box className="floating-card" />

                {/* Additional floating particle */}
                <Box className="floating-particle" />
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Container>

      {/* Magical scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="scroll-indicator"
      >
        <Box className="scroll-mouse" />
      </MotionBox>
    </Box>
  );
};

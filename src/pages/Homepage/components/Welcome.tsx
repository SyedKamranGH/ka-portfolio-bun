import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { personalInfo } from "../../../constants/data/personal";
import "./Welcome.scss";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const Welcome: React.FC = () => {
  return (
    <Box component="section" id="welcome" className="welcome-section">
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
                  {personalInfo.name}
                </MotionTypography>

                {/* Subtitle */}
                <MotionTypography
                  variant="h4"
                  className="welcome-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {personalInfo.title}
                </MotionTypography>

                {/* Professional Summary */}
                <MotionTypography
                  variant="body1"
                  className="welcome-description"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  {personalInfo.welcomeMessage}
                </MotionTypography>
              </Stack>
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

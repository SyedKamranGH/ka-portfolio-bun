import React from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Avatar,
  Typography,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { coreSkills } from "../../../../constants/data/skills";
import { personalInfo } from "../../../../constants/data/personal";

const MotionBox = motion(Box);

export const ProfileSection: React.FC = () => {
  return (
    <Box className="about-profile-section">
      <MotionBox
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        sx={{ height: "100%" }}
      >
        <Card className="profile-card">
          <CardContent className="profile-content">
            <Stack spacing={3} alignItems="center" className="profile-stack">
              <Avatar
                src="/assets/images/profile-about.jpg"
                alt="Profile"
                className="profile-avatar"
              />

              <Typography
                variant="body1"
                color="text.secondary"
                className="profile-text"
              >
                {personalInfo.aboutMe}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                className="profile-text"
              >
                I believe in writing clean, efficient code and creating user
                experiences that make a difference. When I&apos;m not coding,
                you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer
                community.
              </Typography>

              {/* Core Skills */}
              <Box className="profile-skills">
                <Typography
                  variant="h6"
                  color="primary"
                  className="skills-title"
                >
                  Core Technologies
                </Typography>
                <Box className="skills-chips">
                  {coreSkills.slice(0, 6).map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      className="skill-chip"
                    />
                  ))}
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </MotionBox>
    </Box>
  );
};

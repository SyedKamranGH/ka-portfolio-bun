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
import { skills } from "../../../../constants/data/about";

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
                I&apos;m a passionate full-stack developer with expertise in
                modern web technologies. My journey in software development
                spans over 5 years, during which I&apos;ve had the privilege of
                working on diverse projects ranging from small business websites
                to enterprise-level applications.
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

              <Box className="skills-container">
                <Typography
                  variant="h6"
                  color="text.primary"
                  className="skills-title"
                >
                  Core Technologies
                </Typography>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  justifyContent="center"
                  className="skills-stack"
                >
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      size="small"
                      className="skill-chip"
                    />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </MotionBox>
    </Box>
  );
};

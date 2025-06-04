import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { motion } from "framer-motion";
import {
  Code,
  Psychology,
  Speed,
  Group,
  EmojiEvents,
  School,
} from "@mui/icons-material";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const highlights = [
  {
    icon: <Code />,
    title: "Technical Excellence",
    description:
      "Proficient in modern web technologies with a focus on clean, maintainable code",
  },
  {
    icon: <Psychology />,
    title: "Problem Solving",
    description:
      "Strong analytical skills with ability to break down complex problems",
  },
  {
    icon: <Speed />,
    title: "Performance Optimization",
    description:
      "Experience in optimizing applications for speed and scalability",
  },
  {
    icon: <Group />,
    title: "Team Collaboration",
    description:
      "Excellent communication skills and experience working in agile teams",
  },
  {
    icon: <EmojiEvents />,
    title: "Achievement Focus",
    description:
      "Track record of delivering projects on time and exceeding expectations",
  },
  {
    icon: <School />,
    title: "Continuous Learning",
    description:
      "Passionate about staying updated with latest technologies and best practices",
  },
];

const achievements = [
  "Led development of 10+ successful web applications",
  "Improved application performance by 40% through optimization",
  "Mentored 5+ junior developers",
  "Contributed to open-source projects with 500+ stars",
];

export const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ mb: 6 }}
          >
            About Me
          </Typography>

          <Grid container spacing={4} alignItems="center">
            {/* Profile Section */}
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Stack spacing={3} alignItems="center" textAlign="center">
                  <Avatar
                    src="/assets/images/profile-about.jpg"
                    alt="Profile"
                    sx={{
                      width: 200,
                      height: 200,
                      border: `3px solid ${theme.palette.primary.main}`,
                      boxShadow: theme.shadows[8],
                    }}
                  />

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                  >
                    I&apos;m a passionate full-stack developer with expertise in
                    modern web technologies. My journey in software development
                    spans over 5 years, during which I've had the privilege of
                    working on diverse projects ranging from small business
                    websites to enterprise-level applications.
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                  >
                    I believe in writing clean, efficient code and creating user
                    experiences that make a difference. When I'm not coding, you
                    can find me exploring new technologies, contributing to
                    open-source projects, or sharing knowledge with the
                    developer community.
                  </Typography>
                </Stack>
              </MotionBox>
            </Grid>

            {/* Highlights Section */}
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Grid container spacing={2}>
                  {highlights.map((highlight, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <MotionCard
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        sx={{
                          height: "100%",
                          borderRadius: 2,
                          boxShadow: theme.shadows[4],
                          "&:hover": {
                            boxShadow: theme.shadows[8],
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Stack
                            spacing={2}
                            alignItems="center"
                            textAlign="center"
                          >
                            <Box
                              sx={{
                                color: theme.palette.primary.main,
                                fontSize: "2rem",
                              }}
                            >
                              {highlight.icon}
                            </Box>
                            <Typography
                              variant="h6"
                              fontWeight="bold"
                              color="text.primary"
                            >
                              {highlight.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ fontSize: "0.9rem", lineHeight: 1.5 }}
                            >
                              {highlight.description}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </MotionCard>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </Grid>
          </Grid>

          {/* Achievements Section */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            sx={{ mt: 8 }}
          >
            <Typography
              variant="h4"
              component="h3"
              textAlign="center"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Key Achievements
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {achievements.map((achievement, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      sx={{
                        textAlign: "center",
                        p: 2,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                        border: `1px solid ${theme.palette.divider}`,
                        height: "100%",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="body1"
                          color="text.primary"
                          fontWeight="medium"
                        >
                          {achievement}
                        </Typography>
                      </CardContent>
                    </Card>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

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
import { motion } from "framer-motion";
import {
  Code,
  Psychology,
  Speed,
  Group,
  EmojiEvents,
  School,
  AutoAwesome,
  Lightbulb,
} from "@mui/icons-material";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const highlights = [
  {
    icon: <Code />,
    title: "Technical Excellence",
    description:
      "Proficient in modern web technologies with a focus on clean, maintainable code",
    color: "#1976d2",
  },
  {
    icon: <Psychology />,
    title: "Problem Solving",
    description:
      "Strong analytical skills with ability to break down complex problems",
    color: "#7b1fa2",
  },
  {
    icon: <Speed />,
    title: "Performance Optimization",
    description:
      "Experience in optimizing applications for speed and scalability",
    color: "#f57c00",
  },
  {
    icon: <Group />,
    title: "Team Collaboration",
    description:
      "Excellent communication skills and experience working in agile teams",
    color: "#388e3c",
  },
  {
    icon: <EmojiEvents />,
    title: "Achievement Focus",
    description:
      "Track record of delivering projects on time and exceeding expectations",
    color: "#fbc02d",
  },
  {
    icon: <School />,
    title: "Continuous Learning",
    description:
      "Passionate about staying updated with latest technologies and best practices",
    color: "#d32f2f",
  },
];

const achievements = [
  {
    number: "10+",
    title: "Web Applications",
    description: "Successfully developed and deployed",
    icon: <AutoAwesome />,
  },
  {
    number: "40%",
    title: "Performance Boost",
    description: "Average optimization improvement",
    icon: <Speed />,
  },
  {
    number: "5+",
    title: "Developers Mentored",
    description: "Junior developers guided to success",
    icon: <Group />,
  },
  {
    number: "500+",
    title: "GitHub Stars",
    description: "On open-source contributions",
    icon: <Lightbulb />,
  },
];

const skills = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "GraphQL",
  "Next.js",
  "Express.js",
  "Git",
];

export const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}03, ${theme.palette.secondary.main}03)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              color="primary"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Passionate about creating exceptional digital experiences through
              clean code and innovative solutions
            </Typography>
          </Box>

          {/* Main Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              alignItems: "stretch",
            }}
          >
            {/* Profile Section */}
            <Box sx={{ flex: { xs: "1 1 100%", lg: "1 1 42%" } }}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                sx={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: theme.shadows[8],
                    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}08)`,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack spacing={3} alignItems="center" textAlign="center">
                      <Avatar
                        src="/assets/images/profile-about.jpg"
                        alt="Profile"
                        sx={{
                          width: { xs: 150, md: 200 },
                          height: { xs: 150, md: 200 },
                          border: `4px solid ${theme.palette.primary.main}`,
                          boxShadow: theme.shadows[8],
                        }}
                      />

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                      >
                        I&apos;m a passionate full-stack developer with
                        expertise in modern web technologies. My journey in
                        software development spans over 5 years, during which
                        I&apos;ve had the privilege of working on diverse
                        projects ranging from small business websites to
                        enterprise-level applications.
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                      >
                        I believe in writing clean, efficient code and creating
                        user experiences that make a difference. When I&apos;m
                        not coding, you can find me exploring new technologies,
                        contributing to open-source projects, or sharing
                        knowledge with the developer community.
                      </Typography>

                      {/* Skills Section */}
                      <Box sx={{ width: "100%", mt: 3 }}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                        >
                          Core Technologies
                        </Typography>
                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          gap={1}
                          justifyContent="center"
                        >
                          {skills.map((skill, index) => (
                            <Chip
                              key={index}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                fontWeight: "medium",
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.dark,
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </MotionBox>
            </Box>

            {/* Highlights Section */}
            <Box sx={{ flex: { xs: "1 1 100%", lg: "1 1 58%" } }}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                sx={{ height: "100%" }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                    },
                    gap: 2,
                    height: "100%",
                  }}
                >
                  {highlights.map((highlight, index) => (
                    <Box key={index}>
                      <MotionCard
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        sx={{
                          height: "100%",
                          borderRadius: 2,
                          boxShadow: theme.shadows[4],
                          cursor: "pointer",
                          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${highlight.color}08)`,
                          border: `1px solid ${highlight.color}20`,
                          "&:hover": {
                            boxShadow: theme.shadows[12],
                            borderColor: `${highlight.color}40`,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, height: "100%" }}>
                          <Stack
                            spacing={2}
                            alignItems="center"
                            textAlign="center"
                            sx={{ height: "100%" }}
                          >
                            <Box
                              sx={{
                                color: highlight.color,
                                fontSize: "2.5rem",
                                p: 1,
                                borderRadius: "50%",
                                backgroundColor: `${highlight.color}10`,
                              }}
                            >
                              {highlight.icon}
                            </Box>
                            <Typography
                              variant="h6"
                              fontWeight="bold"
                              color="text.primary"
                              sx={{ fontSize: "1.1rem" }}
                            >
                              {highlight.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: "0.9rem",
                                lineHeight: 1.6,
                                flexGrow: 1,
                              }}
                            >
                              {highlight.description}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </MotionCard>
                    </Box>
                  ))}
                </Box>
              </MotionBox>
            </Box>
          </Box>

          {/* Achievements Section */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            sx={{ mt: 10 }}
          >
            <Typography
              variant="h4"
              component="h3"
              textAlign="center"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
              sx={{ mb: 6, fontSize: { xs: "1.8rem", md: "2.5rem" } }}
            >
              Key Achievements
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 3,
                justifyContent: "center",
              }}
            >
              {achievements.map((achievement, index) => (
                <Box key={index}>
                  <MotionBox
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      sx={{
                        textAlign: "center",
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                        border: `2px solid ${theme.palette.primary.main}20`,
                        height: "100%",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: theme.shadows[12],
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Stack spacing={2} alignItems="center">
                          <Box
                            sx={{
                              color: theme.palette.primary.main,
                              fontSize: "2rem",
                              p: 1,
                              borderRadius: "50%",
                              backgroundColor: `${theme.palette.primary.main}10`,
                            }}
                          >
                            {achievement.icon}
                          </Box>
                          <Typography
                            variant="h3"
                            color="primary"
                            fontWeight="bold"
                            sx={{ fontSize: "2.5rem" }}
                          >
                            {achievement.number}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="text.primary"
                            fontWeight="bold"
                          >
                            {achievement.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.9rem" }}
                          >
                            {achievement.description}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </MotionBox>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

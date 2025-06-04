import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import { useScroll } from "../../../hooks/useScroll";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const Welcome: React.FC = () => {
  const theme = useTheme();
  const { scrollTo } = useScroll();

  const handleQuickLink = (sectionId: string) => {
    scrollTo(sectionId);
  };

  return (
    <Box
      component="section"
      id="welcome"
      className="welcome-section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Profile Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Avatar
                src="/assets/images/profile.jpg"
                alt="Profile"
                sx={{
                  width: 150,
                  height: 150,
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: theme.shadows[8],
                }}
              />
            </motion.div>

            {/* Welcome Greeting */}
            <Stack spacing={2} alignItems="center">
              <MotionTypography
                variant="h6"
                color="text.secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hello, I&#39;m
              </MotionTypography>

              <MotionTypography
                variant="h2"
                // component="h1"
                color="primary"
                fontWeight="bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                John Doe
              </MotionTypography>

              <MotionTypography
                variant="h5"
                color="text.primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                Full Stack Developer
              </MotionTypography>
            </Stack>

            {/* Career Summary */}
            <MotionBox
              maxWidth="md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Passionate developer with 5+ years of experience building
                scalable web applications using modern technologies. Specialized
                in React, TypeScript, and Node.js with a strong focus on user
                experience and performance optimization.
              </Typography>
            </MotionBox>

            {/* Quick Action Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleQuickLink("projects")}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => handleQuickLink("experience")}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  My Experience
                </Button>
              </Stack>
            </MotionBox>
          </Stack>
        </MotionBox>
      </Container>

      {/* Background Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
        }}
      />
    </Box>
  );
};

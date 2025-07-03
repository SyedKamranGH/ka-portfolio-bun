import React from "react";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import WelcomeTechStackImage from "../../../assets/images/WelocmeTechStackLight.png";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const Welcome: React.FC = () => {
  const theme = useTheme();

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
      className="welcome-section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${WelcomeTechStackImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}08 0%, 
            ${theme.palette.secondary.main}08 25%, 
            ${theme.palette.primary.light}15 50%, 
            ${theme.palette.secondary.light}08 75%, 
            ${theme.palette.primary.main}08 100%)`,
          zIndex: 1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 70%, 
            ${theme.palette.primary.main}20 0%, 
            transparent 50%), 
            radial-gradient(circle at 70% 30%, 
            ${theme.palette.secondary.main}20 0%, 
            transparent 50%)`,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: "80vh",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Left side - main content */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "66%" },
              mt: { xs: 8, sm: 10, md: 12 }, // Adding top margin to create space from header
            }}
          >
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.6) 0%, 
                  rgba(248, 250, 252, 0.5) 50%,
                  rgba(${theme.palette.primary.main
                    .replace("#", "")
                    .match(/.{2}/g)
                    ?.map((x) => parseInt(x, 16))
                    .join(", ")}, 0.1) 100%)`,
                backdropFilter: "blur(15px)",
                borderRadius: 4,
                padding: { xs: 4, md: 6 },
                border: `1px solid rgba(255, 255, 255, 0.2)`,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Stack spacing={4}>
                {/* Professional Welcome Header */}
                <MotionTypography
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "inline-block",
                    textShadow: "0 2px 4px rgba(255, 255, 255, 0.8)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Welcome to my Portfolio
                </MotionTypography>

                {/* Main Title */}
                <MotionTypography
                  variant="h1"
                  sx={{
                    background: `linear-gradient(135deg, 
                      ${theme.palette.primary.main} 0%, 
                      ${theme.palette.secondary.main} 50%, 
                      ${theme.palette.primary.dark} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                    lineHeight: 1.1,
                    mb: 2,
                    letterSpacing: "-0.02em",
                    filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.5))",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  John Doe
                </MotionTypography>

                {/* Subtitle */}
                <MotionTypography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    mb: 2,
                    background: `linear-gradient(135deg, 
                      ${theme.palette.primary.dark} 0%, 
                      ${
                        theme.palette.secondary.dark ||
                        theme.palette.secondary.main
                      } 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.8))",
                    textShadow: "0 2px 8px rgba(255, 255, 255, 0.9)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Full Stack Developer
                </MotionTypography>

                {/* Professional Summary */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  sx={{
                    padding: 3,
                    borderRadius: 3,
                    backgroundColor: `rgba(255, 255, 255, 0.8)`,
                    border: `1px solid rgba(255, 255, 255, 0.5)`,
                    backdropFilter: "blur(15px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.primary.dark,
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.6,
                      fontWeight: 500,
                      textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Crafting innovative digital solutions with 5+ years of
                    expertise in modern web technologies. Specialized in{" "}
                    <Box
                      component="span"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
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
                  sx={{ mt: 3 }}
                >
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => handleQuickLink("projects")}
                      sx={{
                        px: 5,
                        py: 2,
                        borderRadius: 3,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        background: `linear-gradient(135deg, 
                          ${theme.palette.primary.main} 0%, 
                          ${theme.palette.primary.dark} 100%)`,
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                        color: "white",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
                          background: `linear-gradient(135deg, 
                            ${theme.palette.primary.dark} 0%, 
                            ${theme.palette.primary.main} 100%)`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      View My Work
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => handleQuickLink("experience")}
                      sx={{
                        px: 5,
                        py: 2,
                        borderRadius: 3,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        borderWidth: "2px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                          borderColor: theme.palette.primary.dark,
                          backgroundColor: "rgba(255, 255, 255, 0.7)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      My Experience
                    </Button>
                  </Stack>
                </MotionBox>
              </Stack>
            </MotionBox>
          </Box>

          {/* Right side - magical decorative elements */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "33%" },
              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {/* Magical floating elements */}
              <Box
                sx={{
                  position: "relative",
                  height: "500px",
                  width: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Floating glass orb */}
                <Box
                  sx={{
                    width: "200px",
                    height: "200px",
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.25) 0%, 
                      rgba(255, 255, 255, 0.05) 100%)`,
                    backdropFilter: "blur(20px)",
                    borderRadius: "50%",
                    position: "absolute",
                    border: `2px solid rgba(255, 255, 255, 0.2)`,
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                    animation: "magicalFloat 12s ease-in-out infinite",
                    "@keyframes magicalFloat": {
                      "0%": {
                        transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                        borderColor: `rgba(${theme.palette.primary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.3)`,
                      },
                      "15%": {
                        transform:
                          "translate(80px, -60px) rotate(45deg) scale(1.1)",
                        borderColor: `rgba(${theme.palette.secondary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.4)`,
                      },
                      "30%": {
                        transform:
                          "translate(-40px, -100px) rotate(90deg) scale(0.9)",
                        borderColor: `rgba(${theme.palette.primary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.5)`,
                      },
                      "45%": {
                        transform:
                          "translate(-120px, 40px) rotate(180deg) scale(1.05)",
                        borderColor: `rgba(${theme.palette.secondary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.3)`,
                      },
                      "60%": {
                        transform:
                          "translate(60px, 80px) rotate(225deg) scale(0.95)",
                        borderColor: `rgba(${theme.palette.primary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.4)`,
                      },
                      "75%": {
                        transform:
                          "translate(100px, -20px) rotate(270deg) scale(1.08)",
                        borderColor: `rgba(${theme.palette.secondary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.5)`,
                      },
                      "90%": {
                        transform:
                          "translate(-80px, -40px) rotate(315deg) scale(1.02)",
                        borderColor: `rgba(${theme.palette.primary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.35)`,
                      },
                      "100%": {
                        transform:
                          "translate(0px, 0px) rotate(360deg) scale(1)",
                        borderColor: `rgba(${theme.palette.primary.main
                          .replace("#", "")
                          .match(/.{2}/g)
                          ?.map((x) => parseInt(x, 16))
                          .join(", ")}, 0.3)`,
                      },
                    },
                  }}
                />

                {/* Floating glass card */}
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    background: `linear-gradient(135deg, 
                      ${theme.palette.primary.main}20 0%, 
                      ${theme.palette.secondary.main}20 100%)`,
                    backdropFilter: "blur(15px)",
                    borderRadius: "20px",
                    position: "absolute",
                    border: `1px solid rgba(255, 255, 255, 0.3)`,
                    boxShadow: "0 15px 45px rgba(0, 0, 0, 0.1)",
                    animation: "magicalFloat2 16s ease-in-out infinite reverse",
                    "@keyframes magicalFloat2": {
                      "0%": {
                        transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                        opacity: 0.8,
                      },
                      "12%": {
                        transform:
                          "translate(-90px, 70px) rotate(-30deg) scale(1.15)",
                        opacity: 0.9,
                      },
                      "25%": {
                        transform:
                          "translate(110px, 90px) rotate(45deg) scale(0.85)",
                        opacity: 0.7,
                      },
                      "37%": {
                        transform:
                          "translate(140px, -80px) rotate(120deg) scale(1.1)",
                        opacity: 0.95,
                      },
                      "50%": {
                        transform:
                          "translate(-60px, -120px) rotate(180deg) scale(0.9)",
                        opacity: 0.8,
                      },
                      "62%": {
                        transform:
                          "translate(-140px, -30px) rotate(240deg) scale(1.05)",
                        opacity: 0.85,
                      },
                      "75%": {
                        transform:
                          "translate(40px, -100px) rotate(300deg) scale(1.12)",
                        opacity: 0.9,
                      },
                      "87%": {
                        transform:
                          "translate(80px, 50px) rotate(330deg) scale(0.95)",
                        opacity: 0.75,
                      },
                      "100%": {
                        transform:
                          "translate(0px, 0px) rotate(360deg) scale(1)",
                        opacity: 0.8,
                      },
                    },
                  }}
                />

                {/* Additional floating particle */}
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    background: `radial-gradient(circle, 
                      ${theme.palette.secondary.main}40 0%, 
                      transparent 70%)`,
                    borderRadius: "50%",
                    position: "absolute",
                    animation: "magicalParticle 20s linear infinite",
                    "@keyframes magicalParticle": {
                      "0%": {
                        transform: "translate(200px, -150px) scale(0.5)",
                        opacity: 0.3,
                      },
                      "25%": {
                        transform: "translate(-180px, -80px) scale(1.2)",
                        opacity: 0.8,
                      },
                      "50%": {
                        transform: "translate(-200px, 120px) scale(0.7)",
                        opacity: 0.5,
                      },
                      "75%": {
                        transform: "translate(160px, 150px) scale(1.1)",
                        opacity: 0.9,
                      },
                      "100%": {
                        transform: "translate(200px, -150px) scale(0.5)",
                        opacity: 0.3,
                      },
                    },
                  }}
                />
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
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            width: "30px",
            height: "50px",
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.1) 100%)`,
            backdropFilter: "blur(10px)",
            border: `2px solid rgba(255, 255, 255, 0.3)`,
            borderRadius: "25px",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "6px",
              height: "6px",
              background: `linear-gradient(135deg, 
                ${theme.palette.primary.main} 0%, 
                ${theme.palette.secondary.main} 100%)`,
              borderRadius: "50%",
              animation: "magicalScroll 2s infinite",
              "@keyframes magicalScroll": {
                "0%": {
                  transform: "translateX(-50%) translateY(0)",
                  opacity: 1,
                },
                "100%": {
                  transform: "translateX(-50%) translateY(20px)",
                  opacity: 0,
                },
              },
            },
          }}
        />
      </MotionBox>
    </Box>
  );
};

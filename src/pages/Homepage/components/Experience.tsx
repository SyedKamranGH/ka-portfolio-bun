import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExperienceCard } from "../../../components/Card/ExperienceCard";
import { experiences } from "../../../constants/data/experiences";
import type { Experience } from "../../../types";

const MotionBox = motion(Box);
const MotionTimelineItem = motion(TimelineItem);

export const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleExperienceClick = (experience: Experience) => {
    navigate(`/experience/${experience.id}`);
  };

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 8 },
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
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
              : "linear-gradient(135deg, #0f1419 0%, #1e2a47 100%)",
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
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Professional Experience
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: theme.palette.text.secondary,
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            My journey through various roles and experiences in the tech
            industry
          </Typography>

          <Timeline
            position="alternate"
            sx={{
              "& .MuiTimelineItem-missingOppositeContent:before": {
                display: "none",
              },
            }}
          >
            {experiences.map((experience: Experience, index: number) => (
              <MotionTimelineItem
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineOppositeContent
                  sx={{
                    m: "auto 0",
                    display: { xs: "none", md: "block" },
                    px: 2,
                  }}
                  align={index % 2 === 0 ? "right" : "left"}
                  variant="body2"
                  color="text.secondary"
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "rgba(255, 255, 255, 0.8)"
                          : "rgba(30, 42, 71, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${
                        theme.palette.mode === "light" ? "#e2e8f0" : "#334155"
                      }`,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      {experience.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                      }}
                    >
                      {experience.company}
                    </Typography>
                  </Box>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: theme.palette.background.paper,
                      border: `4px solid ${theme.palette.primary.main}`,
                      width: 20,
                      height: 20,
                      boxShadow: `0 0 0 4px ${
                        theme.palette.mode === "light" ? "#ffffff" : "#1e2a47"
                      }`,
                    }}
                  />
                  {index < experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        width: 4,
                        borderRadius: 2,
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard
                    experience={experience}
                    onClick={() => handleExperienceClick(experience)}
                  />
                </TimelineContent>
              </MotionTimelineItem>
            ))}
          </Timeline>
        </MotionBox>
      </Container>
    </Box>
  );
};

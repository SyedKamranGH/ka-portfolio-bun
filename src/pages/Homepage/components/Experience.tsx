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
// import { ExperienceCard } from "../../../components/Card/ExperienceCard";
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
        py: 8,
        backgroundColor: theme.palette.background.paper,
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
            Professional Experience
          </Typography>

          {/* <Timeline position="alternate">
            {experiencesData.map((experience, index) => (
              <MotionTimelineItem
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align={index % 2 === 0 ? "right" : "left"}
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {experience.duration}
                  </Typography>
                  <Typography variant="body2">{experience.company}</Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderWidth: 3,
                      width: 16,
                      height: 16,
                    }}
                  />
                  {index < experiencesData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 3,
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
          </Timeline> */}
        </MotionBox>
      </Container>
    </Box>
  );
};

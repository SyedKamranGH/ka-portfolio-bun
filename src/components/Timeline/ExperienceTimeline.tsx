import React from "react";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { ExperienceCard } from "../Card/ExperienceCard";
import type { Experience } from "../../types";

const MotionTimelineItem = motion(TimelineItem);
const MotionBox = motion.div;

interface ExperienceTimelineProps {
  experiences: Experience[];
  onExperienceClick?: (experience: Experience) => void;
  className?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  onExperienceClick,
  className = "",
}) => {
  const theme = useTheme();

  return (
    <MuiTimeline
      position="alternate"
      className={`experience-timeline ${className}`}
    >
      {experiences.map((experience, index) => (
        <MotionTimelineItem
          key={experience.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="timeline-item"
        >
          <TimelineSeparator>
            <TimelineDot
              className="timeline-dot"
              sx={{
                bgcolor: theme.palette.background.paper,
                borderColor: theme.palette.primary.main,
                boxShadow: `0 0 0 6px ${
                  theme.palette.mode === "light" ? "#ffffff" : "#1e2a47"
                }`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                },
              }}
            />
            {index < experiences.length - 1 && (
              <TimelineConnector
                className="timeline-connector"
                sx={{
                  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <MotionBox
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <ExperienceCard
                experience={experience}
                onClick={() => onExperienceClick?.(experience)}
              />
            </MotionBox>
          </TimelineContent>
        </MotionTimelineItem>
      ))}
    </MuiTimeline>
  );
};

import React, { useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Avatar,
  Box,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { School, CalendarToday, LocationOn, Grade } from "@mui/icons-material";
import type { Education } from "../../../../types";
import "./EducationCard.scss";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface EducationCardProps {
  education: Education;
  index: number;
  isActive: boolean;
  onCardClick: (index: number) => void;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  index,
  isActive,
  onCardClick,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionBox
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onClick={() => onCardClick(index)}
      className="education-card-wrapper"
    >
      <MotionCard
        className={`education-card ${isActive ? "education-card--active" : ""}`}
      >
        <CardContent className="education-card__content">
          <Stack spacing={2} className="education-card__stack">
            {/* Header */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="flex-start"
              className="education-card__header"
            >
              <Avatar className="education-card__avatar">
                <School />
              </Avatar>
              <Box className="education-card__header-content">
                <Typography variant="h6" className="education-card__title">
                  {education.degree}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="education-card__university"
                >
                  {education.university}
                </Typography>
              </Box>
            </Stack>

            {/* Info */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              className="education-card__info"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className="education-card__info-item"
              >
                <CalendarToday
                  fontSize="small"
                  className="education-card__icon"
                />
                <Typography variant="body2" className="education-card__text">
                  {education.year}
                </Typography>
              </Stack>
              {education.location && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className="education-card__info-item"
                >
                  <LocationOn
                    fontSize="small"
                    className="education-card__icon"
                  />
                  <Typography variant="body2" className="education-card__text">
                    {education.location}
                  </Typography>
                </Stack>
              )}
            </Stack>

            {/* Grade */}
            {education.grade && (
              <Box className="education-card__grade-wrapper">
                <Chip
                  icon={<Grade />}
                  label={education.grade}
                  size="small"
                  className="education-card__grade-chip"
                />
              </Box>
            )}

            {/* Description */}
            {education.description && (
              <Box className="education-card__description-wrapper">
                <Typography
                  variant="body2"
                  className="education-card__description"
                >
                  {education.description}
                </Typography>
              </Box>
            )}
          </Stack>
        </CardContent>
      </MotionCard>
    </MotionBox>
  );
};

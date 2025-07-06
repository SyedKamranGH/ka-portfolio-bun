import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  School,
  CalendarToday,
  LocationOn,
  EmojiEvents,
} from "@mui/icons-material";
import { educationData } from "../../../constants/data/education";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import type { Education } from "../../../types";
import "./Education.scss";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <MotionCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        y: -10,
        boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
      }}
      className={`education-card ${isLightMode ? "light-mode" : "dark-mode"}`}
    >
      <CardContent className="education-card-content">
        <Stack spacing={3}>
          {/* Header with Icon and Title */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Avatar
              className="education-icon"
              sx={{
                bgcolor: `${theme.palette.primary.main}15`,
                color: theme.palette.primary.main,
                width: 60,
                height: 60,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color: "white",
                  transform: "rotate(5deg)",
                },
              }}
            >
              <School fontSize="large" />
            </Avatar>

            <Box className="education-header" sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                component="h3"
                className="education-degree"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                {education.degree}
              </Typography>

              <Typography
                variant="h6"
                className="education-university"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {education.university}
              </Typography>

              <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <CalendarToday
                    fontSize="small"
                    sx={{ color: theme.palette.text.secondary }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {education.year}
                  </Typography>
                </Stack>

                {education.location && (
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <LocationOn
                      fontSize="small"
                      sx={{ color: theme.palette.text.secondary }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {education.location}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Box>
          </Stack>

          {/* Description */}
          {education.description && (
            <Typography
              variant="body1"
              className="education-description"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              {education.description}
            </Typography>
          )}

          {/* Grade Display */}
          {education.grade && (
            <Box className="education-grade">
              <Stack direction="row" spacing={1} alignItems="center">
                <EmojiEvents
                  fontSize="small"
                  sx={{ color: theme.palette.success.main }}
                />
                <Typography variant="body2" color="text.secondary">
                  Grade:
                </Typography>
                <Chip
                  label={education.grade}
                  size="small"
                  sx={{
                    bgcolor: `${theme.palette.success.main}15`,
                    color: theme.palette.success.main,
                    fontWeight: 600,
                    border: `1px solid ${theme.palette.success.main}30`,
                  }}
                />
              </Stack>
            </Box>
          )}
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

export const EducationSection: React.FC = () => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <Box
      component="section"
      id="education"
      className={`education-section ${
        isLightMode ? "light-mode" : "dark-mode"
      }`}
    >
      <Container maxWidth="lg" className="education-container">
        <SectionHeader
          title="Education"
          subtitle="My academic journey and continuous learning path in technology"
          className="education-header"
        />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="education-grid-container"
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {educationData.map((education, index) => (
              <Box key={education.id}>
                <EducationCard education={education} index={index} />
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

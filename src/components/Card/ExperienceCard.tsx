import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  useTheme,
  Avatar,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import type { Experience } from "../../types";

const MotionCard = motion(Card);

interface ExperienceCardProps {
  experience: Experience;
  onClick?: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <MotionCard
      sx={{
        cursor: onClick ? "pointer" : "default",
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
            : "linear-gradient(135deg, #1e2a47 0%, #2d3f62 100%)",
        border: `1px solid ${
          theme.palette.mode === "light" ? "#e2e8f0" : "#334155"
        }`,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        },
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 12px 40px rgba(30, 58, 138, 0.15)"
              : "0 12px 40px rgba(74, 54, 106, 0.25)",
        },
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 48,
              height: 48,
              mr: 2,
            }}
          >
            <WorkIcon />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 0.5,
              }}
            >
              {experience.jobRole}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                mb: 1,
              }}
            >
              {experience.company}
            </Typography>
          </Box>
        </Box>

        {/* Duration and Location */}
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarTodayIcon
              sx={{
                fontSize: 16,
                color: theme.palette.text.secondary,
                mr: 0.5,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {experience.duration}
            </Typography>
          </Box>
          {experience.location && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon
                sx={{
                  fontSize: 16,
                  color: theme.palette.text.secondary,
                  mr: 0.5,
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {experience.location}
              </Typography>
            </Box>
          )}
        </Stack>

        {/* Summary */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.primary,
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          {experience.summary}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Key Highlights */}
        {experience.keyHighlights && experience.keyHighlights.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 1,
              }}
            >
              Key Highlights:
            </Typography>
            <Stack spacing={0.5}>
              {experience.keyHighlights.slice(0, 3).map((highlight, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.875rem",
                    "&::before": {
                      content: '"• "',
                      color: theme.palette.secondary.main,
                      fontWeight: "bold",
                    },
                  }}
                >
                  {highlight}
                </Typography>
              ))}
            </Stack>
          </Box>
        )}

        {/* Skills */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 1,
            }}
          >
            Key Skills:
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            {experience.skills.slice(0, 5).map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  bgcolor:
                    theme.palette.mode === "light" ? "#f1f5f9" : "#334155",
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                  },
                }}
              />
            ))}
            {experience.skills.length > 5 && (
              <Chip
                label={`+${experience.skills.length - 5} more`}
                size="small"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            )}
          </Stack>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

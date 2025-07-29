import React, { useState } from "react";
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
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BusinessIcon from "@mui/icons-material/Business";
import type { Experience } from "../../types";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

interface ExperienceCardProps {
  experience: Experience;
  onClick?: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onClick,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionCard
      sx={{
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        textAlign: "left", // Ensure left alignment
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
          transform: "translateY(-4px)",
          boxShadow:
            theme.customShadows?.md || "0 8px 30px rgba(0, 0, 0, 0.15)",
          borderColor: theme.palette.primary.main,
        },
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent sx={{ p: 3, textAlign: "left" }}>
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
          <Box sx={{ flex: 1, textAlign: "left" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 0.5,
                textAlign: "left",
              }}
            >
              {experience.jobRole}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <BusinessIcon
                sx={{
                  fontSize: 16,
                  color: theme.palette.text.secondary,
                  mr: 0.5,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
                {experience.company}
              </Typography>
            </Box>
          </Box>
          <IconButton
            size="small"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              opacity: isHovered ? 1 : 0.7,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: theme.palette.primary.dark,
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Duration and Location */}
        <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarTodayIcon
              sx={{
                fontSize: 16,
                color: theme.palette.secondary.main,
                mr: 0.5,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              {experience.duration}
            </Typography>
          </Box>
          {experience.location && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon
                sx={{
                  fontSize: 16,
                  color: theme.palette.secondary.main,
                  mr: 0.5,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
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
            textAlign: "left",
          }}
        >
          {experience.summary}
        </Typography>

        {/* Tech Stack */}
        <Box sx={{ mb: isHovered ? 2 : 0 }}>
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            {experience.skills.slice(0, 5).map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  bgcolor: theme.palette.action.hover,
                  color: theme.palette.text.secondary,
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
                label={`+${experience.skills.length - 5}`}
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

        {/* Expandable Content - Visible on Hover */}
        <AnimatePresence>
          {isHovered && (
            <MotionBox
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              sx={{ overflow: "hidden" }}
            >
              <Divider sx={{ my: 2 }} />

              {/* Key Highlights */}
              {experience.keyHighlights &&
                experience.keyHighlights.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 1,
                        textAlign: "left",
                      }}
                    >
                      Key Highlights:
                    </Typography>
                    <Stack spacing={0.5}>
                      {experience.keyHighlights.map((highlight, index) => (
                        <MotionBox
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: "0.875rem",
                              textAlign: "left",
                              "&::before": {
                                content: '"• "',
                                color: theme.palette.secondary.main,
                                fontWeight: "bold",
                              },
                            }}
                          >
                            {highlight}
                          </Typography>
                        </MotionBox>
                      ))}
                    </Stack>
                  </Box>
                )}

              {/* Additional Skills */}
              {experience.skills.length > 5 && (
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: 1,
                      textAlign: "left",
                    }}
                  >
                    Additional Skills:
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.5}>
                    {experience.skills.slice(5).map((skill, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <Chip
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.action.hover,
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            fontSize: "0.75rem",
                          }}
                        />
                      </MotionBox>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Hover Indicator */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                  pt: 2,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Click to view full details
                  <ArrowForwardIcon sx={{ ml: 1, fontSize: 16 }} />
                </Typography>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>

        {/* Hover Indicator When Not Hovered */}
        {!isHovered && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              opacity: 0.6,
            }}
          >
            <ExpandMoreIcon
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 20,
                animation: "bounce 2s infinite",
                "@keyframes bounce": {
                  "0%, 20%, 50%, 80%, 100%": {
                    transform: "translateY(0)",
                  },
                  "40%": {
                    transform: "translateY(-5px)",
                  },
                  "60%": {
                    transform: "translateY(-3px)",
                  },
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "0.75rem",
                ml: 1,
              }}
            >
              Hover to expand
            </Typography>
          </Box>
        )}
      </CardContent>
    </MotionCard>
  );
};

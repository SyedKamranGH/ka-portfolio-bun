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
  Fade,
  Collapse,
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
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
          transform: "translateY(-8px) scale(1.02)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 20px 60px rgba(30, 58, 138, 0.2)"
              : "0 20px 60px rgba(74, 54, 106, 0.3)",
          "& .view-details-btn": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent sx={{ p: 3, position: "relative" }}>
        {/* View Details Button */}
        <Box
          className="view-details-btn"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            opacity: 0,
            transform: "scale(0.8)",
            transition: "all 0.3s ease",
            zIndex: 2,
          }}
        >
          <IconButton
            size="small"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                bgcolor: theme.palette.primary.dark,
                transform: "rotate(45deg)",
              },
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Compact Header - Always Visible */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 48,
              height: 48,
              mr: 2,
              transition: "all 0.3s ease",
              ...(isHovered && {
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                transform: "rotate(5deg)",
              }),
            }}
          >
            <WorkIcon />
          </Avatar>
          <Box sx={{ flex: 1, pr: 6 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 0.5,
                transition: "all 0.3s ease",
                ...(isHovered && {
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }),
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
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                }}
              >
                {experience.company}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Duration and Location - Always Visible */}
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
                }}
              >
                {experience.location}
              </Typography>
            </Box>
          )}
        </Stack>

        {/* Tech Stack - Always Visible */}
        <Box sx={{ mb: isHovered ? 2 : 0 }}>
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            {experience.skills.slice(0, 4).map((skill, index) => (
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
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    transform: "translateY(-2px)",
                  },
                }}
              />
            ))}
            {experience.skills.length > 4 && (
              <Chip
                label={`+${experience.skills.length - 4}`}
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
                      }}
                    >
                      Key Highlights:
                    </Typography>
                    <Stack spacing={0.5}>
                      {experience.keyHighlights
                        .slice(0, 3)
                        .map((highlight, index) => (
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

              {/* Additional Tech Stack */}
              {experience.skills.length > 4 && (
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    Additional Skills:
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.5}>
                    {experience.skills.slice(4).map((skill, index) => (
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
                            bgcolor:
                              theme.palette.mode === "light"
                                ? "#f1f5f9"
                                : "#334155",
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            fontSize: "0.75rem",
                            "&:hover": {
                              bgcolor: theme.palette.secondary.main,
                              color: theme.palette.secondary.contrastText,
                            },
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

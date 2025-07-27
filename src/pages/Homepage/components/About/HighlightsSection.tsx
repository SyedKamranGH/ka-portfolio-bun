import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme as useCustomTheme } from "../../../../context/ThemeContext";
import { highlights } from "../../../../constants/data/about";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Helper function to get CSS class name from title
const getHighlightClassName = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const HighlightsSection: React.FC = () => {
  const { isDarkMode } = useCustomTheme();

  return (
    <Box className="about-highlights-section">
      <MotionBox
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        sx={{ height: "100%" }}
      >
        <Box
          className={`highlights-grid ${
            isDarkMode ? "theme-dark" : "theme-light"
          }`}
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            const highlightClass = getHighlightClassName(highlight.title);

            return (
              <MotionCard
                key={index}
                className={`highlight-card ${highlightClass} ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CardContent className="highlight-content">
                  <Box
                    className="highlight-icon"
                    sx={{
                      color: highlight.color,
                      backgroundColor: `${highlight.color}15`,
                    }}
                  >
                    <IconComponent sx={{ fontSize: "1.8rem" }} />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    className="highlight-title"
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="highlight-description"
                  >
                    {highlight.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            );
          })}
        </Box>
      </MotionBox>
    </Box>
  );
};

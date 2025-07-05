import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { highlights } from "../../../../constants/data/about";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Helper function to get CSS class name from title
const getHighlightClassName = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const HighlightsSection: React.FC = () => {
  return (
    <Box className="about-highlights-section">
      <MotionBox
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        sx={{ height: "100%" }}
      >
        <Box className="highlights-grid">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            const highlightClass = getHighlightClassName(highlight.title);

            return (
              <MotionCard
                key={index}
                className={`highlight-card ${highlightClass}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CardContent className="highlight-content">
                  <Box className="highlight-icon">
                    <IconComponent />
                  </Box>
                  <Typography
                    variant="h6"
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

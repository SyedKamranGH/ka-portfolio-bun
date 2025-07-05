import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { achievements } from "../../../../constants/data/about";

const MotionBox = motion(Box);

export const AchievementsSection: React.FC = () => {
  return (
    <Box className="about-achievements">
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          component="h3"
          color="text.primary"
          className="achievements-title"
        >
          Key Achievements
        </Typography>

        <Box className="achievements-grid">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="achievement-card">
                  <CardContent className="achievement-content">
                    <Box className="achievement-icon">
                      <IconComponent />
                    </Box>
                    <Typography
                      variant="h3"
                      color="primary"
                      className="achievement-number"
                    >
                      {achievement.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      className="achievement-title"
                    >
                      {achievement.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="achievement-description"
                    >
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            );
          })}
        </Box>
      </MotionBox>
    </Box>
  );
};

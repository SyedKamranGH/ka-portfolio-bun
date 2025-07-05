import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface CallToActionProps {
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  className = "",
  delay = 0.5,
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`experience-cta ${
        isLightMode ? "light-mode" : "dark-mode"
      } ${className}`}
    >
      <Typography
        variant="h6"
        className="cta-title"
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        className="cta-subtitle"
        sx={{
          color: theme.palette.text.secondary,
        }}
      >
        {subtitle}
      </Typography>
    </MotionBox>
  );
};

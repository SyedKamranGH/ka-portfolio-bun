import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "h2" | "h3" | "h4";
  centerAlign?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = "",
  variant = "h3",
  centerAlign = true,
}) => {
  const theme = useTheme();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`section-header ${className}`}
      sx={{
        textAlign: centerAlign ? "center" : "left",
        mb: 8,
        ...(centerAlign && { mx: "auto" }),
      }}
    >
      <Typography
        variant={variant}
        component="h2"
        className="section-title"
        sx={{
          fontWeight: 700,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="h6"
          className="section-subtitle"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: "600px",
            ...(centerAlign && { mx: "auto" }),
          }}
        >
          {subtitle}
        </Typography>
      )}
    </MotionBox>
  );
};

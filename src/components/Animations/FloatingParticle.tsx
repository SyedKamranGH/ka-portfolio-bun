import React from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";

const MotionBox = motion(Box);

interface FloatingParticleProps {
  size?: number;
  delay?: number;
  x: string;
  y: string;
  className?: string;
}

export const FloatingParticle: React.FC<FloatingParticleProps> = ({
  size = 4,
  delay = 0,
  x,
  y,
  className = "",
}) => {
  const theme = useTheme();

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.5, 1.4, 0.5],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`floating-particle ${className}`}
      sx={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        boxShadow: `0 0 ${size * 2}px ${theme.palette.primary.main}`,
      }}
    />
  );
};

import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const MotionBox = motion(Box);

interface TechIconProps {
  icon: string;
  delay?: number;
  duration?: number;
  x?: string;
  y?: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  icon,
  delay = 0,
  duration = 8,
  x = "50%",
  y = "50%",
  className = "",
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 50, rotate: 0 }}
    animate={{
      opacity: [0.6, 1, 0.6],
      y: [-20, -60, -20],
      rotate: [0, 360, 0],
      x: [-15, 15, -15],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`tech-icon ${className}`}
    sx={{
      left: x,
      top: y,
      color: "primary.main",
    }}
  >
    {icon}
  </MotionBox>
);

import React from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";

const MotionBox = motion(Box);

interface AnimatedLineProps {
  position: Record<string, string | undefined>;
  svg: { width: number; height: number };
  path: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  useSecondaryColor?: boolean;
  className?: string;
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  position,
  svg,
  path,
  strokeWidth = 3,
  duration = 4,
  delay = 0,
  useSecondaryColor = false,
  className = "",
}) => {
  const theme = useTheme();
  const strokeColor = useSecondaryColor
    ? theme.palette.secondary.main
    : theme.palette.primary.main;

  // Filter out undefined values from position
  const cleanPosition = Object.fromEntries(
    Object.entries(position).filter(([_, value]) => value !== undefined)
  );

  return (
    <MotionBox
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`animated-line ${className}`}
      sx={cleanPosition}
    >
      <svg width={svg.width} height={svg.height}>
        <motion.path
          d={path}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: duration + 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
    </MotionBox>
  );
};

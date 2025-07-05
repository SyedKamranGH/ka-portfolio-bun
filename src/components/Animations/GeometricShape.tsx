import React from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";

const MotionBox = motion(Box);

type ShapeType = "circle" | "square" | "roundedSquare" | "gradientCircle";

interface GeometricShapeProps {
  type: ShapeType;
  size: number;
  position: Record<string, string | undefined>;
  animation: {
    rotate: number[];
    scale: number[];
    duration: number;
  };
  className?: string;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  type,
  size,
  position,
  animation,
  className = "",
}) => {
  const theme = useTheme();

  // Filter out undefined values from position
  const cleanPosition = Object.fromEntries(
    Object.entries(position).filter(([_, value]) => value !== undefined)
  );

  const getShapeStyles = () => {
    const baseStyles = {
      width: size,
      height: size,
      ...cleanPosition,
    };

    switch (type) {
      case "circle":
        return {
          ...baseStyles,
          borderColor: theme.palette.primary.main,
        };
      case "square":
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        };
      case "roundedSquare":
        return {
          ...baseStyles,
          borderColor: theme.palette.secondary.main,
        };
      case "gradientCircle":
        return {
          ...baseStyles,
          background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
        };
      default:
        return baseStyles;
    }
  };

  return (
    <MotionBox
      animate={{
        rotate: animation.rotate,
        scale: animation.scale,
      }}
      transition={{
        duration: animation.duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`geometric-shape ${type} ${className}`}
      sx={getShapeStyles()}
    />
  );
};

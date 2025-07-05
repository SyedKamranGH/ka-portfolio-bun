import React from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";

const MotionBox = motion(Box);

interface CodeSnippetProps {
  text: string;
  delay?: number;
  x: string;
  y: string;
  className?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  text,
  delay = 0,
  x,
  y,
  className = "",
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.5, 0.9, 0.5],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`code-snippet ${
        isLightMode ? "light-mode" : "dark-mode"
      } ${className}`}
      sx={{
        left: x,
        top: y,
        color: theme.palette.secondary.main,
      }}
    >
      {text}
    </MotionBox>
  );
};

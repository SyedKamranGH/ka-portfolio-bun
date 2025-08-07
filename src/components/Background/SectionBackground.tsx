import React from "react";
import { Box, useTheme } from "@mui/material";

interface SectionBackgroundProps {
  variant?: "gradient" | "minimal" | "solid";
  opacity?: number;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  variant = "gradient",
  opacity = 0.5,
}) => {
  const theme = useTheme();

  const getBackgroundStyles = () => {
    const isDark = theme.palette.mode === "dark";
    const { primary, secondary } = theme.palette;

    // Single unified color scheme for the entire application background
    const globalColors = {
      light: {
        primary: primary, // "#1E3A8A", // Navy Blue (can be adjusted if not used)
        secondary: secondary, // "#8B5CF6", // Lilac (can be adjusted if not used)
        accent: "#3B82F6", // Light Blue (can be adjusted if not used)
        bgGradient: ["#F5FAFF", "#EAE0FE"], // Whispering Blue-Violet
      },
      dark: {
        primary: primary, // "#1E2A47", // Dark Navy (can be adjusted if not used)
        secondary: secondary, // "#4A366A", // Dark Lilac (can be adjusted if not used)
        accent: "#A78BFA", // Light Lilac (can be adjusted if not used)
        bgGradient: ["#0F1419", "#1A1F26"], // Dark Blue-Grey
      },
    };

    const currentColors = isDark ? globalColors.dark : globalColors.light;

    // Variant-specific styling
    switch (variant) {
      case "gradient":
        return {
          background: `linear-gradient(to bottom, ${currentColors.bgGradient[0]}, ${currentColors.bgGradient[1]})`,
          "&::before": {
            // These still use primary/secondary for a subtle overlay, adjust if not desired
            background: `linear-gradient(135deg, ${currentColors.primary}05 0%, ${currentColors.secondary}03 100%)`,
          },
        };

      case "minimal":
        return {
          background: `
            linear-gradient(135deg, ${currentColors.primary}03 0%, ${currentColors.secondary}02 50%, transparent 100%)
          `,
          "&::before": {
            background: `radial-gradient(circle at 50% 50%, ${currentColors.accent}02 0%, transparent 70%)`,
          },
        };

      case "solid":
        return {
          backgroundColor: currentColors.bgGradient[0], // Uses the start color of the gradient
          "&::before": {
            background: `
              radial-gradient(circle at 30% 30%, ${currentColors.primary}08 0%, transparent 40%),
              radial-gradient(circle at 70% 70%, ${currentColors.secondary}06 0%, transparent 40%)
            `,
          },
        };

      default:
        return {
          background: "transparent",
        };
    }
  };

  return (
    <Box
      className={`section-background ${variant}-variant`} // Removed section-specific class
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        opacity: opacity,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        },
        ...getBackgroundStyles(),
      }}
    />
  );
};

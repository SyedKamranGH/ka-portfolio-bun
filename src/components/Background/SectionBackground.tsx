import React from "react";
import { Box, useTheme } from "@mui/material";

interface SectionBackgroundProps {
  section:
    | "about"
    | "education"
    | "skills"
    | "experience"
    | "projects"
    | "contact";
  variant?: "gradient" | "minimal" | "solid";
  opacity?: number;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  section,
  variant = "gradient",
  opacity = 0.5,
}) => {
  const theme = useTheme();

  const getBackgroundStyles = () => {
    const isDark = theme.palette.mode === "dark";

    // Base positioning
    const baseStyles = {
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      pointerEvents: "none" as const,
      opacity: opacity,
    };

    // Section-specific color schemes using established theme
    const getSectionColors = () => {
      const colors = {
        about: {
          light: {
            primary: "#1E3A8A", // Navy Blue
            secondary: "#8B5CF6", // Lilac
            accent: "#3B82F6", // Light Blue
            bg: "#F8FAFC", // Light background
          },
          dark: {
            primary: "#1E2A47", // Dark Navy
            secondary: "#4A366A", // Dark Lilac
            accent: "#A78BFA", // Light Lilac
            bg: "#0F1419", // Dark background
          },
        },
        education: {
          light: {
            primary: "#059669", // Success Green
            secondary: "#1E3A8A", // Navy
            accent: "#10B981",
            bg: "#F0FDF4",
          },
          dark: {
            primary: "#10B981",
            secondary: "#1E2A47",
            accent: "#34D399",
            bg: "#0F1B0F",
          },
        },
        skills: {
          light: {
            primary: "#3B82F6", // Info Blue
            secondary: "#8B5CF6", // Lilac
            accent: "#60A5FA",
            bg: "#EFF6FF",
          },
          dark: {
            primary: "#A78BFA",
            secondary: "#4A366A",
            accent: "#C4B5FD",
            bg: "#1E1B3A",
          },
        },
        experience: {
          light: {
            primary: "#D97706", // Warning Orange
            secondary: "#1E3A8A", // Navy
            accent: "#F59E0B",
            bg: "#FFFBEB",
          },
          dark: {
            primary: "#F59E0B",
            secondary: "#1E2A47",
            accent: "#FBBF24",
            bg: "#1F1611",
          },
        },
        projects: {
          light: {
            primary: "#8B5CF6", // Lilac
            secondary: "#1E3A8A", // Navy
            accent: "#A78BFA",
            bg: "#FAF5FF",
          },
          dark: {
            primary: "#4A366A",
            secondary: "#1E2A47",
            accent: "#6B46C1",
            bg: "#1A1625",
          },
        },
        contact: {
          light: {
            primary: "#DC2626", // Error Red
            secondary: "#8B5CF6", // Lilac
            accent: "#EF4444",
            bg: "#FEF2F2",
          },
          dark: {
            primary: "#EF4444",
            secondary: "#4A366A",
            accent: "#F87171",
            bg: "#1F1012",
          },
        },
      };

      return isDark ? colors[section].dark : colors[section].light;
    };

    const sectionColors = getSectionColors();

    // Variant-specific styling
    switch (variant) {
      case "gradient":
        return {
          ...baseStyles,
          background: `
            radial-gradient(circle at 20% 20%, ${
              sectionColors.primary
            }15 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${
              sectionColors.secondary
            }12 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, ${
              sectionColors.accent
            }08 0%, transparent 50%),
            linear-gradient(135deg, ${sectionColors.bg} 0%, ${
            isDark ? "#0A0E13" : "#FAFBFC"
          } 100%)
          `,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${sectionColors.primary}05 0%, ${sectionColors.secondary}03 100%)`,
            zIndex: 1,
          },
        };

      case "minimal":
        return {
          ...baseStyles,
          background: `
            linear-gradient(135deg, ${sectionColors.primary}03 0%, ${sectionColors.secondary}02 50%, transparent 100%)
          `,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 50%, ${sectionColors.accent}02 0%, transparent 70%)`,
            zIndex: 1,
          },
        };

      case "solid":
        return {
          ...baseStyles,
          backgroundColor: sectionColors.bg,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 30% 30%, ${sectionColors.primary}08 0%, transparent 40%),
              radial-gradient(circle at 70% 70%, ${sectionColors.secondary}06 0%, transparent 40%)
            `,
            zIndex: 1,
          },
        };

      default:
        return {
          ...baseStyles,
          background: "transparent",
        };
    }
  };

  return (
    <Box
      className={`section-background ${section}-bg ${variant}-variant`}
      sx={getBackgroundStyles()}
    />
  );
};

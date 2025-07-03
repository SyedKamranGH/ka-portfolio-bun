import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 500,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontSize: "0.875rem",
          fontWeight: 500,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#1E3A8A", // Navy Blue
      light: "#3B82F6",
      dark: "#1E40AF",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8B5CF6", // Lilac
      light: "#A78BFA",
      dark: "#7C3AED",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F8FAFC", // Light blue-gray
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E3A8A", // Navy Blue for text
      secondary: "#64748B", // Slate gray
    },
    grey: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
    },
    info: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
  },
  components: {
    ...commonTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 2px 20px rgba(30, 58, 138, 0.15)",
          borderBottom: "1px solid rgba(30, 58, 138, 0.2)",
          color: "#1E3A8A",

          "& .MuiToolbar-root": {
            color: "#1E3A8A",
          },
          "& .MuiButton-root": {
            color: "#1E3A8A",
            "&:hover": {
              backgroundColor: "rgba(30, 58, 138, 0.1)",
            },
          },
          "& .MuiIconButton-root": {
            color: "#1E3A8A",
            "&:hover": {
              backgroundColor: "rgba(30, 58, 138, 0.1)",
            },
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#1E2A47", // Dark Navy Blue
      light: "#2D3F62",
      dark: "#0F1419",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4A366A", // Dark Lilac
      light: "#6B46C1",
      dark: "#3B2F5F",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0F1419", // Very dark navy
      paper: "#1E2A47", // Dark navy blue for cards/papers
    },
    text: {
      primary: "#F1F5F9", // Light text
      secondary: "#A78BFA", // Light lilac for secondary text
    },
    grey: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
    },
    info: {
      main: "#A78BFA",
      light: "#C4B5FD",
      dark: "#8B5CF6",
    },
  },
  components: {
    ...commonTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(30, 42, 71, 0.95)",
          boxShadow: "0 2px 20px rgba(74, 54, 106, 0.3)",
          borderBottom: "1px solid rgba(74, 54, 106, 0.3)",
          color: "#F1F5F9",

          "& .MuiToolbar-root": {
            color: "#F1F5F9",
          },
          "& .MuiButton-root": {
            color: "#F1F5F9",
            "&:hover": {
              backgroundColor: "rgba(167, 139, 250, 0.2)",
            },
          },
          "& .MuiIconButton-root": {
            color: "#F1F5F9",
            "&:hover": {
              backgroundColor: "rgba(167, 139, 250, 0.2)",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(74, 54, 106, 0.15)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(74, 54, 106, 0.25)",
          },
        },
      },
    },
  },
});

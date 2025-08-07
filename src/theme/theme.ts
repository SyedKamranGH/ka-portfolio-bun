import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

// Custom theme interfaces for additional properties
declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    animations: {
      transitions: {
        fast: string;
        normal: string;
        slow: string;
      };
      easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
      };
    };
    layout: {
      containerMaxWidth: {
        section: string;
        content: string;
      };
    };
  }

  interface ThemeOptions {
    customShadows?: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    animations?: {
      transitions: {
        fast: string;
        normal: string;
        slow: string;
      };
      easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
      };
    };
    layout?: {
      containerMaxWidth: {
        section: string;
        content: string;
      };
    };
  }

  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
    sectionSubtitle: React.CSSProperties;
    cardTitle: React.CSSProperties;
    cardSubtitle: React.CSSProperties;
    skillLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
    sectionSubtitle?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    cardSubtitle?: React.CSSProperties;
    skillLabel?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
    sectionSubtitle: true;
    cardTitle: true;
    cardSubtitle: true;
    skillLabel: true;
  }
}

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      // Responsive font size
      [createTheme().breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
      [createTheme().breakpoints.down("md")]: {
        fontSize: "1.35rem",
      },
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
    // Custom typography variants
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      textAlign: "center",
      marginBottom: "1rem",
    },
    sectionSubtitle: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    cardSubtitle: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    skillLabel: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.2,
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
  // Custom theme properties
  customShadows: {
    xs: "0 2px 8px rgba(0, 0, 0, 0.06)",
    sm: "0 4px 20px rgba(0, 0, 0, 0.08)",
    md: "0 8px 30px rgba(0, 0, 0, 0.15)",
    lg: "0 12px 40px rgba(0, 0, 0, 0.2)",
    xl: "0 16px 50px rgba(0, 0, 0, 0.25)",
  },
  animations: {
    transitions: {
      fast: "0.2s ease-in-out",
      normal: "0.3s ease-in-out",
      slow: "0.6s ease-out",
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    },
  },
  layout: {
    containerMaxWidth: {
      section: "xl",
      content: "lg",
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  components: {
    // Global overrides
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "*": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      },
    },
    // Container overrides
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (max-width:600px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
    // Button overrides
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
        contained: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    // Card overrides
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    // Chip overrides
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
        outlined: {
          borderWidth: "1px",
        },
      },
    },
    // Paper overrides
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    // Typography overrides
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.section-title": {
            background: "linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
      },
    },
    // Tab overrides
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            height: 3,
            borderRadius: "3px 3px 0 0",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          minHeight: 48,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            opacity: 0.8,
          },
        },
      },
    },
    // Timeline overrides
    // MuiTimelineDot: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    //     },
    //   },
    // },
    // Accordion overrides
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "12px !important",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "16px 0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "&.Mui-expanded": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },
    },
    // List overrides
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 4,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.04)",
          },
        },
      },
    },
    // Drawer overrides
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
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
      // bgGradient: ["#F5FAFF", "#EAE0FE"], // Whispering Blue-Violet
      // accent: "#3B82F6", // Light Blue
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
    action: {
      hover: "rgba(30, 58, 138, 0.04)",
      selected: "rgba(30, 58, 138, 0.08)",
      disabled: "rgba(100, 116, 139, 0.5)",
      disabledBackground: "rgba(100, 116, 139, 0.12)",
    },
  },
  components: {
    ...commonTheme.components,
    // Light-specific overrides
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease-in-out",
          border: "1px solid rgba(226, 232, 240, 0.5)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            borderColor: "rgba(30, 58, 138, 0.1)",
          },
        },
      },
    },
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
            boxShadow: "0 8px 25px rgba(30, 58, 138, 0.25)",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor: "#1E3A8A",
            height: 3,
            borderRadius: "3px 3px 0 0",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#64748B",
          "&.Mui-selected": {
            color: "#1E3A8A",
          },
          "&:hover": {
            color: "#1E3A8A",
            opacity: 0.8,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          "&.Mui-expanded": {
            borderColor: "#1E3A8A",
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
    action: {
      hover: "rgba(167, 139, 250, 0.08)",
      selected: "rgba(167, 139, 250, 0.12)",
      disabled: "rgba(241, 245, 249, 0.3)",
      disabledBackground: "rgba(241, 245, 249, 0.12)",
    },
    divider: "rgba(167, 139, 250, 0.12)",
  },
  components: {
    ...commonTheme.components,
    // Dark-specific overrides
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          overflow: "auto",
          backgroundColor: "#0F1419",
          "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "*": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(74, 54, 106, 0.15)",
          transition: "all 0.3s ease-in-out",
          backgroundColor: "#1E2A47",
          border: "1px solid rgba(74, 54, 106, 0.2)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(74, 54, 106, 0.25)",
            borderColor: "rgba(167, 139, 250, 0.3)",
          },
        },
      },
    },
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
            boxShadow: "0 8px 25px rgba(74, 54, 106, 0.4)",
          },
        },
        contained: {
          boxShadow: "0 4px 20px rgba(74, 54, 106, 0.2)",
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor: "#A78BFA",
            height: 3,
            borderRadius: "3px 3px 0 0",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#94A3B8",
          "&.Mui-selected": {
            color: "#A78BFA",
          },
          "&:hover": {
            color: "#A78BFA",
            opacity: 0.8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#1E2A47",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E2A47",
          border: "1px solid rgba(74, 54, 106, 0.2)",
          borderRadius: "12px !important",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            borderColor: "#A78BFA",
            margin: "16px 0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "&.Mui-expanded": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 4,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(167, 139, 250, 0.08)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.section-title": {
            background: "linear-gradient(135deg, #A78BFA 0%, #6B46C1 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
          backgroundColor: "#1E2A47",
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
        outlined: {
          borderWidth: "1px",
          borderColor: "rgba(167, 139, 250, 0.3)",
        },
      },
    },
    // MuiTimelineDot: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: "0 4px 12px rgba(74, 54, 106, 0.3)",
    //     },
    //   },
    // },
  },
});

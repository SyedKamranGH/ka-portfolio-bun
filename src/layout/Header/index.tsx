import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useScrollTrigger,
  Slide,
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  LightMode,
  DarkMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../../context/ThemeContext";
import { useScroll } from "../../hooks/useScroll";
import type { NavigationItem } from "../../types";
import "./styles.scss";

interface HeaderProps {
  navigations: NavigationItem[];
  onNavigationClick: (id: string) => void;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header: React.FC<HeaderProps> = ({
  navigations,
  onNavigationClick,
}) => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = (id: string) => {
    onNavigationClick(id);
    setMobileOpen(false);
  };

  const NavigationButtons = () => (
    <Stack direction="row" spacing={2} alignItems="center">
      {navigations.map((nav) => (
        <Button
          key={nav.id}
          onClick={() => onNavigationClick(nav.id)}
          color="inherit"
          className="nav-button"
          sx={{
            fontWeight: 600,
            textTransform: "capitalize",
            color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
            borderRadius: "24px",
            padding: "10px 20px",
            background: isDarkMode
              ? "rgba(167, 139, 250, 0.2)"
              : "rgba(30, 58, 138, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1.5px solid ${
              isDarkMode ? "rgba(167, 139, 250, 0.4)" : "rgba(30, 58, 138, 0.3)"
            }`,
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
            textShadow: isDarkMode
              ? "0 1px 2px rgba(0, 0, 0, 0.3)"
              : "0 1px 2px rgba(255, 255, 255, 0.8)",
            "&:hover": {
              backgroundColor: isDarkMode
                ? "rgba(167, 139, 250, 0.35)"
                : "rgba(30, 58, 138, 0.25)",
              transform: "translateY(-2px)",
              boxShadow: isDarkMode
                ? "0 8px 25px rgba(167, 139, 250, 0.4)"
                : "0 8px 25px rgba(30, 58, 138, 0.3)",
              border: `1.5px solid ${
                isDarkMode
                  ? "rgba(167, 139, 250, 0.6)"
                  : "rgba(30, 58, 138, 0.5)"
              }`,
            },
          }}
        >
          {nav.label}
        </Button>
      ))}
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label="toggle theme"
        className="theme-toggle"
        sx={{
          color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
          background: isDarkMode
            ? "rgba(167, 139, 250, 0.2)"
            : "rgba(30, 58, 138, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: `1.5px solid ${
            isDarkMode ? "rgba(167, 139, 250, 0.4)" : "rgba(30, 58, 138, 0.3)"
          }`,
          width: 48,
          height: 48,
          "&:hover": {
            backgroundColor: isDarkMode
              ? "rgba(167, 139, 250, 0.35)"
              : "rgba(30, 58, 138, 0.25)",
            transform: "scale(1.1) rotate(180deg)",
            boxShadow: isDarkMode
              ? "0 8px 25px rgba(167, 139, 250, 0.4)"
              : "0 8px 25px rgba(30, 58, 138, 0.3)",
            border: `1.5px solid ${
              isDarkMode ? "rgba(167, 139, 250, 0.6)" : "rgba(30, 58, 138, 0.5)"
            }`,
          },
        }}
      >
        {isDarkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Stack>
  );

  const MobileDrawer = () => (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 300,
          backgroundColor: isDarkMode
            ? "rgba(30, 42, 71, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
          border: `1px solid ${
            isDarkMode ? "rgba(167, 139, 250, 0.2)" : "rgba(30, 58, 138, 0.2)"
          }`,
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            pb: 2,
            borderBottom: `1px solid ${
              isDarkMode ? "rgba(167, 139, 250, 0.2)" : "rgba(30, 58, 138, 0.2)"
            }`,
          }}
        >
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle theme"
            sx={{
              color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
              background: isDarkMode
                ? "rgba(167, 139, 250, 0.2)"
                : "rgba(30, 58, 138, 0.15)",
              "&:hover": {
                backgroundColor: isDarkMode
                  ? "rgba(167, 139, 250, 0.3)"
                  : "rgba(30, 58, 138, 0.25)",
              },
            }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="close menu"
            sx={{
              color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
              background: isDarkMode
                ? "rgba(167, 139, 250, 0.2)"
                : "rgba(30, 58, 138, 0.15)",
              "&:hover": {
                backgroundColor: isDarkMode
                  ? "rgba(167, 139, 250, 0.3)"
                  : "rgba(30, 58, 138, 0.25)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigations.map((nav) => (
            <ListItem key={nav.id} disablePadding>
              <ListItemButton
                onClick={() => handleMobileNavClick(nav.id)}
                sx={{
                  borderRadius: 3,
                  mb: 1.5,
                  p: 2,
                  background: isDarkMode
                    ? "rgba(167, 139, 250, 0.1)"
                    : "rgba(30, 58, 138, 0.08)",
                  border: `1px solid ${
                    isDarkMode
                      ? "rgba(167, 139, 250, 0.2)"
                      : "rgba(30, 58, 138, 0.15)"
                  }`,
                  "&:hover": {
                    backgroundColor: isDarkMode
                      ? "rgba(167, 139, 250, 0.2)"
                      : "rgba(30, 58, 138, 0.15)",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <ListItemText
                  primary={nav.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
                      letterSpacing: "0.5px",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="absolute"
        className="header floating-glass"
        sx={{
          zIndex: theme.zIndex.appBar + 1,
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          maxWidth: "1000px",
          borderRadius: 6,

          // Enhanced Glassmorphism styling
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          background: isDarkMode
            ? "rgba(30, 42, 71, 0.25)"
            : "rgba(255, 255, 255, 0.25)",
          border: `1px solid ${
            isDarkMode ? "rgba(167, 139, 250, 0.3)" : "rgba(30, 58, 138, 0.2)"
          }`,

          // Enhanced shadows for glass effect
          boxShadow: isDarkMode
            ? `
              0 8px 32px rgba(74, 54, 106, 0.4),
              0 4px 16px rgba(74, 54, 106, 0.2),
              inset 0 1px 0 rgba(167, 139, 250, 0.2)
            `
            : `
              0 8px 32px rgba(0, 0, 0, 0.15),
              0 4px 16px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.4)
            `,

          // Hover effect
          "&:hover": {
            transform: "translateX(-50%) translateY(-2px)",
            boxShadow: isDarkMode
              ? `
                0 12px 48px rgba(74, 54, 106, 0.5),
                0 6px 24px rgba(74, 54, 106, 0.3),
                inset 0 1px 0 rgba(167, 139, 250, 0.3)
              `
              : `
                0 12px 48px rgba(0, 0, 0, 0.2),
                0 6px 24px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.5)
              `,
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            minHeight: { xs: "56px", sm: "64px" },
            px: { xs: 2, sm: 3, md: 4 },
            borderRadius: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {isMobile ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box /> {/* Spacer for centering */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: isDarkMode ? "#F1F5F9" : "#1E3A8A",
                    background: isDarkMode
                      ? "rgba(167, 139, 250, 0.2)"
                      : "rgba(30, 58, 138, 0.15)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: `1px solid ${
                      isDarkMode
                        ? "rgba(167, 139, 250, 0.3)"
                        : "rgba(30, 58, 138, 0.2)"
                    }`,
                    "&:hover": {
                      backgroundColor: isDarkMode
                        ? "rgba(167, 139, 250, 0.3)"
                        : "rgba(30, 58, 138, 0.2)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <NavigationButtons />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {isMobile && <MobileDrawer />}
    </>
  );
};

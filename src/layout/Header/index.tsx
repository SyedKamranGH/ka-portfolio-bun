import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useTheme as useCustomTheme } from "../../context/ThemeContext";
import type { NavigationItem } from "../../types";
import "./styles.scss";

interface HeaderProps {
  navigations: NavigationItem[];
  onNavigationClick: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  navigations,
  onNavigationClick,
}) => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigationClick = (id: string) => {
    onNavigationClick(id);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      className={`drawer-content ${isDarkMode ? "theme-dark" : "theme-light"}`}
    >
      <Box className="drawer-header">
        <Box className="drawer-controls">
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            className="drawer-icon-button"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <List>
        {navigations.map((nav) => (
          <ListItem
            key={nav.id}
            onClick={() => handleNavigationClick(nav.id)}
            className="drawer-nav-item"
            sx={{ cursor: "pointer" }}
          >
            <ListItemText primary={nav.label} className="drawer-nav-text" />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          onClick={toggleTheme}
          className="drawer-icon-button"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        className={`header floating-glass ${
          isDarkMode ? "theme-dark" : "theme-light"
        }`}
        sx={{
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "85%", md: "80%", lg: "75%", xl: "70%" },
          maxWidth: 1200,
          zIndex: 1300,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: "0.05em" }}
          >
            Portfolio
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
              {navigations.map((nav) => (
                <Button
                  key={nav.id}
                  onClick={() => handleNavigationClick(nav.id)}
                  className="nav-button"
                >
                  {nav.label}
                </Button>
              ))}
            </Stack>
          )}

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            className="theme-toggle"
            size="large"
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              className="mobile-menu-button"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            animation: "slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

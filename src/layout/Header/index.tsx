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
            fontWeight: 500,
            textTransform: "capitalize",
            color: "inherit",
            "&:hover": {
              backgroundColor: "action.hover",
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
          color: "inherit",
          "&:hover": {
            backgroundColor: "action.hover",
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
          width: 280,
          backgroundColor: "background.paper",
          color: "text.primary",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label="toggle theme"
            sx={{ color: "text.primary" }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            aria-label="close menu"
            sx={{ color: "text.primary" }}
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
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <ListItemText
                  primary={nav.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 500,
                      fontSize: "1.1rem",
                      color: "text.primary",
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
      <HideOnScroll>
        <AppBar
          position="fixed"
          className="header"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "center",
              minHeight: { xs: "64px", sm: "70px" },
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "lg",
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
                      color: "inherit",
                      "&:hover": {
                        backgroundColor: "action.hover",
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
      </HideOnScroll>
      {isMobile && <MobileDrawer />}
    </>
  );
};

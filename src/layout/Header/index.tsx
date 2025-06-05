import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  useScrollTrigger,
  Slide,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Navigation } from "../../types";
// import { CustomButton } from "../../components/Button";
import "./styles.scss";
// import Button from "@components/Button";
import Button from "../../components/Button/index";

interface HeaderProps {
  navigations: Navigation[];
  onNavigationClick: (id: string) => void;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header: React.FC<HeaderProps> = ({
  navigations,
  onNavigationClick,
}) => {
  const theme = useTheme();

  return (
    <HideOnScroll>
      <AppBar position="fixed" className="header" elevation={2}>
        <Toolbar className="header__toolbar">
          <Box className="header__brand">
            <Typography variant="h6" component="div" color="primary">
              Portfolio
            </Typography>
          </Box>

          <Box className="header__navigation">
            {navigations.map((nav) => (
              <Button
                key={nav.id}
                variant="text"
                color="inherit"
                onClick={() => onNavigationClick(nav.id)}
                className="header__nav-button"
              >
                {nav.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

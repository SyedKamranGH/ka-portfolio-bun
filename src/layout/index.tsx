import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTheme } from "../context/ThemeContext";
import { navigationItems } from "../constants/data/navigation";
import "./styles.scss";

const Layout: React.FC = () => {
  const { isDarkMode } = useTheme();

  const handleNavigationClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className={`layout ${isDarkMode ? "theme-dark" : "theme-light"}`}>
      <Header
        navigations={navigationItems}
        onNavigationClick={handleNavigationClick}
      />
      <Box component="main" className="main-content">
        <Outlet />
      </Box>
      <Footer onScrollToTop={handleScrollToTop} />
    </Box>
  );
};

export default Layout;

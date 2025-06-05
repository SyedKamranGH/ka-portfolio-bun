import React from "react";
import { Box } from "@mui/material";
import "./styles.scss";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box
      component="main"
      className="main"
      sx={{
        minHeight: "100vh",
        pt: { xs: "64px", sm: "70px" }, // Account for fixed header
        pb: 4,
      }}
    >
      {children}
    </Box>
  );
};

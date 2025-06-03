import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./styles.scss";

export const Main: React.FC = () => {
  return (
    <Box component="main" className="main">
      <Outlet />
    </Box>
  );
};

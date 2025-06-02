import React from "react";
import { Button as MuiButton } from "@mui/material";
import type { ButtonProps as MuiButtonProps } from "@mui/material";
import "./styles.scss";

interface CustomButtonProps extends MuiButtonProps {
  gradient?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  gradient = false,
  icon,
  className = "",
  ...props
}) => {
  return (
    <MuiButton
      className={`custom-button ${gradient ? "gradient" : ""} ${className}`}
      startIcon={icon}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

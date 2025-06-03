import React from "react";
import { Card as MuiCard, CardContent } from "@mui/material";
import type { CardProps } from "@mui/material";
import "./styles.scss";

interface CustomCardProps extends CardProps {
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CustomCardProps> = ({
  children,
  hover = true,
  glass = false,
  className = "",
  ...props
}) => {
  return (
    <MuiCard
      className={`custom-card ${hover ? "hoverable" : ""} ${
        glass ? "glass" : ""
      } ${className}`}
      {...props}
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;

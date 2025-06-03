import React from "react";
import { Chip as MuiChip, Avatar } from "@mui/material";
import type { ChipProps } from "@mui/material";
import "./styles.scss";

interface CustomChipProps extends ChipProps {
  skillName: string;
  iconText?: string;
  level?: string;
}

const Chip: React.FC<CustomChipProps> = ({
  skillName,
  iconText,
  level,
  className = "",
  ...props
}) => {
  return (
    <MuiChip
      className={`skill-chip ${className}`}
      label={skillName}
      avatar={iconText ? <Avatar className="skill-icon">{iconText}</Avatar> : undefined}
      title={level ? `Level: ${level}` : undefined}
      {...props}
    />
  );
};

export default Chip;

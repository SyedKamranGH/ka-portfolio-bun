import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import { getSkillLevelColor } from "@utils/skillUtils";
import { SKILL_LEVELS } from "@constants/skills";
import "../../styles/components/Skills.scss";

interface SkillItemProps {
  skill: {
    name: string;
    icon: string;
    level?: string;
  };
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const theme = useTheme();
  const levelColor = getSkillLevelColor(skill.level);

  return (
    <Box
      className="skill-item"
      sx={{
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.grey[200],
      }}
    >
      <Box className="skill-item__content">
        <Typography className="skill-item__icon" variant="body2">
          {skill.icon}
        </Typography>
        <Typography className="skill-item__name" variant="body1">
          {skill.name}
        </Typography>
      </Box>
      <Chip
        label={skill.level || SKILL_LEVELS.BEGINNER}
        size="small"
        className="skill-item__level"
        sx={{
          backgroundColor: `${levelColor}15`,
          color: levelColor,
          border: `1px solid ${levelColor}30`,
        }}
      />
    </Box>
  );
};

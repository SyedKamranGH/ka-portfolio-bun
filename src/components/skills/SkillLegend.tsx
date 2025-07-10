import React from "react";
import { Box, Chip } from "@mui/material";
import { SKILL_LEGEND_LEVELS } from "@constants/skills";
import "../../styles/components/Skills.scss";

export const SkillLegend: React.FC = () => {
  return (
    <Box className="skill-legend">
      {SKILL_LEGEND_LEVELS.map((level) => (
        <Chip
          key={level.name}
          label={`${level.name} (${level.percentage}%)`}
          className="skill-legend__item"
          sx={{
            backgroundColor: `${level.color}15`,
            color: level.color,
            border: `1px solid ${level.color}30`,
          }}
        />
      ))}
    </Box>
  );
};

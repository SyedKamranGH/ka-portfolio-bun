import React from "react";
import { Box, Typography } from "@mui/material";
import { calculateOverallStatistics } from "@utils/skillUtils";
import { skillDomains } from "@constants/data/skills";
import "../../styles/components/Skills.scss";

export const SkillStatistics: React.FC = () => {
  const { totalSkills, totalExpertSkills, overallAverage } =
    calculateOverallStatistics(skillDomains);

  return (
    <Box className="skills-section__stats">
      <Box className="skills-section__stats-item">
        <Typography
          variant="h4"
          className="skills-section__stats-item-value"
          color="primary.main"
        >
          {totalSkills}
        </Typography>
        <Typography
          variant="body2"
          className="skills-section__stats-item-label"
          color="text.secondary"
        >
          Total Skills
        </Typography>
      </Box>
      <Box className="skills-section__stats-item">
        <Typography
          variant="h4"
          className="skills-section__stats-item-value"
          color="success.main"
        >
          {totalExpertSkills}
        </Typography>
        <Typography
          variant="body2"
          className="skills-section__stats-item-label"
          color="text.secondary"
        >
          Expert Level
        </Typography>
      </Box>
      <Box className="skills-section__stats-item">
        <Typography
          variant="h4"
          className="skills-section__stats-item-value"
          color="secondary.main"
        >
          {overallAverage}%
        </Typography>
        <Typography
          variant="body2"
          className="skills-section__stats-item-label"
          color="text.secondary"
        >
          Average Proficiency
        </Typography>
      </Box>
    </Box>
  );
};

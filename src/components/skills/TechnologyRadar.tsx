import React from "react";
import { Box, useTheme } from "@mui/material";
import { Radar } from "react-chartjs-2";
import type { SkillDomain } from "../../types";
import {
  SKILL_LEVEL_TO_PERCENTAGE,
  SKILL_LEVELS,
  CHART_DEFAULTS,
} from "@constants/skills";
import "../../styles/components/Skills.scss";

interface TechnologyRadarProps {
  domain: SkillDomain;
}

export const TechnologyRadar: React.FC<TechnologyRadarProps> = ({ domain }) => {
  const theme = useTheme();

  const data = {
    labels: domain.skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: domain.skills.map(
          (skill) =>
            SKILL_LEVEL_TO_PERCENTAGE[skill.level || SKILL_LEVELS.BEGINNER] ||
            25
        ),
        backgroundColor: `${theme.palette.secondary.main}20`,
        borderColor: theme.palette.secondary.main,
        borderWidth: 2,
        pointBackgroundColor: theme.palette.secondary.main,
        pointBorderColor: theme.palette.background.paper,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: theme.palette.background.paper,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.primary,
        borderColor: theme.palette.secondary.main,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            const skill = domain.skills[context.dataIndex];
            return `${skill.level || SKILL_LEVELS.BEGINNER} (${
              context.parsed.r
            }%)`;
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: CHART_DEFAULTS.MAX_SCALE,
        min: CHART_DEFAULTS.MIN_SCALE,
        ticks: {
          stepSize: CHART_DEFAULTS.STEP_SIZE,
          color: theme.palette.text.secondary,
          font: {
            size: 10,
          },
          callback: function (value: any) {
            return value + "%";
          },
        },
        grid: {
          color: theme.palette.divider,
          lineWidth: 1,
        },
        angleLines: {
          color: theme.palette.divider,
          lineWidth: 1,
        },
        pointLabels: {
          color: theme.palette.text.primary,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
    },
  } as any;

  return (
    <Box className="skills-section__chart-container skills-section__chart-container--tech">
      <Radar data={data} options={options} />
    </Box>
  );
};

import React from "react";
import { Box, useTheme } from "@mui/material";
import { Radar } from "react-chartjs-2";
import { getDomainAverages } from "@utils/skillUtils";
import { CHART_DEFAULTS } from "@constants/skills";
import { skillDomains } from "@constants/data/skills";
import "../../styles/components/Skills.scss";

export const SpiderChart: React.FC = () => {
  const theme = useTheme();
  const domainAverages = getDomainAverages(skillDomains);

  const data = {
    labels: domainAverages.map((item) =>
      item.domain.replace(" Development", "").replace(" & Tools", "")
    ),
    datasets: [
      {
        label: "Proficiency Level",
        data: domainAverages.map((item) => item.percentage),
        backgroundColor: `${theme.palette.primary.main}20`,
        borderColor: theme.palette.primary.main,
        borderWidth: 3,
        pointBackgroundColor: theme.palette.primary.main,
        pointBorderColor: theme.palette.background.paper,
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: theme.palette.secondary.main,
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
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            return `${context.parsed.r}% Proficiency`;
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
            size: 12,
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
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    interaction: {
      intersect: false,
    },
  } as any;

  return (
    <Box className="skills-section__chart-container">
      <Radar data={data} options={options} />
    </Box>
  );
};

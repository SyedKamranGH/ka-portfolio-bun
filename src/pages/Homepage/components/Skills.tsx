import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Tabs,
  Tab,
  Chip,
  Stack,
  Button,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import type { SkillDomain } from "../../../types";
import { skillDomains } from "@constants/data/skills";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skill-tabpanel-${index}`}
      aria-labelledby={`skill-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

// Skill level to percentage mapping
const skillLevelToPercentage = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

// Calculate domain averages for spider graph
const getDomainAverages = () => {
  return skillDomains.map((domain) => {
    const average =
      domain.skills.reduce((acc, skill) => {
        return acc + (skillLevelToPercentage[skill.level || "Beginner"] || 25);
      }, 0) / domain.skills.length;
    return {
      domain: domain.title,
      percentage: Math.round(average),
    };
  });
};

const SpiderChart: React.FC = () => {
  const theme = useTheme();
  const domainAverages = getDomainAverages();

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
        max: 100,
        min: 0,
        ticks: {
          stepSize: 25,
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
  } as any; // Type assertion to suppress Chart.js type errors

  return (
    <Box sx={{ height: 400, position: "relative" }}>
      <Radar data={data} options={options} />
    </Box>
  );
};

const TechnologyRadar: React.FC<{ domain: SkillDomain }> = ({ domain }) => {
  const theme = useTheme();

  const data = {
    labels: domain.skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: domain.skills.map(
          (skill) => skillLevelToPercentage[skill.level || "Beginner"] || 25
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
            return `${skill.level || "Beginner"} (${context.parsed.r}%)`;
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: {
          stepSize: 25,
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
  } as any; // Type assertion to suppress Chart.js type errors

  return (
    <Box sx={{ height: 350, position: "relative", mb: 3 }}>
      <Radar data={data} options={options} />
    </Box>
  );
};

const SkillLegend: React.FC = () => {
  const theme = useTheme();

  const levels = [
    { name: "Expert", percentage: 100, color: "#10B981" },
    { name: "Advanced", percentage: 75, color: "#F59E0B" },
    { name: "Intermediate", percentage: 50, color: "#3B82F6" },
    { name: "Beginner", percentage: 25, color: "#94A3B8" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
        mb: 4,
      }}
    >
      {levels.map((level) => (
        <Chip
          key={level.name}
          label={`${level.name} (${level.percentage}%)`}
          sx={{
            backgroundColor: `${level.color}15`,
            color: level.color,
            border: `1px solid ${level.color}30`,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: `${level.color}25`,
            },
          }}
        />
      ))}
    </Box>
  );
};

export const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedDomains, setExpandedDomains] = useState<Set<number>>(
    new Set()
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const toggleDomainExpansion = (domainIndex: number) => {
    const newExpanded = new Set(expandedDomains);
    if (newExpanded.has(domainIndex)) {
      newExpanded.delete(domainIndex);
    } else {
      newExpanded.add(domainIndex);
    }
    setExpandedDomains(newExpanded);
  };

  // Get top skills (Expert and Advanced) and remaining skills
  const getSkillGroups = (domain: SkillDomain) => {
    const topSkills = domain.skills.filter(
      (skill) => skill.level === "Expert" || skill.level === "Advanced"
    );
    const remainingSkills = domain.skills.filter(
      (skill) => skill.level !== "Expert" && skill.level !== "Advanced"
    );
    return { topSkills, remainingSkills };
  };

  // Calculate overall statistics
  const totalSkills = skillDomains.reduce(
    (acc, domain) => acc + domain.skills.length,
    0
  );
  const totalExpertSkills = skillDomains.reduce(
    (acc, domain) =>
      acc + domain.skills.filter((skill) => skill.level === "Expert").length,
    0
  );
  const overallAverage = Math.round(
    skillDomains.reduce((acc, domain) => {
      const domainAverage =
        domain.skills.reduce((skillAcc, skill) => {
          return (
            skillAcc + (skillLevelToPercentage[skill.level || "Beginner"] || 25)
          );
        }, 0) / domain.skills.length;
      return acc + domainAverage;
    }, 0) / skillDomains.length
  );

  // Render skill item
  const renderSkillItem = (skill: any) => {
    const levelColor =
      skill.level === "Expert"
        ? "#10B981"
        : skill.level === "Advanced"
        ? "#F59E0B"
        : skill.level === "Intermediate"
        ? "#3B82F6"
        : "#94A3B8";

    return (
      <Box
        key={skill.name}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderRadius: 1,
          backgroundColor: theme.palette.grey[50],
          border: `1px solid ${theme.palette.grey[200]}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "1.2rem" }}>
            {skill.icon}
          </Typography>
          <Typography variant="body1" fontWeight="500">
            {skill.name}
          </Typography>
        </Box>
        <Chip
          label={skill.level || "Beginner"}
          size="small"
          sx={{
            backgroundColor: `${levelColor}15`,
            color: levelColor,
            border: `1px solid ${levelColor}30`,
            fontWeight: 600,
          }}
        />
      </Box>
    );
  };

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              fontWeight="700"
              color="primary"
              gutterBottom
              sx={{ mb: 2 }}
            >
              Technical Expertise
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Interactive visualization of my technical skills across different
              domains and specific technologies.
            </Typography>

            {/* Quick Stats */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                mb: 4,
                flexWrap: "wrap",
              }}
            >
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {totalSkills}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Skills
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" color="success.main">
                  {totalExpertSkills}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expert Level
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="secondary.main"
                >
                  {overallAverage}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Proficiency
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Combined Spider Chart and Technology Tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    px: 2,
                    "& .MuiTabs-indicator": {
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      height: 3,
                    },
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: theme.palette.text.secondary,
                      "&.Mui-selected": {
                        color: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  {/* Overall Tab */}
                  <Tab
                    label="Overall Proficiency"
                    id="skill-tab-overall"
                    aria-controls="skill-tabpanel-overall"
                  />
                  {/* Domain-specific Tabs */}
                  {skillDomains.map((domain, index) => (
                    <Tab
                      key={index}
                      label={domain.title
                        .replace(" Development", "")
                        .replace(" & Tools", "")}
                      id={`skill-tab-${index + 1}`}
                      aria-controls={`skill-tabpanel-${index + 1}`}
                    />
                  ))}
                </Tabs>
              </Box>

              {/* Overall Tab Panel */}
              <TabPanel value={selectedTab} index={0}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color="text.primary"
                    textAlign="center"
                    sx={{ mb: 3 }}
                  >
                    Overall Domain Proficiency
                  </Typography>
                  <SpiderChart />
                  <SkillLegend />
                </CardContent>
              </TabPanel>

              {/* Domain-specific Tab Panels */}
              {skillDomains.map((domain, index) => {
                const { topSkills, remainingSkills } = getSkillGroups(domain);
                const isExpanded = expandedDomains.has(index);
                const hasMoreSkills = remainingSkills.length > 0;

                return (
                  <TabPanel key={index} value={selectedTab} index={index + 1}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color="text.primary"
                        textAlign="center"
                        sx={{ mb: 3 }}
                      >
                        {domain.title} Technologies
                      </Typography>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "1fr",
                            md: "2fr 1fr",
                          },
                          gap: 4,
                        }}
                      >
                        <Box>
                          <TechnologyRadar domain={domain} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            color="text.primary"
                            sx={{ mb: 2 }}
                          >
                            Technology List
                          </Typography>
                          <Stack spacing={1}>
                            {/* Top Skills (Expert & Advanced) */}
                            {topSkills.map((skill) => renderSkillItem(skill))}

                            {/* Remaining Skills (Collapsible) */}
                            <Collapse in={isExpanded} timeout="auto">
                              <Stack spacing={1} sx={{ mt: 1 }}>
                                {remainingSkills.map((skill) =>
                                  renderSkillItem(skill)
                                )}
                              </Stack>
                            </Collapse>

                            {/* Show More/Less Button */}
                            {hasMoreSkills && (
                              <Box sx={{ pt: 2, textAlign: "center" }}>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  onClick={() => toggleDomainExpansion(index)}
                                  sx={{
                                    textTransform: "none",
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    color: theme.palette.primary.main,
                                    borderColor: theme.palette.primary.main,
                                    "&:hover": {
                                      backgroundColor: `${theme.palette.primary.main}10`,
                                      borderColor: theme.palette.primary.main,
                                    },
                                  }}
                                >
                                  {isExpanded
                                    ? `Show Less (-${remainingSkills.length})`
                                    : `Show More (+${remainingSkills.length})`}
                                </Button>
                              </Box>
                            )}
                          </Stack>
                        </Box>
                      </Box>
                    </CardContent>
                  </TabPanel>
                );
              })}
            </Card>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
};

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Tabs,
  Tab,
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
import { skillDomains } from "@constants/data/skills";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { TabPanel } from "../../../components/TabPanel";
import {
  SpiderChart,
  TechnologyRadar,
  SkillLegend,
  SkillsList,
  SkillStatistics,
} from "@components/skills";
import "../../../styles/components/Skills.scss";

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

  return (
    <Box
      component="section"
      id="skills"
      className="skills-section"
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          title="Technical Expertise"
          subtitle="Interactive visualization of my technical skills across different domains and specific technologies."
          variant="h2"
          className="skills-section__header"
        />

        {/* Quick Stats */}
        <SkillStatistics />

        {/* Combined Spider Chart and Technology Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            className="skills-section__card"
            sx={{
              borderColor: theme.palette.divider,
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                className="skills-section__tabs"
                sx={{
                  "& .MuiTabs-indicator": {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                  "& .MuiTab-root": {
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
              <CardContent className="skills-section__tab-content">
                <Typography
                  variant="h5"
                  className="skills-section__tab-title"
                  color="text.primary"
                >
                  Overall Domain Proficiency
                </Typography>
                <SpiderChart />
                <SkillLegend />
              </CardContent>
            </TabPanel>

            {/* Domain-specific Tab Panels */}
            {skillDomains.map((domain, index) => (
              <TabPanel key={index} value={selectedTab} index={index + 1}>
                <CardContent className="skills-section__tab-content">
                  <Typography
                    variant="h5"
                    className="skills-section__tab-title"
                    color="text.primary"
                  >
                    {domain.title} Technologies
                  </Typography>

                  <Box className="skills-section__technology-grid">
                    <Box>
                      <TechnologyRadar domain={domain} />
                    </Box>
                    <Box>
                      <SkillsList
                        domain={domain}
                        domainIndex={index}
                        expandedDomains={expandedDomains}
                        onToggleExpansion={toggleDomainExpansion}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </TabPanel>
            ))}
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

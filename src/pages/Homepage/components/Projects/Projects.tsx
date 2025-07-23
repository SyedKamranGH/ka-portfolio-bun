import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SectionHeader } from "../../../../components/SectionHeader/SectionHeader";
import { TabPanel } from "./components/TabPanel";
import { ProjectsWithPagination } from "./components/ProjectsWithPagination";
import { useProjectTabs } from "./hooks/useProjectTabs";
import { PROJECTS } from "../../../../constants/data/projects";
import { ANIMATION_VARIANTS } from "./constants/tabsConfig";
import "./styles/index.scss";

export const Projects: React.FC = () => {
  const {
    activeTab,
    handleTabChange,
    tabsConfig,
    githubProjects,
    loading,
    error,
  } = useProjectTabs();

  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="xl">
        <SectionHeader
          title="Projects"
          subtitle="A showcase of my personal and professional work"
          variant="h2"
          className="projects-header"
        />

        {/* Enhanced Magical Folder-Style Tabs - Left Aligned & Scalable */}
        <Box className="projects-tabs-container">
          {/* Unified Background Panel for All Tabs */}
          <Box className="tabs-background-panel" />

          {/* Main Tab Container - Left Aligned */}
          <Box className="tabs-main-container">
            {tabsConfig.map((tab, index) => (
              <motion.div
                key={tab.id}
                variants={ANIMATION_VARIANTS.tab}
                initial="inactive"
                animate={activeTab === index ? "active" : "inactive"}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: activeTab === index ? 10 : 5 - index,
                  marginLeft: index > 0 ? "-12px" : "0",
                }}
              >
                <Box
                  className={`tab-item ${activeTab === index ? "active" : ""}`}
                  onClick={(event) => handleTabChange(event, index)}
                >
                  {/* Very subtle glowing orb for active tab */}
                  {activeTab === index && (
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="glow-orb"
                    />
                  )}

                  <Typography className="tab-text">{tab.label}</Typography>

                  {/* Minimal micro-particles for active tab */}
                  {activeTab === index && (
                    <>
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [-1, -4, -1],
                            x: [0, 1, 0],
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          }}
                          className="micro-particle"
                        />
                      ))}
                    </>
                  )}
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Render Active Tab Content */}
        {tabsConfig.map((tab, index) => (
          <TabPanel key={tab.id} value={activeTab} index={index}>
            {index === 0 ? (
              <ProjectsWithPagination
                projects={githubProjects}
                type="personal"
                loading={loading}
                error={error}
              />
            ) : (
              <ProjectsWithPagination
                projects={PROJECTS.company}
                type="company"
              />
            )}
          </TabPanel>
        ))}
      </Container>
    </section>
  );
};

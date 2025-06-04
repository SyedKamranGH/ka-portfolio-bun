import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Tabs,
  Tab,
  IconButton,
  Skeleton,
} from "@mui/material";
import { GitHub, Launch, Visibility } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./styles.scss";
import Chip from "../../../components/Chip/index";
import type { Project, ProjectType } from "../../../types/index";
import { useGitHubProjects } from "@hooks/useGItHubProjects";
import { PROJECTS } from "@constants/data/projects";
import Grid from "@mui/material/Grid";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`projects-tabpanel-${index}`}
    aria-labelledby={`projects-tab-${index}`}
  >
    {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
  </div>
);

const ProjectCard: React.FC<{ project: Project; type: ProjectType }> = ({
  project,
  type,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Card className="project-card" elevation={2}>
        {project.image && (
          <CardMedia
            component="img"
            height={200}
            image={project.image}
            alt={project.name}
            className="project-image"
          />
        )}
        <CardContent className="project-content">
          <Typography variant="h6" component="h3" className="project-title">
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="project-summary"
          >
            {project.summary}
          </Typography>

          {project.skills && project.skills.length > 0 && (
            <Box className="project-skills" sx={{ mt: 2 }}>
              {project.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill.name}
                  icon={skill.icon}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>
          )}
        </CardContent>

        <CardActions className="project-actions">
          {type === "personal" && project.githubUrl && (
            <IconButton
              size="small"
              onClick={() => window.open(project.githubUrl, "_blank")}
              aria-label="GitHub Repository"
            >
              <GitHub />
            </IconButton>
          )}
          {project.liveUrl && (
            <IconButton
              size="small"
              onClick={() => window.open(project.liveUrl, "_blank")}
              aria-label="Live Demo"
            >
              <Launch />
            </IconButton>
          )}
          {project.demoUrl && (
            <IconButton
              size="small"
              onClick={() => window.open(project.demoUrl, "_blank")}
              aria-label="View Demo"
            >
              <Visibility />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
};

const ProjectSkeleton: React.FC = () => (
  <Card className="project-card">
    <Skeleton variant="rectangular" height={200} />
    <CardContent>
      <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} variant="rounded" width={60} height={24} />
        ))}
      </Box>
    </CardContent>
    <CardActions>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={40} height={40} />
    </CardActions>
  </Card>
);

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { projects: githubProjects, loading, error } = useGitHubProjects();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            className="section-title"
            align="center"
            sx={{ mb: 2 }}
          >
            Projects
          </Typography>
          <Typography
            variant="subtitle1"
            className="section-subtitle"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            A showcase of my personal and professional work
          </Typography>
        </motion.div>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="projects tabs"
            centered
            className="projects-tabs"
          >
            <Tab label="Personal Projects" id="projects-tab-0" />
            <Tab label="Company Projects" id="projects-tab-1" />
          </Tabs>
        </Box>

        <TabPanel value={activeTab} index={0}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              {loading ? (
                // Show skeletons while loading
                Array.from({ length: 6 }).map((_, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    <ProjectSkeleton />
                  </Grid>
                ))
              ) : error ? (
                <Grid item xs={12}>
                  <Typography color="error" align="center">
                    Failed to load GitHub projects. Please try again later.
                  </Typography>
                </Grid>
              ) : githubProjects.length > 0 ? (
                githubProjects.map((project, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={project.id || index}>
                    <ProjectCard project={project} type="personal" />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography align="center" color="text.secondary">
                    No GitHub projects found.
                  </Typography>
                </Grid>
              )}
            </Grid>
          </motion.div>
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              {PROJECTS.company.map((project, index) => (
                <Grid item xs={12} sm={6} lg={4} key={project.id || index}>
                  <ProjectCard project={project} type="company" />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </TabPanel>
      </Container>
    </section>
  );
};

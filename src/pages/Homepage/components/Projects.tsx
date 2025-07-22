import React, { useState } from "react";
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
  Alert,
  Button,
  Fade,
} from "@mui/material";
import { GitHub, Launch, Visibility, ExpandMore, ExpandLess } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.scss";
import CustomChip from "../../../components/Chip/index";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import type { Project, ProjectType } from "../../../types/index";
import { useGitHubProjects } from "../../../hooks/useGItHubProjects";
import { PROJECTS } from "../../../constants/data/projects";

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
      layout
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
                <CustomChip
                  key={index}
                  label={skill.name}
                  skillName={skill.name}
                  icon={skill.icon ? <span>{skill.icon}</span> : undefined}
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

const ProjectsGrid: React.FC<{
  projects: Project[];
  type: ProjectType;
  loading?: boolean;
  error?: string | null;
}> = ({ projects, type, loading, error }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: 3,
  };

  if (loading) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box sx={gridStyles}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectSkeleton key={index} />
          ))}
        </Box>
      </motion.div>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to load GitHub projects. Please try again later.
        </Alert>
        <Typography color="text.secondary" align="center">
          {error}
        </Typography>
      </Box>
    );
  }

  if (projects.length === 0) {
    return (
      <Box sx={{ py: 4 }}>
        <Typography align="center" color="text.secondary">
          {type === "personal"
            ? "No GitHub projects found."
            : "No company projects available."}
        </Typography>
      </Box>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      layout
    >
      <Box sx={gridStyles}>
        <AnimatePresence>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              type={type}
            />
          ))}
        </AnimatePresence>
      </Box>
    </motion.div>
  );
};

// New component with pagination functionality
const ProjectsWithPagination: React.FC<{
  projects: Project[];
  type: ProjectType;
  loading?: boolean;
  error?: string | null;
}> = ({ projects, type, loading, error }) => {
  const [showAll, setShowAll] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const INITIAL_PROJECTS_COUNT = 6;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

  const handleToggleProjects = async () => {
    if (!showAll) {
      setIsExpanding(true);
      // Add a small delay for better UX
      setTimeout(() => {
        setShowAll(true);
        setIsExpanding(false);
      }, 300);
    } else {
      setShowAll(false);
      // Scroll back to the projects section when collapsing
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // Handle loading and error states
  if (loading || error || projects.length === 0) {
    return <ProjectsGrid projects={projects} type={type} loading={loading} error={error} />;
  }

  return (
    <Box>
      <ProjectsGrid 
        projects={displayedProjects} 
        type={type} 
        loading={isExpanding} 
        error={error} 
      />
      
      {hasMoreProjects && (
        <Fade in={true} timeout={600}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 4,
            mb: 2 
          }}>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outlined"
                size="large"
                onClick={handleToggleProjects}
                startIcon={showAll ? <ExpandLess /> : <ExpandMore />}
                disabled={isExpanding}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {showAll ? `Show Less Projects` : `Show All ${projects.length} Projects`}
              </Button>
            </motion.div>
          </Box>
        </Fade>
      )}

      {showAll && hasMoreProjects && (
        <Box sx={{ 
          textAlign: 'center', 
          mt: 2,
          opacity: 0.7 
        }}>
          <Typography variant="body2" color="text.secondary">
            Showing all {projects.length} projects
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { projects: githubProjects, loading, error } = useGitHubProjects();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="xl">
        <SectionHeader
          title="Projects"
          subtitle="A showcase of my personal and professional work"
          variant="h2"
          className="projects-header"
        />

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
          <ProjectsWithPagination
            projects={githubProjects}
            type="personal"
            loading={loading}
            error={error}
          />
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <ProjectsWithPagination projects={PROJECTS.company} type="company" />
        </TabPanel>
      </Container>
    </section>
  );
};

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
import {
  GitHub,
  Launch,
  Visibility,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
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

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  const isActive = value === index;

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      role="tabpanel"
      id={`projects-tabpanel-${index}`}
      aria-labelledby={`projects-tab-${index}`}
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={`panel-${index}`}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
                backdropFilter: "blur(12px)",
                // Adjusted border radius to connect with tabs
                borderRadius: "0 20px 20px 20px", // Top-left corner square to connect with active tab
                border: "1px solid rgba(226, 232, 240, 0.6)",
                borderTop: "none", // Remove top border to connect seamlessly
                boxShadow:
                  "0 8px 32px rgba(30, 58, 138, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                p: { xs: 2, sm: 3, md: 4 },
                position: "relative",
                overflow: "hidden",
                // Connect directly with tabs - no margin
                mt: 0,
                // Add padding top to create space for the animation line
                pt: { xs: 3, sm: 4, md: 5 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px", // Slightly thicker for better visibility in dedicated space
                  background:
                    "linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.3) 20%, rgba(139, 92, 246, 0.2) 50%, rgba(30, 58, 138, 0.3) 80%, transparent)",
                  animation: "shimmer 3s ease-in-out infinite",
                  zIndex: 1, // Ensure it stays in its designated area
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 3,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(226, 232, 240, 0.4) 50%, transparent)",
                  zIndex: 1,
                },
                "@keyframes shimmer": {
                  "0%": {
                    transform: "translateX(-100%)",
                  },
                  "100%": {
                    transform: "translateX(100%)",
                  },
                },
              }}
            >
              <motion.div
                variants={contentVariants}
                style={{ position: "relative", zIndex: 2 }} // Ensure content is above animation
              >
                {children}
              </motion.div>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

const ProjectCard: React.FC<{ project: Project; type: ProjectType }> = ({
  project,
  type,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -8, // Reduced from -10 for less layout disruption
      scale: 1.02, // Added subtle scale instead of just y movement
      transition: { duration: 0.3, ease: "easeOut" },
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
      // Removed layout prop to prevent layout shifts
      style={{
        height: "100%", // Ensure consistent height
        position: "relative", // Proper positioning
        zIndex: 1, // Ensure it stays above any underlying elements
      }}
    >
      <Card
        className="project-card"
        elevation={2}
        sx={{
          height: "100%", // Fill container height
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          // Prevent any underlying elements from showing
          backgroundColor: "background.paper",
          "&:hover": {
            // Use transform instead of changing layout
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(30, 58, 138, 0.15)",
            zIndex: 2, // Elevate on hover
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {project.image && (
          <CardMedia
            component="img"
            height={200}
            image={project.image}
            alt={project.name}
            className="project-image"
            sx={{
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        )}
        <CardContent
          className="project-content"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" component="h3" className="project-title">
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="project-summary"
            sx={{ mb: 2, flex: 1 }}
          >
            {project.summary}
          </Typography>

          {project.skills && project.skills.length > 0 && (
            <Box className="project-skills" sx={{ mt: "auto" }}>
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
      // Removed layout prop to prevent grid layout shifts
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          ...gridStyles,
          // Ensure stable grid positioning
          minHeight: "400px", // Prevent collapse during animations
        }}
      >
        {/* Removed AnimatePresence to prevent layout calculation issues */}
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            type={type}
          />
        ))}
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
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECTS_COUNT);
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
          block: "start",
        });
      }, 100);
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  // Handle loading and error states
  if (loading || error || projects.length === 0) {
    return (
      <ProjectsGrid
        projects={projects}
        type={type}
        loading={loading}
        error={error}
      />
    );
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              mb: 2,
            }}
          >
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
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: "rgba(25, 118, 210, 0.04)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {showAll
                  ? `Show Less Projects`
                  : `Show All ${projects.length} Projects`}
              </Button>
            </motion.div>
          </Box>
        </Fade>
      )}

      {showAll && hasMoreProjects && (
        <Box
          sx={{
            textAlign: "center",
            mt: 2,
            opacity: 0.7,
          }}
        >
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

  // Scalable tab configuration - easy to add more tabs
  const tabsConfig = [
    {
      id: 0,
      label: "Personal Projects",
      content: (
        <ProjectsWithPagination
          projects={githubProjects}
          type="personal"
          loading={loading}
          error={error}
        />
      ),
    },
    {
      id: 1,
      label: "Company Projects",
      content: (
        <ProjectsWithPagination projects={PROJECTS.company} type="company" />
      ),
    },
    // Future tabs can be easily added here
    // {
    //   id: 2,
    //   label: "Open Source",
    //   content: <ProjectsWithPagination projects={PROJECTS.openSource} type="openSource" />,
    // },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabVariants = {
    inactive: {
      scale: 0.95,
      y: 8,
      rotateX: 20,
      transformOrigin: "bottom",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    active: {
      scale: 1,
      y: 0,
      rotateX: 0,
      transformOrigin: "bottom",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      rotateX: -8,
      transformOrigin: "bottom",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const particleVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
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

        {/* Enhanced Magical Folder-Style Tabs - Left Aligned & Scalable */}
        <Box sx={{ position: "relative", mb: 0 }}>
          {/* Unified Background Panel for All Tabs */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.7) 100%)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(226, 232, 240, 0.4)",
              borderTop: "none",
              borderRadius: "0 0 20px 20px",
              zIndex: 0,
            }}
          />

          {/* Floating Particles Background */}
          <Box
            sx={{
              position: "absolute",
              top: -20,
              left: 0,
              right: 0,
              height: 60,
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                variants={particleVariants}
                animate="animate"
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #1E3A8A, #8B5CF6)",
                  left: `${5 + i * 10}%`,
                  top: `${20 + (i % 2) * 15}px`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </Box>

          {/* Main Tab Container - Left Aligned */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              position: "relative",
              perspective: "1200px",
              mb: 0,
              zIndex: 1,
              gap: 0,
              pl: { xs: 1, sm: 2 },
            }}
          >
            {tabsConfig.map((tab, index) => (
              <motion.div
                key={tab.id}
                variants={tabVariants}
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
                  onClick={(event) => handleTabChange(event, index)}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.8, sm: 2.2 },
                    minWidth: { xs: "150px", sm: "180px" },
                    textAlign: "center",
                    // Enhanced connection - all tabs feel like part of the same panel system
                    background:
                      activeTab === index
                        ? "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)" // Same as panel background
                        : "linear-gradient(145deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.7) 100%)", // Slightly muted but connected
                    backdropFilter: "blur(12px)",
                    border:
                      activeTab === index
                        ? "1px solid rgba(226, 232, 240, 0.6)" // Match panel border
                        : "1px solid rgba(226, 232, 240, 0.4)", // Slightly lighter but same color family
                    borderBottom:
                      activeTab === index
                        ? "none" // Active tab connects seamlessly
                        : "1px solid rgba(226, 232, 240, 0.3)", // Inactive tabs show connection to base
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow:
                      activeTab === index
                        ? "0 -8px 25px rgba(30, 58, 138, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)" // Elevated, connected
                        : "0 -2px 8px rgba(30, 58, 138, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.7)", // Subtle, but connected
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",

                    // Enhanced connection overlay
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        activeTab === index
                          ? "linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(139, 92, 246, 0.01) 100%)"
                          : "linear-gradient(135deg, rgba(226, 232, 240, 0.1) 0%, transparent 100%)", // Subtle connection for inactive
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      opacity: 1,
                      transition: "all 0.4s ease",
                      zIndex: 1,
                    },

                    // Connection indicator - shows continuity
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -1,
                      left: "20%",
                      right: "20%",
                      height: activeTab === index ? "2px" : "1px", // Active tab has stronger connection
                      background:
                        activeTab === index
                          ? "linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.4) 50%, transparent)"
                          : "linear-gradient(90deg, transparent, rgba(226, 232, 240, 0.6) 50%, transparent)", // Subtle connection for inactive
                      borderRadius: "1px 1px 0 0",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                    },

                    "&:hover": {
                      background:
                        activeTab === index
                          ? "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)"
                          : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.85) 100%)", // Hover brings inactive closer to active
                      borderColor:
                        activeTab === index
                          ? "rgba(30, 58, 138, 0.15)"
                          : "rgba(226, 232, 240, 0.5)", // Stronger connection on hover
                      boxShadow:
                        activeTab === index
                          ? "0 -12px 30px rgba(30, 58, 138, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.95)"
                          : "0 -4px 15px rgba(30, 58, 138, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.85)", // Lift inactive on hover
                      "&::before": {
                        background:
                          activeTab === index
                            ? "linear-gradient(135deg, rgba(30, 58, 138, 0.03) 0%, rgba(139, 92, 246, 0.02) 100%)"
                            : "linear-gradient(135deg, rgba(30, 58, 138, 0.015) 0%, rgba(226, 232, 240, 0.05) 100%)", // Subtle theme hint
                        opacity: 1,
                      },
                      "&::after": {
                        background:
                          activeTab === index
                            ? "linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.5) 50%, transparent)"
                            : "linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.2) 50%, transparent)", // Theme connection on hover
                      },
                    },

                    // Ripple effect on click
                    "&:active": {
                      transform: "scale(0.98)",
                      transition: "transform 0.1s ease",
                    },
                  }}
                >
                  {/* Very subtle glowing orb for active tab */}
                  {activeTab === index && (
                    <motion.div
                      variants={glowVariants}
                      animate="animate"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "60%",
                        height: "60%",
                        background:
                          "radial-gradient(circle, rgba(30, 58, 138, 0.02) 0%, transparent 70%)",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  )}

                  <Typography
                    variant="body1"
                    sx={{
                      position: "relative",
                      zIndex: 3,
                      fontWeight: activeTab === index ? 700 : 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      // Main differentiation through text color with gradients
                      background:
                        activeTab === index
                          ? "linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 50%, #1E40AF 100%)" // Colored gradient for active
                          : "linear-gradient(135deg, #64748B 0%, #94A3B8 100%)", // Gray gradient for inactive
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "none", // Clean, no shadow
                      transition: "all 0.4s ease",
                      letterSpacing: activeTab === index ? "0.5px" : "0.2px",
                    }}
                  >
                    {tab.label}
                  </Typography>

                  {/* Minimal micro-particles for active tab */}
                  {activeTab === index && (
                    <>
                      {[...Array(2)].map(
                        (
                          _,
                          i // Reduced to 2 for subtlety
                        ) => (
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
                            style={{
                              position: "absolute",
                              width: "1px",
                              height: "1px",
                              borderRadius: "50%",
                              background: "rgba(30, 58, 138, 0.3)", // Subtle single color
                              top: `${40 + i * 20}%`,
                              left: `${30 + i * 30}%`,
                              pointerEvents: "none",
                              zIndex: 1,
                            }}
                          />
                        )
                      )}
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
            {tab.content}
          </TabPanel>
        ))}
      </Container>
    </section>
  );
};

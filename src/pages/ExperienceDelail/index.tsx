import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Stack,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
} from "@mui/material";
import {
  ArrowBack,
  WorkOutline,
  CalendarToday,
  LocationOn,
  Star,
  CheckCircle,
  Launch,
  GitHub,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import type { Experience } from "../../types";
import { experiences } from "../../constants/data/experiences";
// import { CustomChip } from "../../components/Chip";
import { formatDate } from "../../utils/formatDate";
import "./styles.scss";
import Grid from "@mui/material/Grid";
import CustomChip from "../../components/Chip/index";

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <Card className="project-card" elevation={2}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {project.description}
          </Typography>

          {project.technologies && (
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
              {project.technologies.map((tech: string, index: number) => (
                <CustomChip
                  key={index}
                  label={tech}
                  skillName={tech}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Stack>
          )}

          {(project.githubUrl || project.liveUrl) && (
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              {project.githubUrl && (
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
            </Stack>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [experience, setExperience] = useState<Experience | null>(null);

  useEffect(() => {
    if (id) {
      const exp = experiences.find((exp) => exp.id === id);
      setExperience(exp || null);
    }
  }, [id]);

  const handleGoBack = () => {
    navigate("/#experience");
  };

  if (!experience) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" color="error">
          Experience not found
        </Typography>
        <Box textAlign="center" sx={{ mt: 2 }}>
          <IconButton onClick={handleGoBack} size="large">
            <ArrowBack />
          </IconButton>
        </Box>
      </Container>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="experience-detail-page">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumbs and Back Button */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                onClick={handleGoBack}
                className="back-button"
                size="large"
              >
                <ArrowBack />
              </IconButton>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  color="inherit"
                  href="/#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGoBack();
                  }}
                >
                  Experience
                </Link>
                <Typography color="text.primary">
                  {experience.jobRole}
                </Typography>
              </Breadcrumbs>
            </Box>
          </motion.div>

          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Paper
              className="experience-header"
              elevation={3}
              sx={{ p: 4, mb: 4 }}
            >
              <Grid container spacing={3} alignItems="center">
                {/* <Grid item xs={12} md={8}>
                  <Typography
                    variant="h3"
                    component="h1"
                    className="experience-title"
                  >
                    {experience.jobRole}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {experience.company}
                  </Typography>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <CalendarToday fontSize="small" color="action" />
                      <Typography variant="body1">
                        {formatDate(experience.startDate)} -{" "}
                        {formatDate(experience.endDate)}
                      </Typography>
                    </Box>

                    {experience.location && (
                      <Box display="flex" alignItems="center" gap={1}>
                        <LocationOn fontSize="small" color="action" />
                        <Typography variant="body1">
                          {experience.location}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Grid> */}

                {/* {experience.companyLogo && (
                  <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                      <img
                        src={experience.companyLogo}
                        alt={`${experience.company} logo`}
                        className="company-logo"
                      />
                    </Box>
                  </Grid>
                )} */}
              </Grid>
            </Paper>
          </motion.div>

          <Grid container spacing={4}>
            {/* Main Content */}
            {/* <Grid item xs={12} lg={8}> */}
            {/* Summary */}
            {/* <motion.div variants={itemVariants}>
                <Paper className="experience-section" sx={{ p: 3, mb: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {experience.summary}
                  </Typography>
                </Paper>
              </motion.div> */}

            {/* Responsibilities */}
            {/* {experience.responsibilities &&
                experience.responsibilities.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <Paper className="experience-section" sx={{ p: 3, mb: 3 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        Key Responsibilities
                      </Typography>
                      <List>
                        {experience.responsibilities.map(
                          (responsibility, index) => (
                            <ListItem key={index} sx={{ pl: 0 }}>
                              <ListItemIcon>
                                <CheckCircle color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={responsibility} />
                            </ListItem>
                          )
                        )}
                      </List>
                    </Paper>
                  </motion.div>
                )} */}

            {/* Key Highlights */}
            {/* {experience.keyHighlights &&
                experience.keyHighlights.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <Paper className="experience-section" sx={{ p: 3, mb: 3 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        Key Achievements
                      </Typography>
                      <List>
                        {experience.keyHighlights.map((highlight, index) => (
                          <ListItem key={index} sx={{ pl: 0 }}>
                            <ListItemIcon>
                              <Star color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary={highlight} />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </motion.div>
                )} */}

            {/* Projects */}
            {/* {experience.projects && experience.projects.length > 0 && (
                <motion.div variants={itemVariants}>
                  <Paper className="experience-section" sx={{ p: 3, mb: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Projects Worked On
                    </Typography>
                    <Grid container spacing={3}>
                      {experience.projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <ProjectCard project={project} />
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </motion.div>
              )} */}
            {/* </Grid> */}

            {/* Sidebar */}
            {/* Skills & Technologies */}
            {/* <Grid item xs={12} lg={4}>
              <motion.div variants={itemVariants}>
                <Paper className="experience-sidebar" sx={{ p: 3, mb: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Technologies & Skills
                  </Typography>
                  <Divider sx={{ mb: 2 }} />

                  {experience.skills && experience.skills.length > 0 && (
                    <Box className="skills-wrapper">
                      {experience.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill.name}
                          icon={skill.icon}
                          size="small"
                          sx={{ mb: 1, mr: 1 }}
                        />
                      ))}
                    </Box>
                  )}
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper className="experience-sidebar" sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Quick Stats
                  </Typography>
                  <Divider sx={{ mb: 2 }} />

                  <Box className="stats-item">
                    <WorkOutline color="primary" />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Employment Type
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {experience.employmentType || "Full-time"}
                      </Typography>
                    </Box>
                  </Box>

                  {experience.teamSize && (
                    <Box className="stats-item" sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Team Size
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {experience.teamSize}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </motion.div>
            </Grid> */}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};

export default ExperienceDetail;

import React from "react";
import { Box, Alert, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectSkeleton } from "./ProjectSkeleton";
import type { ProjectsGridProps } from "./types";
import { ANIMATION_VARIANTS } from "../../../../constants/projectsConfig";
import "./ProjectsGrid.scss";

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  type,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <motion.div
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box className="projects-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectSkeleton key={index} />
          ))}
        </Box>
      </motion.div>
    );
  }

  if (error) {
    return (
      <Box className="projects-error">
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
      <Box className="projects-empty">
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
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="projects-grid-container"
    >
      <Box className="projects-grid">
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

import React, { useState } from "react";
import { Box, Button, Typography, Fade } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { motion } from "framer-motion";
import { ProjectsGrid } from "../ProjectsGrid";
import type { ProjectsWithPaginationProps } from "../../types";
import {
  PAGINATION_CONFIG,
  ANIMATION_VARIANTS,
} from "../../constants/tabsConfig";

export const ProjectsWithPagination: React.FC<ProjectsWithPaginationProps> = ({
  projects,
  type,
  loading,
  error,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, PAGINATION_CONFIG.INITIAL_PROJECTS_COUNT);
  const hasMoreProjects =
    projects.length > PAGINATION_CONFIG.INITIAL_PROJECTS_COUNT;

  const handleToggleProjects = async () => {
    if (!showAll) {
      setIsExpanding(true);
      setTimeout(() => {
        setShowAll(true);
        setIsExpanding(false);
      }, PAGINATION_CONFIG.EXPAND_ANIMATION_DELAY);
    } else {
      setShowAll(false);
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, PAGINATION_CONFIG.SCROLL_DELAY);
    }
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
    <Box className="projects-with-pagination">
      <ProjectsGrid
        projects={displayedProjects}
        type={type}
        loading={isExpanding}
        error={error}
      />

      {hasMoreProjects && (
        <Fade in={true} timeout={600}>
          <Box className="pagination-controls">
            <motion.div
              variants={ANIMATION_VARIANTS.button}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outlined"
                size="large"
                onClick={handleToggleProjects}
                startIcon={showAll ? <ExpandLess /> : <ExpandMore />}
                disabled={isExpanding}
                className="pagination-button"
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
        <Box className="pagination-status">
          <Typography variant="body2" color="text.secondary">
            Showing all {projects.length} projects
          </Typography>
        </Box>
      )}
    </Box>
  );
};

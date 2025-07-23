import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { GitHub, Launch, Visibility } from "@mui/icons-material";
import { motion } from "framer-motion";
import CustomChip from "../../../../../../components/Chip/index";
import type { ProjectCardProps } from "../../types";
import { ANIMATION_VARIANTS } from "../../constants/tabsConfig";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, type }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.card}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        height: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Card className="project-card">
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
            <Box className="project-skills">
              {project.skills.map((skill: any, index: number) => (
                <CustomChip
                  key={index}
                  label={skill.name}
                  skillName={skill.name}
                  iconText={skill.icon}
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
              onClick={() => handleLinkClick(project.githubUrl!)}
              aria-label="GitHub Repository"
            >
              <GitHub />
            </IconButton>
          )}

          {project.liveUrl && (
            <IconButton
              size="small"
              onClick={() => handleLinkClick(project.liveUrl!)}
              aria-label="Live Demo"
            >
              <Launch />
            </IconButton>
          )}

          {project.demoUrl && (
            <IconButton
              size="small"
              onClick={() => handleLinkClick(project.demoUrl!)}
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

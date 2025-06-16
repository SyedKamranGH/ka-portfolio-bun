import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  category: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: "/path-to-project1-image.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A responsive task management application with real-time updates.",
    image: "/path-to-project2-image.jpg",
    tags: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    category: "Frontend",
  },
  {
    id: 3,
    title: "API Service",
    description:
      "RESTful API service for handling user authentication and data management.",
    image: "/path-to-project3-image.jpg",
    tags: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/project3",
    category: "Backend",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 6 }}
        >
          <Typography variant="h2" sx={{ mb: 4 }}>
            My Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 800 }}
          >
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and demonstrates different aspects of
            my technical skills and problem-solving abilities.
          </Typography>

          {/* Category Filter */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 4 }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                sx={{
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <Grid
                item
                key={project.id}
                xs={12}
                sm={6}
                md={4}
                component={motion.div}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    "&:hover": {
                      transform: "translateY(-8px)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "action.hover",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;

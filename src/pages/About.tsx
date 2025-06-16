import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "AWS", level: 70 },
];

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* About Me Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 8 }}
        >
          <Typography variant="h2" sx={{ mb: 4 }}>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                Hello! I'm a passionate Full Stack Developer with a strong
                foundation in web technologies and a keen eye for creating
                user-friendly applications. With several years of experience in
                the industry, I've had the opportunity to work on diverse
                projects that have shaped my expertise in both frontend and
                backend development.
              </Typography>
              <Typography variant="body1" paragraph>
                My journey in software development began with a curiosity about
                how things work on the web. This curiosity has evolved into a
                professional career where I continuously learn and adapt to new
                technologies while maintaining a focus on writing clean,
                efficient, and maintainable code.
              </Typography>
              <Typography variant="body1">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                through technical blog posts and mentoring.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/path-to-your-photo.jpg"
                alt="Profile"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 4px 20px rgba(0,0,0,0.5)"
                      : "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Skills Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h2" sx={{ mb: 4 }}>
            Skills
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid key={skill.name} item xs={12} sm={6}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {skill.name}
                  </Typography>
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: "background.default",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                          background: (theme) =>
                            theme.palette.mode === "dark"
                              ? "linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)"
                              : "linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, textAlign: "right" }}
                  >
                    {skill.level}%
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

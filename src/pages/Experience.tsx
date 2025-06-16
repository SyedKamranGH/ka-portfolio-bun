import { Box, Container, Typography, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    location: "City, Country",
    period: "2021 - Present",
    description: [
      "Led development of multiple high-impact projects",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and improved deployment processes",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "Software Agency",
    location: "City, Country",
    period: "2019 - 2021",
    description: [
      "Developed and maintained client web applications",
      "Collaborated with cross-functional teams",
      "Optimized application performance and user experience",
    ],
  },
  {
    id: 3,
    type: "education",
    title: "Master of Computer Science",
    company: "University Name",
    location: "City, Country",
    period: "2017 - 2019",
    description: [
      "Specialized in Software Engineering",
      "Research focus on Web Technologies",
      "GPA: 3.8/4.0",
    ],
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University Name",
    location: "City, Country",
    period: "2013 - 2017",
    description: [
      "Major in Computer Science",
      "Minor in Mathematics",
      "Dean's List all semesters",
    ],
  },
];

const Experience = () => {
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
            Experience & Education
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 800 }}
          >
            My professional journey and educational background have shaped my
            expertise in software development and problem-solving abilities.
          </Typography>
        </Box>

        {/* Timeline */}
        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id}>
              <TimelineOppositeContent
                component={motion.div}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ py: 4 }}
              >
                <Typography variant="h6" component="span">
                  {experience.period}
                </Typography>
                <Typography color="text.secondary">
                  {experience.location}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor:
                      experience.type === "work"
                        ? "primary.main"
                        : "secondary.main",
                  }}
                >
                  {experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 4 }}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h6" component="h3">
                    {experience.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {experience.company}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {experience.description.map((item, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Experience;

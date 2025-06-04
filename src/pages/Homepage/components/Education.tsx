import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { School, CalendarToday, EmojiEvents } from "@mui/icons-material";
import { educationData } from "../../../constants/data/education";
import type { Education } from "../../../types";
import Grid from "@mui/material/Grid";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const theme = useTheme();

  return (
    <MotionCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: theme.shadows[4],
        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}05)`,
        border: `1px solid ${theme.palette.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: theme.shadows[8],
          border: `1px solid ${theme.palette.primary.main}40`,
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={3}>
          {/* Header */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: `${theme.palette.primary.main}15`,
                color: theme.palette.primary.main,
              }}
            >
              <School fontSize="large" />
            </Box>

            <Box flex={1}>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
              >
                {education.degree}
              </Typography>

              <Typography
                variant="h6"
                color="primary"
                fontWeight="medium"
                gutterBottom
              >
                {education.university}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                <CalendarToday fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {education.year}
                </Typography>
              </Stack>
            </Box>
          </Stack>

          {/* Description */}
          {education.description && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              {education.description}
            </Typography>
          )}

          {/* Achievements */}
          {/* {education.achievements && education.achievements.length > 0 && (
            <Box>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <EmojiEvents fontSize="small" color="primary" />
                <Typography
                  variant="subtitle2"
                  color="primary"
                  fontWeight="bold"
                >
                  Key Achievements
                </Typography>
              </Stack>

              <Stack spacing={1}>
                {education.achievements.map((achievement, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: 2, position: "relative" }}
                  >
                    <Box
                      component="span"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                      }}
                    />
                    {achievement}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )} */}

          {/* Skills/Subjects */}
          {/* {education.subjects && education.subjects.length > 0 && (
            <Box>
              <Typography
                variant="subtitle2"
                color="text.primary"
                fontWeight="bold"
                gutterBottom
              >
                Key Subjects
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {education.subjects.map((subject, idx) => (
                  <Chip
                    key={idx}
                    label={subject}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}10`,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )} */}

          {/* GPA or Grade */}
          {education.grade && (
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                borderRadius: 2,
                backgroundColor: `${theme.palette.success.main}10`,
                border: `1px solid ${theme.palette.success.main}30`,
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Grade
              </Typography>
              <Typography variant="h6" color="success.main" fontWeight="bold">
                {education.grade}
              </Typography>
            </Box>
          )}
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

export const EducationSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Education
          </Typography>

          <Grid container spacing={4}>
            {educationData.map((education, index) => (
              <Grid item xs={12} md={6} lg={4} key={education.id}>
                <EducationCard education={education} index={index} />
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

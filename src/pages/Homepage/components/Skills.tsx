import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
// import { CustomChip } from "../../../components/Chip";
// import { skillsData } from "../../../constants/data/skills";
import type { SkillDomain } from "../../../types";
import Chip from "@components/Chip";
import { skillDomains } from "@constants/data/skills";
import Grid from "@mui/material/Grid";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface SkillDomainCardProps {
  domain: SkillDomain;
  index: number;
}

const SkillDomainCard: React.FC<SkillDomainCardProps> = ({ domain, index }) => {
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
          {/* Domain Header */}
          <Box textAlign="center">
            <Box
              sx={{
                fontSize: "3rem",
                mb: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* {domain.icon} */}
            </Box>

            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              {domain.title}
            </Typography>

            {/* {domain.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {domain.description}
              </Typography>
            )} */}
          </Box>

          {/* Skills */}
          <Box>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              gap={1}
              justifyContent="center"
            >
              {domain.skills.map((skill) => (
                <Chip
                  key={skill.name}
                  skillName={skill.name}
                  iconText={skill.icon}
                  level={skill.level}
                  variant="outlined"
                  size="medium"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.main}15`,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Proficiency Level */}
          {/* {domain.proficiency && (
            <Box textAlign="center">
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Proficiency Level
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 6,
                  backgroundColor: theme.palette.grey[300],
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${domain.proficiency}%`,
                    height: "100%",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 3,
                    transition: "width 1s ease",
                  }}
                />
              </Box>

              <Typography
                variant="body2"
                color="primary"
                fontWeight="bold"
                sx={{ mt: 1 }}
              >
                {domain.proficiency}%
              </Typography>
            </Box>
          )} */}
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

export const SkillsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
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
            Skills & Technologies
          </Typography>

          <Grid container spacing={4}>
            {skillDomains.map((domain, index) => (
              <Grid item xs={12} md={6} lg={4} key={domain.id}>
                <SkillDomainCard domain={domain} index={index} />
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

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
import CustomChip from "@components/Chip";
import { skillDomains } from "@constants/data/skills";

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
        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}08)`,
        border: `1px solid ${theme.palette.divider}`,
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          boxShadow: theme.shadows[8],
          border: `1px solid ${theme.palette.primary.main}40`,
          transform: "translateY(-4px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: "4px 4px 0 0",
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={3}>
          {/* Domain Header */}
          <Box textAlign="center">
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              color="primary"
              gutterBottom
              sx={{
                mb: 2,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: "2px",
                },
              }}
            >
              {domain.title}
            </Typography>
          </Box>

          {/* Skills */}
          <Box>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              gap={1}
              justifyContent="center"
              sx={{ minHeight: "120px" }}
            >
              {domain.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + skillIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <CustomChip
                    skillName={skill.name}
                    iconText={skill.icon}
                    level={skill.level}
                    variant="outlined"
                    size="medium"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      backgroundColor: `${theme.palette.primary.main}05`,
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}15`,
                        borderColor: theme.palette.primary.main,
                        transform: "scale(1.05)",
                        boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Skill Count Badge */}
          <Box textAlign="center">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                padding: "6px 12px",
                borderRadius: "20px",
                backgroundColor: `${theme.palette.secondary.main}10`,
                border: `1px solid ${theme.palette.secondary.main}30`,
              }}
            >
              <Typography
                variant="caption"
                color="secondary"
                fontWeight="bold"
                sx={{ fontSize: "0.75rem" }}
              >
                {domain.skills.length} Skills
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

// Floating Animation Components
const FloatingIcon: React.FC<{
  icon: string;
  delay: number;
  x: string;
  y: string;
}> = ({ icon, delay, x, y }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.7, 0.3],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        fontSize: "2rem",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {icon}
    </motion.div>
  );
};

const FloatingParticle: React.FC<{
  size: number;
  delay: number;
  x: string;
  y: string;
}> = ({ size, delay, x, y }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.5, 0.2],
        scale: [0.5, 1, 0.5],
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export const SkillsSection: React.FC = () => {
  const theme = useTheme();

  const floatingIcons = [
    { icon: "⚛️", delay: 0, x: "10%", y: "15%" },
    { icon: "🔷", delay: 2, x: "85%", y: "10%" },
    { icon: "🚀", delay: 4, x: "20%", y: "85%" },
    { icon: "💻", delay: 6, x: "75%", y: "80%" },
    { icon: "⚡", delay: 8, x: "5%", y: "50%" },
    { icon: "🎯", delay: 10, x: "90%", y: "45%" },
  ];

  const floatingParticles = [
    { size: 8, delay: 0, x: "25%", y: "30%" },
    { size: 12, delay: 2, x: "70%", y: "25%" },
    { size: 6, delay: 4, x: "15%", y: "70%" },
    { size: 10, delay: 6, x: "80%", y: "65%" },
    { size: 14, delay: 8, x: "45%", y: "20%" },
    { size: 9, delay: 10, x: "60%", y: "75%" },
  ];

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Background Elements */}
      {floatingIcons.map((item, index) => (
        <FloatingIcon
          key={index}
          icon={item.icon}
          delay={item.delay}
          x={item.x}
          y={item.y}
        />
      ))}

      {floatingParticles.map((particle, index) => (
        <FloatingParticle
          key={index}
          size={particle.size}
          delay={particle.delay}
          x={particle.x}
          y={particle.y}
        />
      ))}

      {/* Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 20%, ${theme.palette.primary.main}05 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, ${theme.palette.secondary.main}05 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              color="primary"
              gutterBottom
              sx={{
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: "2px",
                },
              }}
            >
              Skills & Technologies
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 3, maxWidth: "600px", mx: "auto", fontSize: "1.1rem" }}
            >
              A comprehensive overview of the technologies and tools I work with
              to create exceptional digital experiences.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {skillDomains.map((domain, index) => (
              <Box key={domain.title}>
                <SkillDomainCard domain={domain} index={index} />
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

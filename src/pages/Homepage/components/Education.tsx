import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
  Avatar,
  IconButton,
  Fade,
  Collapse,
} from "@mui/material";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  School,
  CalendarToday,
  LocationOn,
  ExpandMore,
  Grade,
  Timeline,
} from "@mui/icons-material";
import { educationData } from "../../../constants/data/education";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import type { Education } from "../../../types";
import "./Education.scss";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Floating background orbs
const FloatingOrb: React.FC<{
  size: number;
  color: string;
  delay: number;
  x: string;
  y: string;
}> = ({ size, color, delay, x, y }) => (
  <MotionBox
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    sx={{
      position: "absolute",
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color}40 0%, ${color}10 70%, transparent 100%)`,
      filter: "blur(1px)",
      zIndex: 0,
    }}
  />
);

interface EducationCardProps {
  education: Education;
  index: number;
  isActive: boolean;
  onCardClick: (index: number) => void;
}

const EducationCard: React.FC<EducationCardProps> = ({
  education,
  index,
  isActive,
  onCardClick,
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionBox
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onClick={() => onCardClick(index)}
      sx={{
        cursor: "pointer",
        height: "100%",
      }}
    >
      <MotionCard
        className={`education-card ${isActive ? "active" : ""}`}
        sx={{
          width: { xs: 300, sm: 320, md: 350 },
          height: 280,
          background: isLightMode
            ? "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)"
            : "linear-gradient(145deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.8) 100%)",
          backdropFilter: "blur(20px)",
          border: `2px solid ${
            isActive ? theme.palette.primary.main : "rgba(255,255,255,0.1)"
          }`,
          borderRadius: "16px",
          boxShadow: isActive
            ? `0 20px 40px ${theme.palette.primary.main}20`
            : "0 8px 24px rgba(0,0,0,0.1)",
          overflow: "hidden",
          position: "relative",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
          },
        }}
      >
        <CardContent sx={{ p: 3, height: "100%" }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            {/* Header */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar
                sx={{
                  bgcolor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                  width: 48,
                  height: 48,
                }}
              >
                <School />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 0.5,
                    fontSize: "1.1rem",
                  }}
                >
                  {education.degree}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                  }}
                >
                  {education.university}
                </Typography>
              </Box>
            </Stack>

            {/* Info */}
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarToday fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {education.year}
                </Typography>
              </Stack>
              {education.location && (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {education.location}
                  </Typography>
                </Stack>
              )}
            </Stack>

            {/* Grade */}
            {education.grade && (
              <Box>
                <Chip
                  icon={<Grade />}
                  label={education.grade}
                  size="small"
                  sx={{
                    bgcolor: `${theme.palette.success.main}15`,
                    color: theme.palette.success.main,
                    fontWeight: 500,
                  }}
                />
              </Box>
            )}

            {/* Description */}
            {education.description && (
              <Box sx={{ mt: "auto" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {education.description}
                </Typography>
              </Box>
            )}
          </Stack>
        </CardContent>
      </MotionCard>
    </MotionBox>
  );
};

export const EducationSection: React.FC = () => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % educationData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="education"
      className={`education-section ${
        isLightMode ? "light-mode" : "dark-mode"
      }`}
      sx={{
        position: "relative",
        py: 10,
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Floating Background Orbs */}
      <FloatingOrb
        size={120}
        color={theme.palette.primary.main}
        delay={0}
        x="10%"
        y="20%"
      />
      <FloatingOrb
        size={80}
        color={theme.palette.secondary.main}
        delay={2}
        x="85%"
        y="15%"
      />
      <FloatingOrb
        size={100}
        color={theme.palette.primary.main}
        delay={4}
        x="20%"
        y="80%"
      />
      <FloatingOrb
        size={60}
        color={theme.palette.secondary.main}
        delay={6}
        x="75%"
        y="75%"
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            title="Education Journey"
            subtitle="Discover my academic background and achievements"
          />
        </MotionBox>

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: `repeat(${Math.min(educationData.length, 4)}, 1fr)`,
            },
            gap: 3,
            mt: 6,
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              isActive={activeCard === index}
              onCardClick={handleCardClick}
            />
          ))}
        </Box>

        {/* Card Navigation */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          {educationData.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveCard(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor:
                  activeCard === index
                    ? theme.palette.primary.main
                    : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  scale: 1.2,
                  bgcolor: theme.palette.primary.main,
                },
              }}
            />
          ))}
        </MotionBox>

        {/* Active Card Title */}
        <MotionBox
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            textAlign: "center",
            mt: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            {educationData[activeCard]?.degree}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {educationData[activeCard]?.university}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { educationData } from "../../../../constants/data/education";
import { SectionHeader } from "../../../../components/SectionHeader/SectionHeader";
import { EducationCard } from "./EducationCard";
import { EducationAnimations } from "./EducationAnimations";
import "./Education.scss";

const MotionBox = motion(Box);

export const Education: React.FC = () => {
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
      className="education-section"
    >
      {/* Background Animations */}
      <EducationAnimations />

      <Container maxWidth="xl" className="education-section__container">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="education-section__header"
        >
          <SectionHeader
            title="Education Journey"
            subtitle="Discover my academic background and achievements"
          />
        </MotionBox>

        {/* Cards Grid */}
        <Box className="education-section__grid">
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

        {/* Navigation Dots */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="education-section__navigation"
        >
          {educationData.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveCard(index)}
              className={`education-section__dot ${
                activeCard === index ? "education-section__dot--active" : ""
              }`}
            />
          ))}
        </MotionBox>

        {/* Active Card Title */}
        <MotionBox
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="education-section__title"
        >
          <Typography variant="h4" className="education-section__active-title">
            {educationData[activeCard]?.degree}
          </Typography>
          <Typography
            variant="h6"
            className="education-section__active-subtitle"
          >
            {educationData[activeCard]?.university}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

// Named export for compatibility with existing imports
export const EducationSection = Education;

// Default export
export default Education;

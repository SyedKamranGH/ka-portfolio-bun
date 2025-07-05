import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExperienceCard } from "../../../components/Card/ExperienceCard";
import { experiences } from "../../../constants/data/experiences";
import type { Experience } from "../../../types";

const MotionBox = motion(Box);
const MotionTimelineItem = motion(TimelineItem);

// Tech-themed floating elements
const TechIcon = ({
  children,
  delay = 0,
  duration = 8,
  x = "50%",
  y = "50%",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: string;
  y?: string;
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 50, rotate: 0 }}
    animate={{
      opacity: [0.6, 1, 0.6],
      y: [-20, -60, -20],
      rotate: [0, 360, 0],
      x: [-15, 15, -15],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    sx={{
      position: "absolute",
      left: x,
      top: y,
      fontSize: "2.5rem",
      color: "primary.main",
      opacity: 0.7,
      zIndex: 0,
    }}
  >
    {children}
  </MotionBox>
);

const CodeSnippet = ({
  text,
  delay = 0,
  x,
  y,
}: {
  text: string;
  delay?: number;
  x: string;
  y: string;
}) => {
  const theme = useTheme();

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.5, 0.9, 0.5],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      sx={{
        position: "absolute",
        left: x,
        top: y,
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)"
            : "linear-gradient(135deg, rgba(30, 42, 71, 0.5) 0%, rgba(74, 54, 106, 0.5) 100%)",
        backdropFilter: "blur(10px)",
        borderRadius: 2,
        p: 1.5,
        border: `2px solid ${
          theme.palette.mode === "light"
            ? "rgba(30, 58, 138, 0.4)"
            : "rgba(167, 139, 250, 0.4)"
        }`,
        fontFamily: "monospace",
        fontSize: "0.85rem",
        color: theme.palette.secondary.main,
        opacity: 0.8,
        zIndex: 0,
        boxShadow:
          theme.palette.mode === "light"
            ? "0 4px 20px rgba(30, 58, 138, 0.3)"
            : "0 4px 20px rgba(74, 54, 106, 0.4)",
      }}
    >
      {text}
    </MotionBox>
  );
};

const FloatingParticle = ({
  size = 4,
  delay = 0,
  x,
  y,
}: {
  size?: number;
  delay?: number;
  x: string;
  y: string;
}) => {
  const theme = useTheme();

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.5, 1.4, 0.5],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
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
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        opacity: 0.7,
        zIndex: 0,
        boxShadow: `0 0 ${size * 2}px ${theme.palette.primary.main}`,
      }}
    />
  );
};

export const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleExperienceClick = (experience: Experience) => {
    navigate(`/experience/${experience.id}`);
  };

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
              : "linear-gradient(135deg, #0f1419 0%, #1e2a47 100%)",
          zIndex: 0,
        },
      }}
    >
      {/* Animated Tech Background - Positioned below header area */}
      <Box
        sx={{
          position: "absolute",
          top: "25%", // Start after header area
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Floating Tech Icons - Positioned in timeline area only */}
        <TechIcon delay={0} duration={12} x="10%" y="15%">
          ⚛️
        </TechIcon>
        <TechIcon delay={2} duration={10} x="85%" y="10%">
          🔷
        </TechIcon>
        <TechIcon delay={4} duration={14} x="20%" y="25%">
          ⚡
        </TechIcon>
        <TechIcon delay={6} duration={11} x="75%" y="30%">
          🚀
        </TechIcon>
        <TechIcon delay={8} duration={9} x="5%" y="45%">
          💻
        </TechIcon>
        <TechIcon delay={10} duration={13} x="90%" y="40%">
          🎯
        </TechIcon>
        <TechIcon delay={12} duration={15} x="15%" y="65%">
          📱
        </TechIcon>
        <TechIcon delay={14} duration={8} x="80%" y="70%">
          ⚙️
        </TechIcon>
        <TechIcon delay={16} duration={12} x="30%" y="80%">
          🌐
        </TechIcon>
        <TechIcon delay={18} duration={10} x="65%" y="85%">
          🔧
        </TechIcon>
        <TechIcon delay={20} duration={11} x="45%" y="15%">
          📊
        </TechIcon>
        <TechIcon delay={22} duration={13} x="55%" y="55%">
          💡
        </TechIcon>
        <TechIcon delay={24} duration={9} x="25%" y="40%">
          🎨
        </TechIcon>
        <TechIcon delay={26} duration={14} x="70%" y="20%">
          📈
        </TechIcon>
        <TechIcon delay={28} duration={12} x="35%" y="90%">
          🔥
        </TechIcon>

        {/* Floating Code Snippets - Timeline area only */}
        <CodeSnippet text="const experience = {}" delay={1} x="18%" y="22%" />
        <CodeSnippet text="<React.FC>" delay={3} x="78%" y="18%" />
        <CodeSnippet text="TypeScript" delay={5} x="8%" y="58%" />
        <CodeSnippet text="Next.js" delay={7} x="82%" y="68%" />
        <CodeSnippet text="interface Props" delay={9} x="22%" y="78%" />
        <CodeSnippet text="useState()" delay={11} x="72%" y="42%" />
        <CodeSnippet text="useEffect()" delay={13} x="12%" y="38%" />
        <CodeSnippet text="async/await" delay={15} x="88%" y="52%" />
        <CodeSnippet text="export default" delay={17} x="32%" y="12%" />
        <CodeSnippet text="import React" delay={19} x="58%" y="28%" />
        <CodeSnippet text="const [state]" delay={21} x="38%" y="48%" />
        <CodeSnippet text="=> {}" delay={23} x="68%" y="62%" />
        <CodeSnippet text="npm install" delay={25} x="28%" y="92%" />
        <CodeSnippet text="git commit" delay={27} x="78%" y="88%" />
        <CodeSnippet text="className=" delay={29} x="48%" y="8%" />
        <CodeSnippet text="return (" delay={31} x="88%" y="32%" />
        <CodeSnippet text="props.children" delay={33} x="18%" y="72%" />
        <CodeSnippet text="styled-components" delay={35} x="62%" y="78%" />

        {/* Floating Particles - Timeline area only */}
        <FloatingParticle size={8} delay={0} x="28%" y="28%" />
        <FloatingParticle size={12} delay={2} x="68%" y="32%" />
        <FloatingParticle size={6} delay={4} x="18%" y="52%" />
        <FloatingParticle size={14} delay={6} x="78%" y="62%" />
        <FloatingParticle size={7} delay={8} x="32%" y="72%" />
        <FloatingParticle size={10} delay={10} x="58%" y="22%" />
        <FloatingParticle size={9} delay={12} x="8%" y="68%" />
        <FloatingParticle size={11} delay={14} x="82%" y="42%" />
        <FloatingParticle size={5} delay={16} x="42%" y="82%" />
        <FloatingParticle size={13} delay={18} x="92%" y="28%" />
        <FloatingParticle size={8} delay={20} x="52%" y="38%" />
        <FloatingParticle size={6} delay={22} x="12%" y="82%" />
        <FloatingParticle size={10} delay={24} x="72%" y="18%" />
        <FloatingParticle size={9} delay={26} x="38%" y="58%" />
        <FloatingParticle size={7} delay={28} x="88%" y="72%" />
        <FloatingParticle size={11} delay={30} x="22%" y="48%" />
        <FloatingParticle size={12} delay={32} x="62%" y="88%" />
        <FloatingParticle size={8} delay={34} x="48%" y="12%" />
        <FloatingParticle size={6} delay={36} x="78%" y="48%" />
        <FloatingParticle size={14} delay={38} x="8%" y="28%" />

        {/* Animated Lines/Connections - Timeline area */}
        <MotionBox
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          sx={{
            position: "absolute",
            top: "20%",
            left: "20%",
            zIndex: 0,
          }}
        >
          <svg width="200" height="100" style={{ opacity: 0.5 }}>
            <motion.path
              d="M 0 50 Q 100 0 200 50"
              stroke={theme.palette.primary.main}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>
        </MotionBox>

        <MotionBox
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          sx={{
            position: "absolute",
            top: "60%",
            right: "15%",
            zIndex: 0,
          }}
        >
          <svg width="150" height="80" style={{ opacity: 0.5 }}>
            <motion.path
              d="M 0 40 Q 75 0 150 40"
              stroke={theme.palette.secondary.main}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>
        </MotionBox>

        <MotionBox
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          sx={{
            position: "absolute",
            top: "40%",
            left: "60%",
            zIndex: 0,
          }}
        >
          <svg width="120" height="60" style={{ opacity: 0.4 }}>
            <motion.path
              d="M 0 30 Q 60 60 120 30"
              stroke={theme.palette.primary.main}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>
        </MotionBox>

        {/* Geometric Shapes - Timeline area */}
        <MotionBox
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: 60,
            height: 60,
            border: `3px solid ${theme.palette.primary.main}`,
            borderRadius: "50%",
            opacity: 0.5,
            zIndex: 0,
          }}
        />

        <MotionBox
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            bottom: "15%",
            left: "8%",
            width: 40,
            height: 40,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: 2,
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        <MotionBox
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            top: "70%",
            right: "25%",
            width: 50,
            height: 50,
            border: `2px solid ${theme.palette.secondary.main}`,
            borderRadius: 1,
            opacity: 0.4,
            zIndex: 0,
          }}
        />

        <MotionBox
          animate={{
            rotate: [180, -180],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            top: "30%",
            left: "25%",
            width: 35,
            height: 35,
            background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            borderRadius: "50%",
            opacity: 0.5,
            zIndex: 0,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Simple Header - Consistent with other sections */}
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Professional Experience
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: theme.palette.text.secondary,
              mb: 8,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            My journey through various roles and experiences in the tech
            industry
          </Typography>

          <Timeline position="alternate">
            {experiences.map((experience: Experience, index: number) => (
              <MotionTimelineItem
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: theme.palette.background.paper,
                      border: `4px solid ${theme.palette.primary.main}`,
                      width: 24,
                      height: 24,
                      boxShadow: `0 0 0 6px ${
                        theme.palette.mode === "light" ? "#ffffff" : "#1e2a47"
                      }`,
                      transition: "all 0.3s ease",
                      zIndex: 3,
                      "&:hover": {
                        transform: "scale(1.2)",
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      },
                    }}
                  />
                  {index < experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        width: 4,
                        borderRadius: 2,
                        minHeight: 60,
                        zIndex: 3,
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <MotionBox
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    sx={{ zIndex: 3, position: "relative" }}
                  >
                    <ExperienceCard
                      experience={experience}
                      onClick={() => handleExperienceClick(experience)}
                    />
                  </MotionBox>
                </TimelineContent>
              </MotionTimelineItem>
            ))}
          </Timeline>

          {/* Call to Action */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            sx={{
              textAlign: "center",
              mt: 6,
              p: 4,
              borderRadius: 3,
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.8)"
                  : "rgba(30, 42, 71, 0.8)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${
                theme.palette.mode === "light" ? "#e2e8f0" : "#334155"
              }`,
              zIndex: 3,
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Want to know more?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: "400px",
                mx: "auto",
              }}
            >
              Click on any experience card to view detailed information about my
              roles, responsibilities, and achievements.
            </Typography>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

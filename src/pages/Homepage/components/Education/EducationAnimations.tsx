import React from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { EDUCATION_ANIMATION_CONFIG } from "../../../../constants/data/education";
import { TechIcon } from "../../../../components/Animations/TechIcon";
import { FloatingParticle } from "../../../../components/Animations/FloatingParticle";
import { GeometricShape } from "../../../../components/Animations/GeometricShape";

const MotionBox = motion(Box);

// Local FloatingOrb component for education-specific orbs
const FloatingOrb: React.FC<{
  size: number;
  color: "primary" | "secondary";
  delay: number;
  x: string;
  y: string;
}> = ({ size, color, delay, x, y }) => {
  const theme = useTheme();
  const orbColor =
    color === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  return (
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
      className="floating-orb"
      sx={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${orbColor}40 0%, ${orbColor}10 70%, transparent 100%)`,
        filter: "blur(1px)",
        zIndex: 0,
      }}
    />
  );
};

interface EducationAnimationsProps {
  className?: string;
}

export const EducationAnimations: React.FC<EducationAnimationsProps> = ({
  className = "",
}) => {
  const config = EDUCATION_ANIMATION_CONFIG;

  return (
    <Box
      className={`education-animations ${className}`}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Floating Orbs */}
      {config.FLOATING_ORBS?.map((orbConfig, index) => (
        <FloatingOrb
          key={`floating-orb-${index}`}
          size={orbConfig.size}
          color={orbConfig.color}
          delay={orbConfig.delay}
          x={orbConfig.x}
          y={orbConfig.y}
        />
      ))}

      {/* Academic Icons */}
      {config.ACADEMIC_ICONS?.map((iconConfig, index) => (
        <TechIcon
          key={`academic-icon-${index}`}
          icon={iconConfig.icon}
          delay={iconConfig.delay}
          duration={iconConfig.duration}
          x={iconConfig.x}
          y={iconConfig.y}
        />
      ))}

      {/* Particles - Updated to use PARTICLES instead of FLOATING_PARTICLES */}
      {config.PARTICLES?.map((particleConfig, index) => (
        <MotionBox
          key={`particle-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, particleConfig.opacity, 0],
            scale: [0.5, 1, 0.5],
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: particleConfig.duration,
            delay: particleConfig.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            width: particleConfig.size,
            height: particleConfig.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.1) 100%)",
            filter: "blur(0.5px)",
            zIndex: 0,
          }}
        />
      ))}

      {/* Simple Geometric Shapes - Fallback implementation */}
      {[...Array(3)].map((_, index) => (
        <MotionBox
          key={`shape-${index}`}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 15 + index * 3,
            delay: index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            left: `${20 + index * 30}%`,
            top: `${15 + index * 25}%`,
            width: 40 + index * 10,
            height: 40 + index * 10,
            borderRadius: index % 2 === 0 ? "50%" : "8px",
            background: `linear-gradient(45deg, 
              ${
                index === 0
                  ? "rgba(59, 130, 246, 0.1)"
                  : index === 1
                  ? "rgba(168, 85, 247, 0.1)"
                  : "rgba(34, 197, 94, 0.1)"
              } 0%, 
              transparent 70%
            )`,
            border: `1px solid ${
              index === 0
                ? "rgba(59, 130, 246, 0.2)"
                : index === 1
                ? "rgba(168, 85, 247, 0.2)"
                : "rgba(34, 197, 94, 0.2)"
            }`,
            zIndex: 0,
          }}
        />
      ))}
    </Box>
  );
};

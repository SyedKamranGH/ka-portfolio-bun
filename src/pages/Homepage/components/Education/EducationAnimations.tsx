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
      {config.FLOATING_ORBS.map((orbConfig, index) => (
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
      {config.ACADEMIC_ICONS.map((iconConfig, index) => (
        <TechIcon
          key={`academic-icon-${index}`}
          icon={iconConfig.icon}
          delay={iconConfig.delay}
          duration={iconConfig.duration}
          x={iconConfig.x}
          y={iconConfig.y}
        />
      ))}

      {/* Floating Particles */}
      {config.FLOATING_PARTICLES.map((particleConfig, index) => (
        <FloatingParticle
          key={`particle-${index}`}
          size={particleConfig.size}
          delay={particleConfig.delay}
          x={particleConfig.x}
          y={particleConfig.y}
        />
      ))}

      {/* Geometric Shapes */}
      {config.GEOMETRIC_SHAPES.map((shapeConfig, index) => (
        <GeometricShape
          key={`shape-${index}`}
          type={shapeConfig.type}
          size={shapeConfig.size}
          position={shapeConfig.position}
          animation={shapeConfig.animation}
        />
      ))}
    </Box>
  );
};

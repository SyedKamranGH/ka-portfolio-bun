import React from "react";
import { Box } from "@mui/material";
import { EXPERIENCE_ANIMATION_CONFIG } from "../../constants/data/experiences";
import { TechIcon } from "./TechIcon";
import { CodeSnippet } from "./CodeSnippet";
import { FloatingParticle } from "./FloatingParticle";
import { AnimatedLine } from "./AnimatedLine";
import { GeometricShape } from "./GeometricShape";

interface ExperienceAnimationsProps {
  className?: string;
}

export const ExperienceAnimations: React.FC<ExperienceAnimationsProps> = ({
  className = "",
}) => {
  const config = EXPERIENCE_ANIMATION_CONFIG;

  return (
    <Box className={`experience-animations ${className}`}>
      {/* Tech Icons */}
      {config.TECH_ICONS.map((iconConfig, index) => (
        <TechIcon
          key={`tech-icon-${index}`}
          icon={iconConfig.icon}
          delay={iconConfig.delay}
          duration={iconConfig.duration}
          x={iconConfig.x}
          y={iconConfig.y}
        />
      ))}

      {/* Code Snippets */}
      {config.CODE_SNIPPETS.map((snippetConfig, index) => (
        <CodeSnippet
          key={`code-snippet-${index}`}
          text={snippetConfig.text}
          delay={snippetConfig.delay}
          x={snippetConfig.x}
          y={snippetConfig.y}
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

      {/* Animated Lines */}
      {config.ANIMATED_LINES.map((lineConfig, index) => (
        <AnimatedLine
          key={`line-${index}`}
          position={lineConfig.position}
          svg={lineConfig.svg}
          path={lineConfig.path}
          strokeWidth={lineConfig.strokeWidth}
          duration={lineConfig.duration}
          delay={lineConfig.delay}
          useSecondaryColor={index === 1} // Second line uses secondary color
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

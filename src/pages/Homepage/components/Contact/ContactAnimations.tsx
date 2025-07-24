import React from "react";
import { Box } from "@mui/material";
import {
  FloatingParticle,
  GeometricShape,
} from "../../../../components/Animations";

export const ContactAnimations: React.FC = () => {
  const particles = [
    { x: "10%", y: "20%", delay: 0 },
    { x: "90%", y: "15%", delay: 1 },
    { x: "15%", y: "80%", delay: 2 },
    { x: "85%", y: "75%", delay: 3 },
    { x: "50%", y: "10%", delay: 1.5 },
    { x: "25%", y: "45%", delay: 2.5 },
  ];

  const shapes = [
    {
      type: "circle" as const,
      size: 80,
      position: { right: "10%", top: "20%" },
      animation: { rotate: [0, 360], scale: [1, 1.2, 1], duration: 20 },
    },
    {
      type: "roundedSquare" as const,
      size: 60,
      position: { left: "8%", bottom: "25%" },
      animation: { rotate: [0, -360], scale: [1, 0.8, 1], duration: 25 },
    },
    {
      type: "gradientCircle" as const,
      size: 40,
      position: { right: "15%", bottom: "30%" },
      animation: {
        rotate: [0, 180, 360],
        scale: [0.8, 1.3, 0.8],
        duration: 15,
      },
    },
  ];

  return (
    <Box className="contact-animations">
      {particles.map((particle, index) => (
        <FloatingParticle
          key={`contact-particle-${index}`}
          size={6}
          delay={particle.delay}
          x={particle.x}
          y={particle.y}
        />
      ))}

      {shapes.map((shape, index) => (
        <GeometricShape
          key={`contact-shape-${index}`}
          type={shape.type}
          size={shape.size}
          position={shape.position}
          animation={shape.animation}
        />
      ))}
    </Box>
  );
};

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import type { SocialMediaLink } from "../../../../utils/contactUtils";

interface SocialButtonProps extends SocialMediaLink {}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  label,
  url,
  color,
}) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -3, 3, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add analytics tracking if needed
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Tooltip title={label} arrow placement="top">
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        whileInView={{
          opacity: [0, 1],
          scale: [0.8, 1],
          rotate: [90, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: Math.random() * 0.2, // Stagger animation slightly
        }}
        className="social-button"
      >
        <IconButton
          size="large"
          onClick={handleClick}
          aria-label={label}
          className="social-button__icon"
          data-color={color}
          sx={{
            // Remove default MUI styles that might interfere
            "&:focus": {
              outline: `2px solid ${color}`,
              outlineOffset: "4px",
            },
          }}
        >
          {icon}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};

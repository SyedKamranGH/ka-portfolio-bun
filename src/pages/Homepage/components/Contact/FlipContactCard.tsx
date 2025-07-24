import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { TouchApp } from "@mui/icons-material";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import type { ContactMethod } from "../../../../utils/contactUtils";

interface FlipContactCardProps extends ContactMethod {}

export const FlipContactCard: React.FC<FlipContactCardProps> = ({
  icon,
  title,
  value,
  link,
  action,
  brandColor,
  description,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    if (action) {
      action();
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: 0.1,
        },
      }}
      viewport={{ once: true }}
      className="flip-contact-card"
    >
      <Box
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        className="flip-contact-card__wrapper"
      >
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront={0.6}
          flipSpeedFrontToBack={0.6}
        >
          {/* FRONT SIDE */}
          <Card
            key="front"
            className="flip-contact-card__front"
            data-brand-color={brandColor}
          >
            <CardContent className="flip-contact-card__front-content">
              {/* Icon */}
              <Box
                className="flip-contact-card__icon-wrapper"
                data-brand-color={brandColor}
              >
                <Box
                  className="flip-contact-card__icon"
                  data-brand-color={brandColor}
                >
                  {icon}
                </Box>
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                className="flip-contact-card__title"
                data-brand-color={brandColor}
              >
                {title}
              </Typography>

              {/* Hover indicator */}
              <Box className="flip-contact-card__hover-indicator">
                <TouchApp
                  className="flip-contact-card__touch-icon"
                  data-brand-color={brandColor}
                />
                <Typography
                  variant="caption"
                  className="flip-contact-card__hover-text"
                >
                  Hover for details
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* BACK SIDE */}
          <Card
            key="back"
            onClick={handleClick}
            className="flip-contact-card__back"
            data-brand-color={brandColor}
          >
            <CardContent className="flip-contact-card__back-content">
              {/* Icon */}
              <Box
                className="flip-contact-card__back-icon"
                data-brand-color={brandColor}
              >
                {icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                className="flip-contact-card__back-title"
              >
                {title}
              </Typography>

              {/* Value */}
              <Typography
                variant="body2"
                className="flip-contact-card__value"
                data-brand-color={brandColor}
                data-title={title}
              >
                {value}
              </Typography>

              {/* Description */}
              <Typography
                variant="caption"
                className="flip-contact-card__description"
              >
                {description}
              </Typography>

              {/* Action Button */}
              <Box
                className="flip-contact-card__action-button"
                data-brand-color={brandColor}
              >
                {action ? "Contact Now" : "Visit Profile"}
              </Box>
            </CardContent>
          </Card>
        </ReactCardFlip>
      </Box>
    </motion.div>
  );
};

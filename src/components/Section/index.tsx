import React from "react";
import { Container, Box, Typography } from "@mui/material";
import "./styles.scss";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  background?: "default" | "alternate";
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  fullHeight = false,
  background = "default",
  className = "",
}) => {
  return (
    <Box
      id={id}
      className={`section ${
        fullHeight ? "full-height" : ""
      } ${background} ${className}`}
      component="section"
    >
      <Container maxWidth="lg">
        {title && (
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              className="section-title gradient-text"
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                className="section-subtitle"
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  useTheme,
  Fab,
  IconButton,
  Fade,
  Tooltip,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  KeyboardArrowUp,
} from "@mui/icons-material";
// Update this import to match the actual export from the contact file.
// For example, if you have `export const CONTACT_INFO = {...}` in that file:
import { CONTACT_INFO } from "../../constants/data/contact";
import "./styles.scss";

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false); // Back to conditional visibility

  // Show/hide the scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollClick = () => {
    onScrollToTop();
  };

  return (
    <>
      {/* Enhanced Scroll to Top FAB with proper conditional visibility */}
      <Fade in={isVisible}>
        <Tooltip title="Scroll to top" placement="left" arrow>
          <Fab
            color="primary"
            aria-label="scroll to top"
            className="scroll-to-top-fab"
            onClick={handleScrollClick}
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 1300,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              "&:hover": {
                transform: "translateY(-4px) scale(1.05)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
              },
              "&:active": {
                transform: "translateY(-2px) scale(0.98)",
              },
              // Enhanced visibility in both light and dark modes
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:focus": {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: "2px",
              },
            }}
          >
            <KeyboardArrowUp sx={{ fontSize: "1.5rem" }} />
          </Fab>
        </Tooltip>
      </Fade>

      {/* Main Footer */}
      <Box
        component="footer"
        className="footer"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
          mt: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: 4 }}>
            {/* Contact Section */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              {/* Email */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  component="a"
                  href={`mailto:${CONTACT_INFO.email}`}
                  color="primary"
                  className="contact-icon"
                  aria-label="Email"
                >
                  <Email />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  {CONTACT_INFO.email}
                </Typography>
              </Stack>

              {/* Phone */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  component="a"
                  href={`tel:${CONTACT_INFO.phone}`}
                  color="primary"
                  className="contact-icon"
                  aria-label="Phone"
                >
                  <Phone />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  {CONTACT_INFO.phone}
                </Typography>
              </Stack>

              {/* GitHub */}
              <IconButton
                component="a"
                href={CONTACT_INFO.github.url}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="contact-icon"
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>

              {/* LinkedIn */}
              <IconButton
                component="a"
                href={CONTACT_INFO.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="contact-icon"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* Copyright */}
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ opacity: 0.8 }}
            >
              © {new Date().getFullYear()} Portfolio. Built with React 19+ &
              Material-UI. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

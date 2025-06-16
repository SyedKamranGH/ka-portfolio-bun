import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  useTheme,
  Fab,
  IconButton,
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
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Scroll to Top FAB */}
      <Fab
        color="primary"
        aria-label="scroll to top"
        className="scroll-to-top-fab"
        onClick={onScrollToTop}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          },
        }}
      >
        <KeyboardArrowUp />
      </Fab>

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
              justifyContent="space-between"
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
              © {currentYear} Portfolio. Built with React 19+ &
              Material-UI. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

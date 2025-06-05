import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import "./styles.scss";

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    email: import.meta.env.VITE_EMAIL || "your.email@example.com",
    phone: import.meta.env.VITE_PHONE || "+1 (555) 123-4567",
    github:
      import.meta.env.VITE_GITHUB_USERNAME || "https://github.com/yourusername",
    linkedin:
      import.meta.env.VITE_LINKEDIN_URL ||
      "https://linkedin.com/in/yourusername",
  };

  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Box className="footer__content">
          <Stack spacing={3} alignItems="center">
            {/* Contact Links */}
            <Stack direction="row" spacing={2} className="footer__social">
              <IconButton
                href={`mailto:${contactInfo.email}`}
                className="footer__social-button"
                aria-label="Email"
              >
                <Email />
              </IconButton>

              <IconButton
                href={`tel:${contactInfo.phone}`}
                className="footer__social-button"
                aria-label="Phone"
              >
                <Phone />
              </IconButton>

              <IconButton
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-button"
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>

              <IconButton
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-button"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </Stack>

            <Divider className="footer__divider" />

            {/* Copyright */}
            <Typography variant="body2" className="footer__copyright">
              © {currentYear} Portfolio. Built with React 19 & TypeScript
            </Typography>

            {/* Back to Top */}
            <IconButton
              onClick={onScrollToTop}
              className="footer__scroll-top"
              aria-label="Scroll to top"
            >
              <KeyboardArrowUp />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

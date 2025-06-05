import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  LocationOn,
  Send,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import "./Contact.scss";
import { CONTACT_INFO } from "../../../constants/data/contact";
import Grid from "@mui/material/Grid";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  action?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
  action,
}) => {
  const handleClick = () => {
    if (action) {
      action();
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="contact-card"
        onClick={handleClick}
        sx={{
          cursor: link || action ? "pointer" : "default",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent className="contact-card-content">
          <Box className="contact-icon-wrapper">{icon}</Box>
          <Typography
            variant="h6"
            component="h3"
            className="contact-title"
            sx={{ mt: 2, mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="contact-value"
            color="text.secondary"
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SocialButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  url: string;
  color?: string;
}> = ({ icon, label, url, color }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
      <IconButton
        size="large"
        onClick={() => window.open(url, "_blank")}
        aria-label={label}
        className="social-button"
        sx={{
          bgcolor: color || "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: color || "primary.dark",
          },
        }}
      >
        {icon}
      </IconButton>
    </motion.div>
  );
};

export const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="contact" className="contact-section">
      <Container maxWidth="lg">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            className="section-title"
            align="center"
            sx={{ mb: 2 }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="subtitle1"
            className="section-subtitle"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Let&#39;s connect and discuss opportunities
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<Email className="contact-icon" />}
                title="Email"
                value={CONTACT_INFO.email}
                action={handleEmailClick}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<Phone className="contact-icon" />}
                title="Phone"
                value={CONTACT_INFO.phone}
                action={handlePhoneClick}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<GitHub className="contact-icon" />}
                title="GitHub"
                value={CONTACT_INFO.github.username}
                link={CONTACT_INFO.github.url}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ContactCard
                icon={<LinkedIn className="contact-icon" />}
                title="LinkedIn"
                value={CONTACT_INFO.linkedin.username}
                link={CONTACT_INFO.linkedin.url}
              />
            </Grid> */}
          </Grid>

          {CONTACT_INFO.location && (
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {/* <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
                <ContactCard
                  icon={<LocationOn className="contact-icon" />}
                  title="Location"
                  value={CONTACT_INFO.location}
                />
              </Grid> */}
            </Grid>
          )}

          <Divider sx={{ my: 4 }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box className="social-links-section">
              <Typography
                variant="h5"
                component="h3"
                align="center"
                sx={{ mb: 3 }}
              >
                Connect with me
              </Typography>

              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                className="social-links"
              >
                <SocialButton
                  icon={<GitHub />}
                  label="GitHub Profile"
                  url={CONTACT_INFO.github.url}
                  color="#333"
                />

                <SocialButton
                  icon={<LinkedIn />}
                  label="LinkedIn Profile"
                  url={CONTACT_INFO.linkedin.url}
                  color="#0077B5"
                />

                <SocialButton
                  icon={<Send />}
                  label="Send Email"
                  url={`mailto:${CONTACT_INFO.email}`}
                  color="#EA4335"
                />
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

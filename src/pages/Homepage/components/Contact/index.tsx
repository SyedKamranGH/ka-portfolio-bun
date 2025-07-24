import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  LocationOn,
  Facebook,
  Instagram,
  X,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { SectionHeader } from "../../../../components/SectionHeader/SectionHeader";
import { ContactAnimations } from "./ContactAnimations";
import { FlipContactCard } from "./FlipContactCard";
import { SocialButton } from "./SocialButton";
import { CONTACT_INFO, SOCIAL_MEDIA } from "../../../../constants/data/contact";
import {
  handleEmailClick,
  handlePhoneClick,
  BRAND_COLORS,
} from "../../../../utils/contactUtils";
import type {
  ContactMethod,
  SocialMediaLink,
} from "../../../../utils/contactUtils";
import "./Contact.scss";

export const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Contact methods configuration
  const contactMethods: ContactMethod[] = [
    {
      icon: <Email />,
      title: "Email",
      value: CONTACT_INFO.email,
      action: () => handleEmailClick(CONTACT_INFO.email),
      brandColor: BRAND_COLORS.email,
      description: "Drop me a message anytime",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: CONTACT_INFO.phone,
      action: () => handlePhoneClick(CONTACT_INFO.phone),
      brandColor: BRAND_COLORS.phone,
      description: "Let's have a conversation",
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      value: CONTACT_INFO.github.username,
      link: CONTACT_INFO.github.url,
      brandColor: BRAND_COLORS.github,
      description: "Explore my open source work",
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      value: CONTACT_INFO.linkedin.username,
      link: CONTACT_INFO.linkedin.url,
      brandColor: BRAND_COLORS.linkedin,
      description: "Connect professionally",
    },
    ...(CONTACT_INFO.location
      ? [
          {
            icon: <LocationOn />,
            title: "Location",
            value: CONTACT_INFO.location,
            brandColor: BRAND_COLORS.location,
            description: "Where the magic happens",
          } as ContactMethod,
        ]
      : []),
  ];

  // Social media links configuration
  const socialMediaLinks: SocialMediaLink[] = [
    {
      icon: <Facebook />,
      label: "Facebook Profile",
      url: SOCIAL_MEDIA.facebook,
      color: BRAND_COLORS.facebook,
    },
    {
      icon: <Instagram />,
      label: "Instagram Profile",
      url: SOCIAL_MEDIA.instagram,
      color: BRAND_COLORS.instagram,
    },
    {
      icon: <X />,
      label: "X (Twitter) Profile",
      url: SOCIAL_MEDIA.twitter,
      color: BRAND_COLORS.twitter,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Background Animations */}
      <ContactAnimations />

      <Container maxWidth="lg" className="contact-section__container">
        {/* Section Header */}
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to bring your ideas to life? Let's connect and discuss how we can work together to create something amazing."
          variant="h2"
          className="contact-section__header"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Cards */}
          <Box
            className={`contact-cards-container ${
              contactMethods.length === 5
                ? "contact-cards-container--five-columns"
                : ""
            }`}
          >
            {contactMethods.map((method) => (
              <FlipContactCard key={method.title} {...method} />
            ))}
          </Box>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <Box className="contact-section__divider" />
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Box className="social-links-section">
              {/* Use SectionHeader for consistency */}
              <SectionHeader
                title="Let's Connect"
                subtitle="Follow me on social media for updates and insights"
                variant="h3"
                className="social-links-section__header"
              />

              <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                className="social-links"
              >
                {socialMediaLinks.map((socialLink) => (
                  <SocialButton key={socialLink.label} {...socialLink} />
                ))}
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// Named export for compatibility
export const ContactSection = Contact;

// Default export
export default Contact;

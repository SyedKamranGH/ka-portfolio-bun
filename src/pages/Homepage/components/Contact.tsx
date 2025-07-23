// FINAL SOLUTION - Using react-card-flip Library
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
  useTheme,
} from "@mui/material";
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  LocationOn,
  Send,
  Facebook,
  Instagram,
  X,
  TouchApp,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import {
  FloatingParticle,
  GeometricShape,
} from "../../../components/Animations";
import "./Contact.scss";
import { CONTACT_INFO } from "../../../constants/data/contact";

// Contact Background Animations Component
const ContactAnimations: React.FC = () => {
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

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  action?: () => void;
  brandColor?: string;
  description?: string;
}

// PERFECT Flip Card using react-card-flip
const FlipContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
  action,
  brandColor,
  description,
}) => {
  const theme = useTheme();
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
      style={{ height: 280, width: "100%" }}
    >
      <Box
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        sx={{ height: "100%", width: "100%" }}
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
            sx={{
              height: 280,
              width: "100%",
              background: `linear-gradient(135deg, 
                ${theme.palette.background.paper}90, 
                ${theme.palette.mode === "dark" ? "#1a1f2e" : "#f8fafc"}95)`,
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.05)"
              }`,
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? `0 8px 30px rgba(0,0,0,0.4), 0 0 20px ${brandColor}20`
                    : `0 8px 30px rgba(0,0,0,0.15), 0 0 20px ${brandColor}20`,
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${brandColor}, ${brandColor}80, ${brandColor})`,
              },
            }}
          >
            <CardContent
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${brandColor}20, ${brandColor}40)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: -2,
                    borderRadius: "50%",
                    background: `conic-gradient(${brandColor}60, transparent, ${brandColor}60)`,
                    zIndex: -1,
                    opacity: 0.5,
                  },
                  "& svg": {
                    fontSize: 40,
                    color: brandColor,
                    filter: `drop-shadow(0 0 8px ${brandColor}40)`,
                  },
                }}
              >
                {icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "1.2rem",
                  background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${brandColor})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>

              {/* Hover indicator */}
              <Box sx={{ textAlign: "center", opacity: 0.7 }}>
                <TouchApp sx={{ color: brandColor, fontSize: 22, mb: 0.5 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.75rem",
                    opacity: 0.8,
                  }}
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
            sx={{
              height: 280,
              width: "100%",
              background: `linear-gradient(135deg, 
                ${brandColor}15, 
                ${theme.palette.background.paper}90)`,
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: `2px solid ${brandColor}40`,
              borderRadius: "16px",
              overflow: "hidden",
              cursor: link || action ? "pointer" : "default",
              boxShadow:
                theme.palette.mode === "dark"
                  ? `0 8px 30px rgba(0,0,0,0.4), 0 0 0 1px ${brandColor}30`
                  : `0 8px 30px rgba(0,0,0,0.15), 0 0 0 1px ${brandColor}30`,
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: `conic-gradient(from 0deg at 50% 50%, transparent, ${brandColor}10, transparent)`,
                animation: "slowSpin 20s linear infinite",
                borderRadius: "16px",
              },
              "@keyframes slowSpin": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
            }}
          >
            <CardContent
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${brandColor}, ${brandColor}80)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: `0 0 20px ${brandColor}50`,
                  "& svg": {
                    fontSize: 30,
                    color: "white",
                  },
                }}
              >
                {icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 1.5,
                  fontSize: "1.1rem",
                }}
              >
                {title}
              </Typography>

              {/* Value */}
              <Typography
                variant="body2"
                sx={{
                  color: brandColor,
                  fontWeight: 600,
                  mb: 1.5,
                  fontSize: "0.95rem",
                  fontFamily:
                    title === "Email" || title === "Phone"
                      ? '"JetBrains Mono", monospace'
                      : "inherit",
                  wordBreak: "break-word",
                  background: `linear-gradient(135deg, ${brandColor}, ${brandColor}80)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </Typography>

              {/* Description */}
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                  mb: 2,
                  opacity: 0.9,
                  lineHeight: 1.3,
                }}
              >
                {description}
              </Typography>

              {/* Action Button */}
              <Box
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${brandColor}, ${brandColor}90)`,
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  boxShadow: `0 4px 15px ${brandColor}40`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 6px 20px ${brandColor}50`,
                  },
                }}
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

const SocialButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  url: string;
  color?: string;
}> = ({ icon, label, url, color }) => {
  const theme = useTheme();

  const buttonVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.4 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      whileInView={{
        opacity: [0, 1],
        scale: [0.5, 1],
        rotate: [180, 0],
      }}
      transition={{ duration: 0.6 }}
    >
      <IconButton
        size="large"
        onClick={() => window.open(url, "_blank")}
        aria-label={label}
        className="social-button"
        sx={{
          width: 70,
          height: 70,
          bgcolor: color || theme.palette.primary.main,
          color: "white",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            theme.palette.mode === "dark"
              ? `0 8px 32px ${color ? `${color}40` : "rgba(74, 54, 106, 0.4)"}`
              : `0 8px 32px ${color ? `${color}30` : "rgba(30, 58, 138, 0.3)"}`,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `linear-gradient(45deg, ${
              color || theme.palette.primary.main
            }, ${color || theme.palette.primary.dark})`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            bgcolor: color || theme.palette.primary.dark,
            boxShadow:
              theme.palette.mode === "dark"
                ? `0 12px 48px ${
                    color ? `${color}60` : "rgba(74, 54, 106, 0.6)"
                  }`
                : `0 12px 48px ${
                    color ? `${color}40` : "rgba(30, 58, 138, 0.4)"
                  }`,
            "&::before": {
              opacity: 0.2,
            },
          },
        }}
      >
        {icon}
      </IconButton>
    </motion.div>
  );
};

export const Contact: React.FC = () => {
  const theme = useTheme();

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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const contactMethods = [
    {
      icon: <Email />,
      title: "Email",
      value: CONTACT_INFO.email,
      action: handleEmailClick,
      brandColor: "#EA4335",
      description: "Drop me a message anytime",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: CONTACT_INFO.phone,
      action: handlePhoneClick,
      brandColor: "#34A853",
      description: "Let's have a conversation",
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      value: CONTACT_INFO.github.username,
      link: CONTACT_INFO.github.url,
      brandColor: "#24292e",
      description: "Explore my open source work",
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      value: CONTACT_INFO.linkedin.username,
      link: CONTACT_INFO.linkedin.url,
      brandColor: "#0077B5",
      description: "Connect professionally",
    },
    ...(CONTACT_INFO.location
      ? [
          {
            icon: <LocationOn />,
            title: "Location",
            value: CONTACT_INFO.location,
            brandColor: "#4285F4",
            description: "Where the magic happens",
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Background Animations */}
      <ContactAnimations />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to bring your ideas to life? Let's connect and discuss how we can work together to create something amazing."
          variant="h2"
          className="contact-header"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Cards Row - Now includes location */}
          <Box
            className="contact-cards-container"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md:
                  contactMethods.length === 5
                    ? "repeat(5, 1fr)"
                    : "repeat(4, 1fr)",
                lg:
                  contactMethods.length === 5
                    ? "repeat(5, 1fr)"
                    : "repeat(4, 1fr)",
              },
              gap: { xs: 2, sm: 3, md: 2.5, lg: 3 },
              mb: 8,
              maxWidth: contactMethods.length === 5 ? 1200 : 1100,
              mx: "auto",
            }}
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
            <Box
              sx={{
                height: 2,
                background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
                borderRadius: 1,
                mb: 8,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -1,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: theme.palette.primary.main,
                  boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                },
              }}
            />
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Box className="social-links-section" sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(0,0,0,0.1))",
                }}
              >
                Let&apos;s Connect
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 6,
                  color: theme.palette.text.secondary,
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                Follow me on social media for updates and insights
              </Typography>

              <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                className="social-links"
                sx={{
                  flexWrap: "wrap",
                  gap: 4,
                }}
              >
                <SocialButton
                  icon={<Facebook />}
                  label="Facebook Profile"
                  url="https://facebook.com/yourprofile"
                  color="#1877F2"
                />

                <SocialButton
                  icon={<Instagram />}
                  label="Instagram Profile"
                  url="https://instagram.com/yourprofile"
                  color="#E4405F"
                />

                <SocialButton
                  icon={<X />}
                  label="X (Twitter) Profile"
                  url="https://x.com/yourprofile"
                  color="#000000"
                />
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

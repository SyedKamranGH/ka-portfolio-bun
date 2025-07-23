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
} from "@mui/icons-material";
import { motion } from "framer-motion";
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

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
  action,
  brandColor,
  description,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (action) {
      action();
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      height: 140,
      opacity: 1,
    },
    expanded: {
      height: 220, // Increased from 200 to 220 for better spacing
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
  };

  const detailsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      y: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      y: -8,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    rest: {
      scale: 1,
      opacity: 0,
    },
    hover: {
      scale: 1.4,
      opacity: 0.6,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        height: "auto",
        perspective: "1000px",
      }}
    >
      <Card
        className="contact-card-modern"
        onClick={handleClick}
        sx={{
          cursor: link || action ? "pointer" : "default",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(145deg, 
            ${theme.palette.background.paper}95, 
            ${theme.palette.mode === "dark" ? "#1a1f2e" : "#f8fafc"}90)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.05)"
          }`,
          borderRadius: "24px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 8px 32px rgba(0, 0, 0, 0.4)"
              : "0 8px 32px rgba(0, 0, 0, 0.08)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "24px",
            padding: "2px",
            background: `linear-gradient(145deg, ${
              brandColor || theme.palette.primary.main
            }, transparent, ${brandColor || theme.palette.secondary.main})`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "24px",
            background: `radial-gradient(circle at 50% 50%, ${
              brandColor || theme.palette.primary.main
            }15, transparent 70%)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? `0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${
                    brandColor || theme.palette.primary.main
                  }30`
                : `0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px ${
                    brandColor || theme.palette.primary.main
                  }20`,
            "&::before": {
              opacity: 1,
            },
            "&::after": {
              opacity: 1,
            },
          },
        }}
      >
        <motion.div
          variants={contentVariants}
          animate={isHovered ? "expanded" : "collapsed"}
          style={{ overflow: "hidden" }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            {/* Animated Background Elements */}
            <motion.div
              variants={glowVariants}
              animate={isHovered ? "hover" : "rest"}
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${
                  brandColor || theme.palette.primary.main
                }40, transparent)`,
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />

            {/* Main Icon */}
            <motion.div
              variants={iconVariants}
              animate={isHovered ? "hover" : "rest"}
              style={{
                marginBottom: isHovered ? 16 : 20,
                zIndex: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: `linear-gradient(145deg, ${
                    brandColor || theme.palette.primary.main
                  }20, ${brandColor || theme.palette.primary.main}10)`,
                  color: brandColor || theme.palette.primary.main,
                  position: "relative",
                  border: `2px solid ${
                    brandColor || theme.palette.primary.main
                  }30`,
                  "& svg": {
                    fontSize: 32,
                    filter: `drop-shadow(0 0 8px ${
                      brandColor || theme.palette.primary.main
                    }40)`,
                  },
                }}
              >
                {icon}

                {/* Orbital Ring - Slower Animation */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    border: `1px solid ${
                      brandColor || theme.palette.primary.main
                    }20`,
                    animation: isHovered ? "spin 8s linear infinite" : "none",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: brandColor || theme.palette.primary.main,
                      boxShadow: `0 0 8px ${
                        brandColor || theme.palette.primary.main
                      }`,
                    },
                    "@keyframes spin": {
                      from: { transform: "rotate(0deg)" },
                      to: { transform: "rotate(360deg)" },
                    },
                  }}
                />
              </Box>
            </motion.div>

            {/* Contact Details - Only visible on hover */}
            <motion.div
              variants={detailsVariants}
              animate={isHovered ? "visible" : "hidden"}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0 20px 20px", // Reduced horizontal padding
                zIndex: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  fontSize: "1rem",
                  mb: 1,
                  textShadow:
                    theme.palette.mode === "dark"
                      ? "0 0 10px rgba(0,0,0,0.5)"
                      : "none",
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: brandColor || theme.palette.primary.main,
                  fontSize: "0.8rem", // Slightly smaller font
                  fontWeight: 600,
                  mb: 1,
                  fontFamily:
                    title === "Email" || title === "Phone"
                      ? '"JetBrains Mono", "SF Mono", "Monaco", monospace'
                      : "inherit",
                  textShadow: `0 0 10px ${
                    brandColor || theme.palette.primary.main
                  }40`,
                  wordBreak: "break-word", // Handle long text
                  lineHeight: 1.3,
                  // Truncate very long text
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: value.length > 25 ? "nowrap" : "normal",
                }}
              >
                {value}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.7rem", // Smaller description
                  opacity: 0.8,
                  fontStyle: "italic",
                  lineHeight: 1.2,
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* Always visible title when not hovered - Fixed spacing */}
            {!isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  position: "absolute",
                  bottom: 12, // Moved up slightly from 16
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  padding: "0 16px", // Add horizontal padding
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "0.85rem", // Slightly smaller
                    opacity: 0.9,
                    textAlign: "center",
                  }}
                >
                  {title}
                </Typography>
              </motion.div>
            )}
          </CardContent>
        </motion.div>
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
              <ContactCard key={method.title} {...method} />
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

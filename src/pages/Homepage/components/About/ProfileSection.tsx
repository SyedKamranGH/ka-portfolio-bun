import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Avatar,
  Typography,
  Chip,
  Button,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { coreSkills } from "../../../../constants/data/skills";
import { personalInfo } from "../../../../constants/data/personal";

const MotionBox = motion(Box);

export const ProfileSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  // Create short summary (first 200 characters)
  const shortSummary = personalInfo.aboutMe.substring(0, 300) + "...";
  const additionalText =
    "I believe in writing clean, efficient code and creating user experiences that make a difference. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.";

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box className="about-profile-section">
      <MotionBox
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        sx={{ height: "100%", display: "flex" }}
      >
        <Card className="profile-card">
          <CardContent className="profile-content">
            <Stack className="profile-stack">
              {/* Profile Avatar */}
              <Avatar
                src="/assets/images/profile-about.jpg"
                alt="Profile"
                className="profile-avatar"
              />

              {/* Main Summary */}
              <Box className="profile-text-container">
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="profile-text"
                >
                  {showMore ? personalInfo.aboutMe : shortSummary}
                </Typography>

                <Collapse in={showMore}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="profile-text"
                    sx={{ mt: 1.5 }}
                  >
                    {additionalText}
                  </Typography>
                </Collapse>

                <Box className="show-more-container">
                  <Button
                    variant="text"
                    onClick={handleToggleMore}
                    endIcon={showMore ? <ExpandLess /> : <ExpandMore />}
                    className="show-more-btn"
                    sx={{
                      mt: 1.5,
                      px: 1,
                      py: 0.5,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      textTransform: "none",
                      color: "primary.main",
                      minHeight: "auto",
                      border: "none",
                      borderRadius: "6px",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(25, 118, 210, 0.08)",
                        color: "primary.dark",
                        border: "none",
                        boxShadow: "none",
                      },
                      "&:focus": {
                        border: "none",
                        boxShadow: "none",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "6px",
                        fontSize: "1.1rem",
                      },
                      "& .MuiTouchRipple-root": {
                        display: "none",
                      },
                    }}
                  >
                    {showMore ? "Show less" : "Read more"}
                  </Button>
                </Box>
              </Box>

              {/* Core Skills */}
              <Box className="profile-skills">
                <Typography
                  variant="h6"
                  color="primary"
                  className="skills-title"
                >
                  Core Technologies
                </Typography>
                <Box className="skills-chips">
                  {coreSkills.slice(0, 6).map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      className="skill-chip"
                      size="small"
                    />
                  ))}
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </MotionBox>
    </Box>
  );
};

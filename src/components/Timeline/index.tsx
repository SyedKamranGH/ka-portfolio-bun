import React from "react";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Card, CardContent, Chip, Box } from "@mui/material";
import { Work, School } from "@mui/icons-material";
import type { Experience, Education } from "../../types";
import "./styles.scss";

interface TimelineProps {
  items: (Experience | Education)[];
  type: "experience" | "education";
  onItemClick?: (item: Experience | Education) => void;
}

const Timeline: React.FC<TimelineProps> = ({ items, type, onItemClick }) => {
  const isExperience = (item: Experience | Education): item is Experience => {
    return "jobRole" in item;
  };

  const isEducation = (item: Experience | Education): item is Education => {
    return "degree" in item;
  };

  return (
    <MuiTimeline position="alternate" className="custom-timeline">
      {items.map((item, index) => (
        <TimelineItem key={item.id} className="timeline-item">
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={index % 2 === 0 ? "right" : "left"}
            variant="body2"
            color="text.secondary"
          >
            {isExperience(item) ? item.duration : item.year}
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color="primary"
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                border: 2,
                borderColor: "primary.main",
              }}
            >
              {type === "experience" ? <Work /> : <School />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Card
              className={`timeline-card ${onItemClick ? "clickable" : ""}`}
              onClick={() => onItemClick && onItemClick(item)}
            >
              <CardContent>
                {isExperience(item) && (
                  <>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.jobRole}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {item.summary}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {item.skills.slice(0, 3).map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                      {item.skills.length > 3 && (
                        <Chip
                          label={`+${item.skills.length - 3} more`}
                          size="small"
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </>
                )}

                {isEducation(item) && (
                  <>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.degree}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {item.university}
                    </Typography>
                    {item.description && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {item.description}
                      </Typography>
                    )}
                    {item.grade && (
                      <Typography variant="body2" color="text.secondary">
                        Grade: {item.grade}
                      </Typography>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};

export default Timeline;

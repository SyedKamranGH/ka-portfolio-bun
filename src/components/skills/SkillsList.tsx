import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Collapse,
  useTheme,
} from "@mui/material";
import type { SkillDomain } from "../../types";
import { SkillItem } from "./SkillItem";
import { getSkillGroups } from "@utils/skillUtils";
import "../../styles/components/Skills.scss";

interface SkillsListProps {
  domain: SkillDomain;
  domainIndex: number;
  expandedDomains: Set<number>;
  onToggleExpansion: (domainIndex: number) => void;
}

export const SkillsList: React.FC<SkillsListProps> = ({
  domain,
  domainIndex,
  expandedDomains,
  onToggleExpansion,
}) => {
  const theme = useTheme();
  const { topSkills, remainingSkills } = getSkillGroups(domain);
  const isExpanded = expandedDomains.has(domainIndex);
  const hasMoreSkills = remainingSkills.length > 0;

  return (
    <Box>
      <Typography
        variant="h6"
        className="skills-section__technology-list-title"
        color="text.primary"
      >
        Technology List
      </Typography>
      <Stack spacing={1}>
        {/* Top Skills */}
        {topSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}

        {/* Remaining Skills (Collapsible) */}
        <Collapse in={isExpanded} timeout="auto">
          <Stack spacing={1} sx={{ mt: 1 }}>
            {remainingSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </Stack>
        </Collapse>

        {/* Show More/Less Button */}
        {hasMoreSkills && (
          <Box className="skills-section__show-more">
            <Button
              variant="outlined"
              size="small"
              onClick={() => onToggleExpansion(domainIndex)}
              className="skills-section__show-more-button"
              sx={{
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}10`,
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              {isExpanded
                ? `Show Less (-${remainingSkills.length})`
                : `Show More (+${remainingSkills.length})`}
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

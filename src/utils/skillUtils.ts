import type { SkillDomain } from "../types";
import {
  SKILL_LEVEL_TO_PERCENTAGE,
  SKILL_LEVEL_PRIORITY,
  SKILL_LEVEL_COLORS,
  SKILL_LEVELS,
  CHART_DEFAULTS,
} from "@constants/skills";

/**
 * Calculate domain averages for spider graph
 */
export const getDomainAverages = (skillDomains: SkillDomain[]) => {
  return skillDomains.map((domain) => {
    const average =
      domain.skills.reduce((acc, skill) => {
        return (
          acc +
          (SKILL_LEVEL_TO_PERCENTAGE[skill.level || SKILL_LEVELS.BEGINNER] ||
            25)
        );
      }, 0) / domain.skills.length;
    return {
      domain: domain.title,
      percentage: Math.round(average),
    };
  });
};

/**
 * Get skill level color
 */
export const getSkillLevelColor = (
  level: string = SKILL_LEVELS.BEGINNER
): string => {
  return (
    SKILL_LEVEL_COLORS[level as keyof typeof SKILL_LEVEL_COLORS] ||
    SKILL_LEVEL_COLORS[SKILL_LEVELS.BEGINNER]
  );
};

/**
 * Sort skills by level priority and return top skills and remaining skills
 */
export const getSkillGroups = (domain: SkillDomain) => {
  const sortedSkills = domain.skills.sort((a, b) => {
    const aLevel = SKILL_LEVEL_PRIORITY[a.level || SKILL_LEVELS.BEGINNER] || 1;
    const bLevel = SKILL_LEVEL_PRIORITY[b.level || SKILL_LEVELS.BEGINNER] || 1;
    return bLevel - aLevel; // Sort in descending order (highest first)
  });

  const topSkills = sortedSkills.slice(0, CHART_DEFAULTS.TOP_SKILLS_COUNT);
  const remainingSkills = sortedSkills.slice(CHART_DEFAULTS.TOP_SKILLS_COUNT);

  return { topSkills, remainingSkills };
};

/**
 * Calculate overall statistics
 */
export const calculateOverallStatistics = (skillDomains: SkillDomain[]) => {
  const totalSkills = skillDomains.reduce(
    (acc, domain) => acc + domain.skills.length,
    0
  );

  const totalExpertSkills = skillDomains.reduce(
    (acc, domain) =>
      acc +
      domain.skills.filter((skill) => skill.level === SKILL_LEVELS.EXPERT)
        .length,
    0
  );

  const overallAverage = Math.round(
    skillDomains.reduce((acc, domain) => {
      const domainAverage =
        domain.skills.reduce((skillAcc, skill) => {
          return (
            skillAcc +
            (SKILL_LEVEL_TO_PERCENTAGE[skill.level || SKILL_LEVELS.BEGINNER] ||
              25)
          );
        }, 0) / domain.skills.length;
      return acc + domainAverage;
    }, 0) / skillDomains.length
  );

  return {
    totalSkills,
    totalExpertSkills,
    overallAverage,
  };
};

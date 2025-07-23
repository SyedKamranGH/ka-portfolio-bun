import React from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import type { TabPanelProps } from "../../types";
import { ANIMATION_VARIANTS } from "../../constants/tabsConfig";

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
}) => {
  const isActive = value === index;

  return (
    <Box
      role="tabpanel"
      id={`projects-tabpanel-${index}`}
      aria-labelledby={`projects-tab-${index}`}
      className="tab-panel"
    >
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={`panel-${index}`}
            variants={ANIMATION_VARIANTS.tabPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="tab-panel-content"
          >
            <Box className="tab-panel-inner">
              <motion.div
                variants={ANIMATION_VARIANTS.content}
                className="tab-panel-children"
              >
                {children}
              </motion.div>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

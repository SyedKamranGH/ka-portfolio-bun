// Pagination constants
export const PAGINATION_CONFIG = {
  INITIAL_PROJECTS_COUNT: 6,
  EXPAND_ANIMATION_DELAY: 300,
  SCROLL_DELAY: 100,
} as const;

// Animation variants
export const ANIMATION_VARIANTS = {
  // Tab Panel Animation Variants
  tabPanel: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  },

  // Content Animation Variants
  content: {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },

  // Card Animation Variants
  card: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },

  // Container Animation Variants
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Tab Animation Variants
  tab: {
    inactive: {
      scale: 0.95,
      y: 8,
      rotateX: 20,
      transformOrigin: "bottom",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    active: {
      scale: 1,
      y: 0,
      rotateX: 0,
      transformOrigin: "bottom",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      rotateX: -8,
      transformOrigin: "bottom",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },

  // Button Animation Variants
  button: {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  },

  // Particle Animation Variants
  particle: {
    animate: {
      y: [0, -10, 0],
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Glow Animation Variants
  glow: {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

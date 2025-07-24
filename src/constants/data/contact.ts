import type { ContactInfo } from "../../types/index";

export const CONTACT_INFO: ContactInfo = {
  email: import.meta.env.VITE_EMAIL || "syed.kam.ahmed@gmail.com",
  phone: import.meta.env.VITE_PHONE || "+92-332-449-2711",
  github: {
    username: import.meta.env.VITE_GITHUB_USERNAME || "syed-kamran-ahmad",
    url:
      import.meta.env.VITE_GITHUB_URL || "https://github.com/syed-kamran-ahmad",
  },
  linkedin: {
    username:
      import.meta.env.VITE_LINKEDIN_USERNAME ||
      "syed-kamran-ahmad-sk3324492711",
    url:
      import.meta.env.VITE_LINKEDIN_URL ||
      "https://www.linkedin.com/in/syed-kamran-ahmad-sk3324492711/",
  },
  location: import.meta.env.VITE_LOCATION || "Lahore, Punjab, Pakistan",
};

// Social Media URLs
export const SOCIAL_MEDIA = {
  facebook:
    import.meta.env.VITE_FACEBOOK_URL ||
    "https://facebook.com/syed.kamran.ahmad",
  instagram:
    import.meta.env.VITE_INSTAGRAM_URL ||
    "https://instagram.com/syed.kamran.ahmad",
  twitter:
    import.meta.env.VITE_TWITTER_URL || "https://x.com/syed_kamran_ahmad",
};

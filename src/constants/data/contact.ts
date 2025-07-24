import type { ContactInfo } from "../../types/index";

export const CONTACT_INFO: ContactInfo = {
  email: import.meta.env.VITE_EMAIL || "your.email@example.com",
  phone: import.meta.env.VITE_PHONE || "+1234567890",
  github: {
    username: import.meta.env.VITE_GITHUB_USERNAME || "your-github-username",
    url:
      import.meta.env.VITE_GITHUB_URL ||
      "https://github.com/your-github-username",
  },
  linkedin: {
    username:
      import.meta.env.VITE_LINKEDIN_USERNAME || "your-linkedin-username",
    url:
      import.meta.env.VITE_LINKEDIN_URL ||
      "https://linkedin.com/in/your-linkedin-username",
  },
  location: import.meta.env.VITE_LOCATION || "Your City, Country",
};

// Social Media URLs
export const SOCIAL_MEDIA = {
  facebook:
    import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/yourprofile",
  instagram:
    import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/yourprofile",
  twitter: import.meta.env.VITE_TWITTER_URL || "https://x.com/yourprofile",
};

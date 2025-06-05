import type { ContactInfo } from "../../types/index";

export const CONTACT_INFO: ContactInfo = {
  email: "your.email@example.com",
  phone: "+1234567890",
  github: {
    username: "your-github-username",
    url: "https://github.com/your-github-username",
  },
  linkedin: {
    username: "your-linkedin-username",
    url: "https://linkedin.com/in/your-linkedin-username",
  },
  location: "Your City, Country",
};

// export const CONTACT_INFO = {
//   email: process.env.REACT_APP_EMAIL || 'your.email@example.com',
//   phone: process.env.REACT_APP_PHONE || '+1 (555) 123-4567',
//   location: process.env.REACT_APP_LOCATION || 'Your City, Country',
//   github: {
//     username: process.env.REACT_APP_GITHUB_USERNAME || 'yourusername',
//     url: process.env.REACT_APP_GITHUB_URL || 'https://github.com/yourusername'
//   },
//   linkedin: {
//     username: process.env.REACT_APP_LINKEDIN_USERNAME || 'Your Name',
//     url: process.env.REACT_APP_LINKEDIN_URL || 'https://linkedin.com/in/yourprofile'
//   },
//   website: process.env.REACT_APP_WEBSITE_URL || 'https://yourwebsite.com',
//   resume: process.env.REACT_APP_RESUME_URL || '/assets/resume.pdf'
// };
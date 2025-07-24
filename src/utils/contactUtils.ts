/**
 * Contact utility functions for handling contact actions
 */

/**
 * Opens email client with predefined email
 * @param email - Email address to send to
 */
export const handleEmailClick = (email: string): void => {
  window.location.href = `mailto:${email}`;
};

/**
 * Opens phone dialer with predefined phone number
 * @param phone - Phone number to call
 */
export const handlePhoneClick = (phone: string): void => {
  window.location.href = `tel:${phone}`;
};

/**
 * Opens URL in new tab
 * @param url - URL to open
 */
export const openInNewTab = (url: string): void => {
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Contact method configuration for contact cards
 */
export interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  action?: () => void;
  brandColor: string;
  description: string;
}

/**
 * Social media configuration for social buttons
 */
export interface SocialMediaLink {
  icon: React.ReactNode;
  label: string;
  url: string;
  color: string;
}

/**
 * Brand colors for different contact methods
 */
export const BRAND_COLORS = {
  email: "#EA4335",
  phone: "#34A853",
  github: "#24292e",
  linkedin: "#0077B5",
  location: "#4285F4",
  facebook: "#1877F2",
  instagram: "#E4405F",
  twitter: "#000000",
} as const;

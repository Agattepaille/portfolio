/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, Flower2, CodeXml } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Location/City */
  location: string;
  /** Contact email */
  email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

/**
 * Site configuration object
 */
export const siteConfig: SiteConfig = {
  name: "Amélie Gattepaille",
  title: "Développeuse Full-Stack",
  description:
    "Après plusieurs années dans l’édition, j’ai décidé de donner un nouveau tournant à mon parcours en me reconvertissant dans le développement web. Développeuse en reconversion, motivée et enthousiaste, je recherche une alternance pour apprendre, progresser et m’investir pleinement dans une équipe tech.",
  avatar: "../assets/photoCV.jpg",
  location: "FR FRANCE",
  email: "amelie.gattepaille@gmail.com",
  socialLinks: {
    github: "https://github.com/Agattepaille",
    linkedin: "https://www.linkedin.com/in/amélie-gattepaille-54086510b/",
  },
  enableThemeSelector: true,
  extraLinks: {
    enable: true,
    links: [
      {
        link: "/blog/guides/bloomfolio-complete-guide",
        icon: Flower2,
        label: "Bloomfolio Guide",
      },
      {
        link: "/blog/guides/content-collections-guide",
        icon: BookOpen,
        label: "Content Guide",
      },
      {
        link: "/blog/guides/markdown-guide",
        icon: FileText,
        label: "Markdown Guide",
      },
      {
        link: "https://github.com/lauroguedes/bloomfolio",
        icon: CodeXml,
        label: "GitHub Repo",
      },
    ],
  },
  sections: {
    about: true,
    projects: true,
    blog: true,
    work: true,
    education: true,
    hackathons: true,
    contact: true,
  },
};

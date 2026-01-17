import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Hero singleton
const hero = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/hero" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      description: z.string(),
      avatar: image(),
      location: z.string().optional(),
      githubUrl: z.string().url().optional(),
      linkedinUrl: z.string().url().optional(),
      twitterUrl: z.string().url().optional(),
      blueskyUrl: z.string().url().optional(),
      instagramUrl: z.string().url().optional(),
      youtubeUrl: z.string().url().optional(),
      codetipsUrl: z.string().url().optional(),
    }),
});

// Work experience collection
const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      logo: image().optional(),
      link: z.string().url().optional(),
    }),
});

// Education collection
const education = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdoc,yaml}",
    base: "./src/content/education",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      logo: image().optional(),
      link: z.string().url().optional(),
    }),
});

// Projects collection
const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdoc,yaml}",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      skills: z.array(z.string()),
      demoLink: z.string().url().optional(),
      sourceLink: z.string().url().optional(),
    }),
});

// About singleton
const about = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/about" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      photo: image().optional(),
    }),
});

export const collections = {
  hero,
  work,
  education,
  projects,
  about,
};

export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  impact: string;
  highlights: string[];
};

export type Service = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

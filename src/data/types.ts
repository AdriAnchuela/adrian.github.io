import type { Locale } from '../i18n';

export type Localized = Record<Locale, string>;

export interface Project {
  slug: string;
  featured?: boolean;
  title: string;
  link?: string;
  client: Localized;
  desc: Localized;
  stack: string[];
  problem: Localized;
  architecture: Localized[];
  tags: string[];
}

export interface ExperienceItem {
  role: Localized;
  company: string;
  period: Localized;
  bullets: Localized[];
}

export interface EducationItem {
  degree: Localized;
  school: string;
  years: string;
  note: Localized;
}

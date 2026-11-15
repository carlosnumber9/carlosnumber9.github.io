import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import type { ComponentType, RefObject } from 'react';

export interface SectionContentProps {
  contentScrollRef: RefObject<HTMLElement | null>;
}

export interface Section {
  id: string;
  name: string;
  icon: IconDefinition;
  component: ComponentType<SectionContentProps>;
}

export interface WritingPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  language: 'en' | 'es';
  readingMinutes: number;
  html: string;
}

export interface Era {
  id: string;
  center: string;
  title: string;
  dates: string;
  url: string;
  tags?: string[];
}

export interface Job {
  id: string;
  company: string;
  title: string;
  features: string[];
  dates: string;
  url: string;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  'html_url': string;
  language?: string;
  topics: string[];
}

export type Theme = 'light' | 'dark';

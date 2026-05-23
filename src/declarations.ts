import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Section {
  id: string;
  name: string;
  icon: IconDefinition;
  component: React.FC;
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

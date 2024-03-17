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
  subtitle?: string;
  image: string;
}

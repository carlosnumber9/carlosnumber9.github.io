import {
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faPenNib,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import {
  AcademicBackground,
  Experience,
  Skills,
  Projects,
  Writing,
  writingPosts,
} from './sections';
import { Section } from './declarations';

export const SECTIONS: Section[] = [
  {
    id: 'experience',
    name: 'Experience',
    icon: faBriefcase,
    component: Experience,
  },
  {
    id: 'academic-background',
    name: 'Academic background',
    icon: faGraduationCap,
    component: AcademicBackground,
  },
  { id: 'skills', name: 'Skills', icon: faLaptopCode, component: Skills },
  {
    id: 'projects',
    name: 'Projects',
    icon: faProjectDiagram,
    component: Projects,
  },
  ...(writingPosts.length > 0
    ? [
        {
          id: 'writing',
          name: 'Writing',
          icon: faPenNib,
          component: Writing,
        },
      ]
    : []),
];

export const DEFAULT_FLEX_CONTAINER_STYLES: React.CSSProperties = {
  display: 'flex',
  alignContent: 'space-around',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

export const MIN_SECTION_HEIGHT = 80;

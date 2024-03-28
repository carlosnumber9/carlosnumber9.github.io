import {
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import { AcademicBackground, Experience, Skills, Projects } from './sections';
import { Section } from './declarations';


export const SECTIONS: Section[] = [
  {
    id: 'academic-background',
    name: 'Academic background',
    icon: faGraduationCap,
    component: AcademicBackground,
  },
  {
    id: 'experience',
    name: 'Experience',
    icon: faBriefcase,
    component: Experience,
  },
  { id: 'skills', name: 'Skills', icon: faLaptopCode, component: Skills },
  {
    id: 'projects',
    name: 'Projects',
    icon: faProjectDiagram,
    component: Projects,
  },
];

export const DEFAULT_FLEX_CONTAINER_STYLES = {
  display: 'flex',
  alignContent: 'space-around',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px',
  gap: '20px',
};

export const MIN_SECTION_HEIGHT = 80;
export const DEFAULT_LOAD_TIME = 500;

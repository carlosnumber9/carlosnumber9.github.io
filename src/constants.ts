import {
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faProjectDiagram,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { AcademicBackground, Experience, Skills, Projects } from './sections';


export const SECTIONS = [
  {
    id: 'academic-background',
    name: 'Academic background',
    icon: faGraduationCap,
    component: AcademicBackground,
  },
  {
    id: 'experience',
    name: 'Experiencie',
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

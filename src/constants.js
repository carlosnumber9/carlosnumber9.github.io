import {
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import {
  AcademicBackground,
  Experience,
  Skills,
  Projects,
} from './sections';

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

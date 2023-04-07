import {
  faHandSpock,
  faCrosshairs,
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import {
  CareerGoals,
  Introduction,
  AcademicBackground,
  Experience,
  Skills,
  Projects,
} from './sections';

export const SECTIONS = [
  {
    id: 'introduction',
    name: 'Introduction',
    icon: faHandSpock,
    component: Introduction,
  },
  {
    id: 'career-goals',
    name: 'Career goals',
    icon: faCrosshairs,
    component: CareerGoals,
  },
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

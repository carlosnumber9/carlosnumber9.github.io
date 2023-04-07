import {
  faHandSpock,
  faCrosshairs,
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

export const SECTIONS = [
  { id: 'introduction', name: 'Introduction', icon: faHandSpock },
  { id: 'career-goals', name: 'Career goals', icon: faCrosshairs },
  { id: 'academic-background', name: 'Academic background', icon: faGraduationCap },
  { id: 'experience', name: 'Experiencie', icon: faBriefcase },
  { id: 'skills', name: 'Skills', icon: faLaptopCode },
  { id: 'projects', name: 'Projects', icon: faProjectDiagram },
];

export const MENU_STYLE = {
  display: 'flex',
  justifyContent: 'center',
};

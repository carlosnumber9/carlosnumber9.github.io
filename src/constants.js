import {
    faHandSpock,
    faCrosshairs,
    faGraduationCap,
    faBriefcase,
    faLaptopCode,
    faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

export const SECTIONS = [
    { key: 0, name: 'Introduction', icon: faHandSpock },
    { key: 1, name: 'Career goals', icon: faCrosshairs },
    { key: 2, name: 'Academic background', icon: faGraduationCap },
    { key: 3, name: 'Experiencie', icon: faBriefcase },
    { key: 4, name: 'Skills', icon: faLaptopCode },
    { key: 5, name: 'Projects', icon: faProjectDiagram },
];

export const FOOTER_STYLE = {
    position: 'absolute',
    top: 'calc(100vh - 70px)',
    width: '100%',
    textAlign: 'center',
};

export const MENU_STYLE = {
    display: 'flex',
    justifyContent: 'center',
};
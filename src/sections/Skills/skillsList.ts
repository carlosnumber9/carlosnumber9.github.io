
export interface Skill {
    id: string;
    name: string;
    icon: string;
    anchor: string;
}

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    icon: '/react.png',
    anchor: 'https://react.dev/',
  },
  {
    id: 'angularJS',
    name: 'AngularJS',
    icon: '/angularjs.png',
    anchor: 'https://angularjs.org/',
  },
  {
    id: 'es',
    name: 'ECMAScript',
    icon: '/ecmascript.png',
    anchor: 'https://developer.mozilla.org/es/docs/Glossary/ECMAScript',
  },
  {
    id: 'spring',
    name: 'Spring',
    icon: '/spring.png',
    anchor: 'https://spring.io/projects/spring-framework',
  },
  {
    id: 'd3',
    name: 'D3',
    icon: 'd3.png',
    anchor: 'https://d3js.org/',
  },
  {
    id: 'highcharts',
    name: 'Highcharts',
    icon: '/highcharts.png',
    anchor: 'https://www.highcharts.com/',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: '/mysql.png',
    anchor: 'https://www.mysql.com/',
  },
  {
    id: 'jest',
    name: 'Jest',
    icon: 'jest.png',
    anchor: 'https://jestjs.io/',
  },
];

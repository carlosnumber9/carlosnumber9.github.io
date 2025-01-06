
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
    icon: '/assets/react.png',
    anchor: 'https://react.dev/',
  },
  {
    id: 'angularJS',
    name: 'AngularJS',
    icon: '/assets/angularjs.png',
    anchor: 'https://angularjs.org/',
  },
  {
    id: 'es',
    name: 'ECMAScript',
    icon: '/assets/ecmascript.png',
    anchor: 'https://developer.mozilla.org/es/docs/Glossary/ECMAScript',
  },
  {
    id: 'spring',
    name: 'Spring',
    icon: '/assets/spring.png',
    anchor: 'https://spring.io/projects/spring-framework',
  },
  {
    id: 'd3',
    name: 'D3',
    icon: '/assets/d3.png',
    anchor: 'https://d3js.org/',
  },
  {
    id: 'highcharts',
    name: 'Highcharts',
    icon: '/assets/highcharts.png',
    anchor: 'https://www.highcharts.com/',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: '/assets/mysql.png',
    anchor: 'https://www.mysql.com/',
  },
  {
    id: 'jest',
    name: 'Jest',
    icon: '/assets/jest.png',
    anchor: 'https://jestjs.io/',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    icon: '/assets/graphql.png',
    anchor: 'https://graphql.org/',
  },
  {
    id: 'redux',
    name: 'React Redux',
    icon: '/assets/redux.png',
    anchor: 'https://react-redux.js.org/',
  }
];

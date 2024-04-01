import { Job } from '../../declarations';

export const jobs: Job[] = [
  {
    id: 'devo',
    company: 'Devo',
    title: 'Software Engineer',
    features: [
      'react',
      'typescript',
      'jest',
      'cypress',
      'ci/cd',
      'd3',
      'highcharts',
      'echarts',
    ],
    dateStart: 'MAY21',
    dateEnd: 'FEB24',
    url: 'https://www.devo.com/',
  },
  {
    id: 'exevi',
    company: 'Exevi',
    title: 'Junior Full-Stack Developer',
    features: [
      'angularJS',
      'springFramework',
      'kendo',
      'wsdl',
      'hibernate',
      'git',
    ],
    dateStart: 'JUN19',
    dateEnd: 'MAY21',
    url: 'https://www.exevi.com/',
  },
  {
    id: 'cesvima',
    company: 'CeSViMa',
    title: 'Systems Intern',
    features: [
      'html',
      'dataCenter',
      'javascript',
      'css',
      'structuredCabling',
      'inventory',
    ],
    dateStart: 'SEP16',
    dateEnd: 'JUN19',
    url: 'https://www.cesvima.upm.es/',
  },
];

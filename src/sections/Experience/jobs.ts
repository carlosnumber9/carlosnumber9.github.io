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
      'ci',
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
    features: ['angularJS', 'spring', 'kendo', 'wsdl', 'hibernate', 'git'],
    dateStart: 'JUN19',
    dateEnd: 'MAY21',
    url: 'https://www.exevi.com/',
  },
  {
    id: 'cesvima',
    company: 'CeSViMa',
    title: 'Systems Intern',
    features: ['html', 'dataCenter'],
    dateStart: 'SEP16',
    dateEnd: 'JUN19',
    url: 'https://www.cesvima.upm.es/',
  },
];

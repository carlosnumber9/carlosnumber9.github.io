interface Project {
  id: string;
  name: string;
  description: string;
  language?: string;
  url: string;
}

export const projects: readonly Project[] = [
  {
    id: 'despacho-pinedo',
    name: 'despacho-pinedo',
    description: 'Landing page for Carlos Pinedo Santamaría',
    language: 'JavaScript',
    url: 'https://github.com/carlosnumber9/despacho-pinedo',
  },
  {
    id: 'martapinedo',
    name: 'martapinedo',
    description: 'Professional website for lawyer Marta Pinedo Sánchez.',
    language: 'TypeScript',
    url: 'https://github.com/carlosnumber9/martapinedo',
  },
  {
    id: 'money-juggle',
    name: 'money-juggle',
    description: 'A very custom finance tracker for my own accounts.',
    language: 'TypeScript',
    url: 'https://github.com/carlosnumber9/money-juggle',
  },
  {
    id: 'pomodorini',
    name: 'pomodorini',
    description: 'Simple Pomodoro timer for study/work sessions',
    language: 'TypeScript',
    url: 'https://github.com/carlosnumber9/pomodorini',
  },
  {
    id: 'secret-sanchez',
    name: 'secret-sanchez',
    description: 'A secret santa app for the Sánchez family.',
    language: 'TypeScript',
    url: 'https://github.com/carlosnumber9/secret-sanchez',
  },
];

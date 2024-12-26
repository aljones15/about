// contains types for the resume
import {
  Address, Position,
  Education, Tool,
  Skill, Language
} from '../types';

export const name = "Andrew Lyle Jones";

export const address: Address = {
  street: [
    '2300 24th Rd South',
    'Apartment 125'
  ],
  city: 'Arlington',
  state: 'Virginia',
  zipcode: '22206',
  country: 'U.S.A'
};

const javascript: Language = {
  name: 'Javascript',
  experience: 10
};

const csharp: Language = {
  name: 'C#',
  experience: 3
}

const python: Language = {
  name: 'Python',
  experience: 1
}

const php: Language = {
  name: 'PHP',
  experience: 3
}

const git: Tool = {
  name: 'git',
  experience: 10
};

const docker: Tool = {
  name: 'docker',
  experience: 8
};

const management: Skill = {
  name: 'Management',
  experience: 3
};

const dbPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  },
  languages: [javascript],
  skills: [management],
  tools: [git, docker]
};

const upPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Upwork'
  },
  languages: [javascript],
  skills: [management],
  tools: [git, docker]
};

const agPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Agilitet'
  },
  languages: [javascript, csharp, php],
  skills: [management],
  tools: [git]
};

const bonPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Bonzai'
  },
  languages: [javascript, python, csharp],
  skills: [management],
  tools: [git]
};

export const positions: Array<Position> = [
  dbPosition, upPosition,
  agPosition, bonPosition
];

const rollinsEducation: Education = {
  name: 'Rollins College',
  startDate: '1997-04-01',
  endDate: '2001-04-01',
  location: 'Winter Park, FL, U.S.A.'
};

export const education: Array<Education> = [rollinsEducation];
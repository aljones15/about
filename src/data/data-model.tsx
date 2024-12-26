// contains types for the resume
import {
  Address, Position,
  Education, Framework,
  Tool, Skill, Language
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

const typescript: Language = {
  name: 'Typescript',
  experience: 1
}

const csharp: Language = {
  name: 'C#',
  experience: 3
}

const python: Language = {
  name: 'Python',
  experience: 1
}

const java: Language = {
  name: 'Java',
  experience: 1
};

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

const architecture: Skill = {
  name: 'Architecture',
  experience: 3
};

const vue: Framework = {
  name: 'Vue.JS',
  experience: 5
}

const react: Framework = {
  name: 'React.JS',
  experience: 2
}

const angular: Framework = {
  name: 'Angular.JS',
  experience: 3
}

const dbPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  },
  languages: [javascript],
  skills: [management, architecture],
  frameworks: [vue],
  tools: [git, docker]
};

const upPosition: Position = {
  startDate: '2017-01-02',
  endDate: '2019-02-01',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Upwork'
  },
  languages: [javascript, java, typescript],
  frameworks: [react],
  skills: [architecture],
  tools: [git, docker]
};

const agPosition: Position = {
  startDate: '2015-11-01',
  endDate: '2017-01-02',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Agilitet'
  },
  languages: [javascript, csharp, php],
  frameworks: [angular],
  skills: [architecture],
  tools: [git]
};

const bonPosition: Position = {
  startDate: '2014-11-01',
  endDate: '2015-11-01',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Bonzai'
  },
  languages: [javascript, python, csharp],
  frameworks: [angular],
  skills: [architecture],
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
// contains types for the resume
import {
  Address, Position,
  Education, Tool,
  Skill, Language
} from '../types.ts';

export const name = "Andrew Lyle Jones";

export const address: Address = {
  street: [
    '2300 24th Rd South',
    'Apartment 125'
  ],
  city: 'Alrington',
  state: 'Virginia',
  zipcode: '22206',
  country: 'U.S.A'
};

const javascript: Language = {

};

const git: Tool = {

};

const docker: Tool = {

};

const management: Skill = {

};

const dbPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  }
  languages: [javascript],
  skills: [management],
  tools: [git, docker]
};

const upPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  }
  languages: [javascript],
  skills: [management],
  tools: [git, docker]
};

const agPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  }
  languages: [javascript],
  skills: [management],
  tools: [git, docker]
};

const bonPosition: Position = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  }
  languages: [javascript],
  skills: [management],
  tools: [git, docker]
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

export const: Array<Education> = [rollinsEducation];
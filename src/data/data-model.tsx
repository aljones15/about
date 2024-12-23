// contains types for the resume
import {
  Address, Position,
  Education, Tool,
  Skill, Language
} from '../types.ts';

const address: Address = {
  name: 'Andrew Lyle Jones',
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

};

const agPosition: Position = {

};

const bonPosition: Position = {

};
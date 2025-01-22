import { Skill } from '../types';

export const management: Skill = {
  name: 'Management',
  experience: 3
};

export const architecture: Skill = {
  name: 'Architecture',
  experience: 3
};

export const unitTesting: Skill = {
  name: 'Unit Testing',
  experience: 10
}

export const integrationTesting: Skill = {
  name: 'Integration Testing',
  experience: 8
}

export const endTesting: Skill = {
  name: 'End Testing',
  experience: 5
}

export const skills: Array<Skill> = [
  management, architecture,
  unitTesting, integrationTesting, endTesting
]
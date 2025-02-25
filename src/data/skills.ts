import { iSkill } from '../types';

export const management: iSkill = {
  name: 'Management',
  experience: 3
};

export const architecture: iSkill = {
  name: 'Architecture',
  experience: 3
};

export const unitTesting: iSkill = {
  name: 'Unit Testing',
  experience: 10
}

export const integrationTesting: iSkill = {
  name: 'Integration Testing',
  experience: 8
}

export const endTesting: iSkill = {
  name: 'End Testing',
  experience: 5
}

export const rest: iSkill = {
  name: "REST",
  experience: 9
}

export const apis: iSkill = {
  name: "API",
  experience: 9
}

export const plugins: iSkill = {
  name: "Plugins",
  experience: 9
}

export const skills: Array<iSkill> = [
  management, architecture,
  unitTesting, integrationTesting, endTesting,
  rest, apis, plugins
]

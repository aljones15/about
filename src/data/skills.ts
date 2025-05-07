import { Skill } from '../classes/Skill';

export const management: Skill = new Skill({
  name: 'Management',
    experience: 3,
    comments: []
});

export const architecture: Skill = new Skill({
  name: 'Architecture',
  experience: 3,
  comments: []
});

export const unitTesting: Skill = new Skill({
  name: 'Unit Testing',
  experience: 10,
  comments: []
});

export const integrationTesting: Skill = new Skill({
  name: 'Integration Testing',
  experience: 8,
  comments: []
});

export const endTesting: Skill = new Skill({
  name: 'End Testing',
  experience: 5,
  comments: []
});

export const rest: Skill = new Skill({
  name: "REST",
  experience: 9,
  comments: []
});

export const apis: Skill = new Skill({
  name: "API",
  experience: 9,
  comments: []
})

export const plugins: Skill = new Skill({
  name: "Plugins",
  experience: 9,
  comments: []
});

export const skills: Array<Skill> = [
  management, architecture,
  unitTesting, integrationTesting, endTesting,
  rest, apis, plugins
]

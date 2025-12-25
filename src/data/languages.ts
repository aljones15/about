import { Language } from "../classes/Language";

export const javascript: Language = new Language({
  name: 'Javascript',
  comments: [
    'Over a decade of front end javascript experience.',
    'Close to a decade of backend javascript experience in node.js.'
  ],
  experience: 10,
  functional: true,
  versions: [
    'es6', 'node-12',
    'node-14', 'node-16',
    'node-18', 'node-20'
  ]
});

export const typescript: Language = new Language({
  name: 'Typescript',
  comments: [
    'Over 3 years experience with strongly typed languages.',
    'Basic typescript experience.'
  ],
  experience: 1,
  functional: true,
  versions: []
});

export const csharp: Language = new Language({
  name: 'C#',
  comments: [
    'Experience with REST APIs.',
    'Experience with dependency injection.'
  ],
  experience: 3,
  functional: false,
  versions: []
});

export const python: Language = new Language({
  name: 'Python',
  comments: [
  
  ],
  experience: 2,
  functional: true,
  versions: ['2', '3.12']
});

export const java: Language = new Language({
  name: 'Java',
  comments: [],
  experience: 1,
  functional: false,
  versions: []
});

export const php: Language = new Language({
  name: 'PHP',
  comments: [],
  experience: 3,
  functional: false,
  versions: []
});

export const R: Language = new Language({
  name: "R",
  comments: [],
  experience: 5,
  functional: true,
  versions: []
});

export const css: Language = new Language({
  name: "CSS",
  comments: [],
  experience: 10,
  functional: false,
  versions: []
});

export const jsonld: Language = new Language({
  name: "JSON-LD",
  comments: [],
  versions: [],
  experience: 5,
  functional: false
});

export const languages: Language[] = [
  R, php, csharp, java, jsonld,
  javascript, python, typescript,
  css
];

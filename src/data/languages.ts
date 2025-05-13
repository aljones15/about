import { Language } from "../classes/Language";

export const javascript: Language = new Language({
  name: 'Javascript',
  comments: [],
  experience: 10,
  functional: true,
  versions: []
});

export const typescript: Language = new Language({
  name: 'Typescript',
  comments: [],
  experience: 1,
  functional: true,
  versions: []
});

export const csharp: Language = new Language({
  name: 'C#',
  comments: [],
  experience: 3,
  functional: false,
  versions: []
});

export const python: Language = new Language({
  name: 'Python',
  comments: [],
  experience: 1,
  functional: true,
  versions: []
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

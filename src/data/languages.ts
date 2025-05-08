import { Language } from "../classes/Language";

export const javascript: Language = new Language({
  name: 'Javascript',
  experience: 10,
  functional: true
});

export const typescript: Language = new Language({
  name: 'Typescript',
  experience: 1,
  functional: true
});

export const csharp: Language = new Language({
  name: 'C#',
  experience: 3
});

export const python: Language = new Language({
  name: 'Python',
  experience: 1
});

export const java: Language = new Language({
  name: 'Java',
  experience: 1
});

export const php: Language = new Language({
  name: 'PHP',
  experience: 3
});

export const R: Language = new Language({
  name: "R",
  experience: 5
});

export const css: Language = new Language({
  name: "CSS",
  experience: 10
});

export const jsonld: Language = new Language({
  name: "JSON-LD",
  experience: 5
});

export const languages: Language[] = [
  R, php, csharp, java, jsonld,
  javascript, python, typescript,
  css
];

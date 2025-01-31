import { iLanguage } from "../types";

export const javascript: iLanguage = {
  name: 'Javascript',
  experience: 10
};

export const typescript: iLanguage = {
  name: 'Typescript',
  experience: 1
}

export const csharp: iLanguage = {
  name: 'C#',
  experience: 3
}

export const python: iLanguage = {
  name: 'Python',
  experience: 1
}

export const java: iLanguage = {
  name: 'Java',
  experience: 1
};

export const php: iLanguage = {
  name: 'PHP',
  experience: 3
}

export const R: iLanguage = {
  name: "R",
  experience: 5
}

export const css: iLanguage = {
  name: "css",
  experience: 10
}

export const jsonld: iLanguage = {
  name: "JSON-LD",
  experience: 5
}

export const languages: Array<iLanguage> = [
  R, php, csharp, java, jsonld,
  javascript, python, typescript,
  css
];

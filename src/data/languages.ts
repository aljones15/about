
import { Language } from "../types";

export const javascript: Language = {
  name: 'Javascript',
  experience: 10
};

export const typescript: Language = {
  name: 'Typescript',
  experience: 1
}

export const csharp: Language = {
  name: 'C#',
  experience: 3
}

export const python: Language = {
  name: 'Python',
  experience: 1
}

export const java: Language = {
  name: 'Java',
  experience: 1
};

export const php: Language = {
  name: 'PHP',
  experience: 3
}

export const R: Language = {
  name: "R",
  experience: 5
}

export const languages: Array<Language> = [
  R, php, csharp, java,
  javascript, python, typescript
];
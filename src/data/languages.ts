
import { Language } from "../types";

const javascript: Language = {
  name: 'Javascript',
  experience: 10
};

const typescript: Language = {
  name: 'Typescript',
  experience: 1
}

const csharp: Language = {
  name: 'C#',
  experience: 3
}

const python: Language = {
  name: 'Python',
  experience: 1
}

const java: Language = {
  name: 'Java',
  experience: 1
};

const php: Language = {
  name: 'PHP',
  experience: 3
}

const R: Language = {
  name: "R",
  experience: 5
}

export const languages: Array<Language> = [
  R, php, csharp, javascript,
  python, typescript
];
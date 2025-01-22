import { Project } from "../types";
import {
  php, csharp, javascript,
  python, typescript
} from "./languages";
import {bonPosition} from "./positions";

export const projects: Array<Project> = [{
  name: "Converdiant",
  languages: [javascript, csharp],
  student: false,
  lead: false,
  developers: 2,
  startDate: "2014-11-14",
  endDate: "2015-08-12",
  position: bonPosition,
  link: "https://www.converdiant.com/",
  skills: [],
  frameworks: [],
  tools: [],
  description: [
    "My first official job as a junior developer was on a heat map site.",
    "Converdiant allowed an Angular service to run in the background keeping track of clicks on a page.",
    "As a junior my primary responsibilities were login and signup flows in Angular.",
    "The backend authentication services were written in C#",
    "Regular Expressions were used for input validators on login and signup"
  ]
}];
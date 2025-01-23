import { Project } from "../types";
import {
  php, css, csharp,
  javascript, python, typescript
} from "./languages";
import {
  vue, react, angular,
  capacitor, wordpress,
  jquery, node
} from "./frameworks";
import {
  git, docker, webdriver, appium,
  xcode, androidStudio, webpack,
  rollup, npm, visualStudio, vim
} from "./tools";
import {
  management, architecture,
  unitTesting, integrationTesting, endTesting,
  rest, apis, plugins
} from "./skills";

import {
  agPosition,
  bonPosition
} from "./positions";

export const projects: Array<Project> = [{
  name: "Converdiant",
  languages: [javascript, csharp, css],
  student: false,
  lead: false,
  developers: 2,
  startDate: "2014-11-14",
  endDate: "2015-08-12",
  position: bonPosition,
  link: "https://www.converdiant.com/",
  skills: [],
  frameworks: [angular],
  tools: [npm, visualStudio, git],
  description: [
    "My first official job as a junior developer was on a heat map site.",
    "Converdiant allowed an Angular service to run in the background keeping track of clicks on a page.",
    "As a junior my primary responsibilities were login and signup flows in Angular.",
    "The backend authentication services were written in C#",
    "Regular Expressions were used for input validators on login and signup"
  ]
}, {
  name: "Mecenat",
  languages: [javascript, csharp],
  frameworks: [jquery],
  tools: [npm, visualStudio, git],
  skills: [architecture, rest, apis],
  lead: false,
  student: false,
  developers: 2,
  startDate: "",
  endDate: "",
  position: agPosition,
  link: "https://mecenat.com/se",
  description: [
    "Mecenant is mass communication tool using sendgrid for students",
    "It was written as an MVC app in C# using jQuery and sendgrid",
    "This was my first time actually designing a fullstack system"
  ]
}, {
  name: "Sunbirdie",
  languages: [php, javascript, css],
  frameworks: [wordpress],
  tools: [vim, git],
  skills: [plugins],
  lead: false,
  student: false,
  developers: 2,
  startDate: "",
  endDate: "",
  position: agPosition,
  link: "https://sunbirdie.se",
  description: [
    "Sunbirdie is a booking site for golf lesson",
    "It was written in Wordpress and WooCommerce using plugins",
    "The site included booking and payment APIs using Brain Tree"
  ]
}];
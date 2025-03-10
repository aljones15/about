import { iProject } from "../types";
import {
  php, css, csharp, jsonld,
  javascript, python, typescript
} from "./languages";
import {
  vue, react, angular,
  capacitor, express, wordpress,
  jquery, node
} from "./frameworks";
import {
  git, docker, eslint, webdriver, appium,
  xcode, androidStudio, webpack, mongoDB,
  rollup, npm, visualStudio, vim
} from "./tools";
import {
  management, architecture,
  unitTesting, integrationTesting, endTesting,
  rest, apis, plugins
} from "./skills";

import {
  agPosition,
  bonPosition,
  dbPosition,
  upPosition
} from "./positions";

export const projects: Array<iProject> = [{
  name: "Converdiant",
  languages: [javascript, csharp, css],
  student: false,
  lead: false,
  developers: 2,
  startDate: "2014-11-14",
  endDate: "2015-08-12",
  position: bonPosition,
  link: "https://www.converdiant.com/",
  skills: [rest, endTesting],
  frameworks: [angular, webdriver],
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
  skills: [architecture, rest, apis, unitTesting, integrationTesting],
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
}, {
  name: "Kanban Zone",
  languages: [javascript, css],
  frameworks: [react, express, node],
  tools: [vim, git, eslint, webpack, mongoDB],
  skills: [architecture, rest, integrationTesting],
  lead: false,
  student: false,
  developers: 3,
  startDate: "",
  endDate: "",
  position: upPosition,
  link: "https://kanbanzone.com",
  description: [
    "Kanban Zone is a zone for Kanban related management.",
    "It is written in React with Express and MongoDB.",
    "I did a lot of integration tests especially with Mongo DB."
  ]
}, {
  name: "TruAge",
  languages: [javascript, css, jsonld],
  frameworks: [vue, express, node, capacitor],
  tools: [vim, git, eslint, webpack, mongoDB, androidStudio, xcode],
  skills: [architecture, rest],
  lead: false,
  student: false,
  developers: 5,
  startDate: "",
  endDate: "",
  position: dbPosition,
  link: "https://www.mytruage.org/",
  description: [
    "TruAge is an age verification application."
  ]
}, {
  name: "Dine in the Dark",
  languages: [javascript, php, css],
  frameworks: [react, node],
  tools: [vim, git, webpack],
  skills: [architecture, rest],
  lead: true,
  developers: 1,
  student: false,
  startDate: "",
  endDate: "",
  position: upPosition,
  link: "https://www.didexperience.com/",
  description: [
    "My first React website.",
    "Dine in the Dark is a restaurant that employs the blind",
    "The CSS flashlight feature was accomplished using an oversized box and CSS animations",
    "The backend is a PHP instance using Laravel"
  ]
}];

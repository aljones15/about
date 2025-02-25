import { iPosition } from "../types";
import {
  php, csharp, java,
  javascript, python, typescript
} from "./languages"
import {
  git, docker,
  webdriver, appium,
  xcode, androidStudio
} from "./tools";
import {
  management, architecture,
  unitTesting, integrationTesting, endTesting
} from "./skills";
import {
  vue, react, angular,
  capacitor, wordpress
} from "./frameworks";

export const dbPosition: iPosition = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar'
  },
  languages: [javascript],
  skills: [management, architecture, unitTesting, integrationTesting],
  frameworks: [vue, capacitor],
  tools: [androidStudio, docker, git, xcode],
  duties: [
    "Creation & maintenance of software from technical specifications.",
    "Creation & maintenance of conformance test suites for software specifications."
  ]
};

export const upPosition: iPosition = {
  startDate: '2017-01-02',
  endDate: '2019-02-01',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Upwork'
  },
  languages: [javascript, java, typescript],
  frameworks: [appium, react, webdriver],
  skills: [architecture, integrationTesting, endTesting],
  tools: [androidStudio, docker, git, xcode],
  duties: [
    "End Testing of Web and Mobile applications",
    "High speed development of React.JS Applications"
  ]
};

export const agPosition: iPosition = {
  startDate: '2015-11-01',
  endDate: '2017-01-02',
  jobTitle: 'Fullstack Developer',
  company: {
    name: 'Agilitet'
  },
  languages: [csharp, javascript, php],
  frameworks: [angular, wordpress],
  skills: [architecture],
  tools: [git],
  duties: [
    "Creation of Fullstack Web applications using C# and Javascript",
    "Creation of Web applications using Wordpress and PHP"
  ]
};

export const bonPosition: iPosition = {
  startDate: '2014-11-01',
  endDate: '2015-11-01',
  jobTitle: 'Fullstack Developer',
  company: {
    name: 'Bonzai'
  },
  languages: [csharp, javascript, python],
  frameworks: [angular],
  skills: [architecture, unitTesting, integrationTesting, endTesting],
  tools: [git],
  duties: [
    "Creation of unit, integration, and end tests",
    "Creation of fullstack applications in javascript & C#"
  ]
};

export const positions: Array<iPosition> = [
  dbPosition, upPosition,
  agPosition, bonPosition
];

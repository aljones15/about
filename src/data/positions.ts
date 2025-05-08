import { iPosition } from "../types";
import {
  php, csharp, java,
  javascript, python, typescript
} from "./languages"
import {
  git, docker,
  xcode, androidStudio
} from "./tools";
import {
  management, architecture,
  unitTesting, integrationTesting, endTesting
} from "./skills";
import {
  appium, vue, react, angular,
  capacitor, webdriver, wordpress
} from "./frameworks";

export const dbPosition: iPosition = {
  startDate: '2019-01-29',
  endDate: '2024-11-12',
  jobTitle: 'Fullstack Javascript Developer',
  company: {
    name: 'Digital Bazaar',
    about: 'Blacksburg, VA based software company.',
    comments: [
      'Creator of Node Forge an open source cryptography library.'
    ]
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
      about: 'One of the larger software contractor providers',
      comments: [
          'Freelancer'
	],
      name: 'Upwork',
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

export const nordicPosition: iPosition = {
  startDate: '2015-11-01',
  endDate: '2014-11-01',
  jobTitle: 'Fullstack Developer',
    company: {
      about: 'Bangkok based developer specializing in backend development.',
      comments: [
          'Takes outsourced projects.'
	],
      name: 'Nordic Software'
  },
  languages: [csharp, javascript, python, php],
  frameworks: [angular, wordpress],
  skills: [architecture, unitTesting, integrationTesting, endTesting],
  tools: [git],
  duties: [
    "Creation of Fullstack Web applications using C# and Javascript",
    "Creation of Web applications using Wordpress and PHP"
  ]
};

export const positions: Array<iPosition> = [
  dbPosition, upPosition, nordicPosition
];

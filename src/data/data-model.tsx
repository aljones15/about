// contains types for the resume
import {
  Address, Certificate,
  Degree, Position,
  School, Framework, Tool,
  Skill, Language, Project
} from '../types';

export const name = "Andrew Lyle Jones";

export const address: Address = {
  street: [
    '2300 24th Rd South',
    'Apartment 125'
  ],
  city: 'Arlington',
  state: 'Virginia',
  zipcode: '22206',
  country: 'U.S.A'
};

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

const r: Language = {
  name: "R",
  experience: 5
}

const git: Tool = {
  name: 'Git',
  experience: 10
};

const docker: Tool = {
  name: 'Docker',
  experience: 8
};

const webdriver: Tool = {
  name: 'WebDriver',
  experience: 4
}

const appium: Tool = {
  name: 'Appium',
  experience: 2
}

const management: Skill = {
  name: 'Management',
  experience: 3
};

const architecture: Skill = {
  name: 'Architecture',
  experience: 3
};

const unitTesting: Skill = {
  name: 'Unit Testing',
  experience: 10
}

const integrationTesting: Skill = {
  name: 'Integration Testing',
  experience: 8
}

const endTesting: Skill = {
  name: 'End Testing',
  experience: 5
}

const vue: Framework = {
  name: 'Vue.JS',
  experience: 5
}

const react: Framework = {
  name: 'React.JS',
  experience: 2
}

const angular: Framework = {
  name: 'Angular.JS',
  experience: 3
}

const capacitor: Framework = {
  name: 'Capacitor.JS',
  experience: 2
}

const wordpress: Framework = {
  name: 'Wordpress',
  experience: 2
}

const xcode: Tool = {
  name: 'Xcode',
  experience: 5
}

const androidStudio: Tool = {
  name: 'Android Studio',
  experience: 5
}

const dbPosition: Position = {
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

const upPosition: Position = {
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

const agPosition: Position = {
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

const bonPosition: Position = {
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

export const positions: Array<Position> = [
  dbPosition, upPosition,
  agPosition, bonPosition
];



const rollinsCollege: School = {
  name: "Rollins College",
  link: "https://www.rollins.edu/",
  startDate: "1997-04-01",
  endDate: "2001-05-01",
  location: "Winter Park, FL",
  accomplishments: []
};

const georgeMasonUniversity: School = {
  name: "George Mason University",
  link: "https://www.gmu.edu/",
  startDate: "2019-09-01",
  endDate: null,
  location: "Fairfax, VA",
  accomplishments: [
    "Finished Math and Stat courses up to 300 Level"
  ]
}

const dataCamp: School = {
  name: "Data Camp",
  link: "https://datacamp.com/",
  location: "Online",
  startDate: "2016-10-01",
  endDate: "2018-10-01",
  accomplishments: [
    "Finished 21 Courses in Data Science"
  ]
}

const udacity: School = {
  name: "Udacity",
  link: "https://udacity.com",
  location: "Online",
  startDate: "2013-02-01",
  endDate: "2022-02-01",
  accomplishments: [
    "Finished 3 Courses in Computer Science"
  ]
}

const bachelorsEnglish: Degree = {
  field: "English Literature",
  type: "Bachelors in the Arts",
  provider: rollinsCollege,
  startDate: "1997-04-01",
  endDate: "2001-05-01",
  skills: [],
  description: "Completed a degree in English Literature with an emphasis on post-modern authors"
};

const ucertificate: Certificate = {
  provider: udacity,
  issued: "2017-01-01",
  link: "https://udacity.com",
  skills: ["R", "Data Science"],
  description: "",
  title: "Intro to Statistics"
};

export const schools: Array<School> = [
  dataCamp,
  georgeMasonUniversity,
  rollinsCollege,
  udacity
];

export const degrees: Array<Degree> = [bachelorsEnglish];

export const certificates: Array<Certificate> = [
  ucertificate
]

export const languages: Array<Language> = [
  r, php, csharp, javascript,
  python, typescript
];
export const projects: Array<Project> = [];
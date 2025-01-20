import {Certificate, Degree, School} from '../types';

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
  issued: "2001-05-11",
  skills: ["Proof Reading", "Criticism", "Time Management"],
  description: "Completed a degree in English Literature"
};


export const schools: Array<School> = [
  dataCamp,
  georgeMasonUniversity,
  rollinsCollege,
  udacity
];

export const degrees: Array<Degree> = [bachelorsEnglish];

const udacityCerts: Array<Certificate> = [{
    provider: udacity,
    issued: "2017-01-01",
    link: "https://udacity.com",
    skills: ["Data Science", "Statistics"],
    description: "Completed a basic intro to Statistics course",
    title: "Intro to Statistics"
  }, {
    provider: udacity,
    issued: "2023-09-02",
    link: "https://www.udacity.com/certificate/e/9432c73a-076e-11ed-b38b-ffb26054068f",
    skills: ["Data Science"],
    description: "Completed an AWS Reinforcement Learning Program",
    title: "AWS Machine Learning Foundations"
  }, {
    provider: udacity,
    issued: "2022-08-04",
    link: "https://udacity.com",
    skills: ["HTML", "CSS", "UI Design"],
    description: "Completed a basic HTML course on the box-object model, css selectors, and responsive web design.",
    title: "Intro to HTML and CSS"
  }
];

const dataCampCerts: Array<Certificate> = [{
    provider: dataCamp,
    issued: "2016-10-16",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/92844e7c3e4b7ca53e98513b2bb5aa75cabf68b4?raw=1",
    skills: ["Python", "Data Science"],
    description: "Completed basic Python course with emphasis on NumPy.",
    title: "Introduction to Python"
}, {
    provider: dataCamp,
    issued: "2016-10-01",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/641a1fb702e48fce8184ae34727f74314aa7d141?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed basic R course with emphasis on Vectors, Matrices, & Data Frames.",
    title: "Introduction to R"
}, {
    provider: dataCamp,
    issued: "2016-11-22",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/6a6805d10c7a63883892747e99acec8cc2ca8ce7?raw=1",
    skills: ["Python", "Data Science", "Pandas"],
    description: "Completed Python course with emphasis on Pandas & Matplotlib.",
    title: "Intermediate Python"
}, {
    provider: dataCamp,
    issued: "2016-10-12",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/cca032866fd150edccb03b19a4d397199a6fd0ad?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed R course with emphasis on Functions and apply.",
    title: "Intermediate R"
}, {
    provider: dataCamp,
    issued: "2017-05-04",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/b1244481407a157097e355a9d279e2ab8b3c59f7?raw=1",
    skills: ["R", "Data Science", "dplyr"],
    description: "Completed R course in %>% dplyr.",
    title: "Data Manipulation in R with dplyr"
}, {
    provider: dataCamp,
    issued: "2016-10-25",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/546adde255b6421f6bacb412d206f59da992f071?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed R course in Functions",
    title: "Writing Functions in R"
}, {
    provider: dataCamp,
    issued: "2017-07-11",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/51659074145a83b8a15f7fe88d35f2b076307c04?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed R course in visualization with plot",
    title: "Data Visualization in R"
}, {
    provider: dataCamp,
    issued: "2017-07-22",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/9773fdedcdc449b1afef481bd8ece8a1b0edf47b?raw=1",
    skills: ["R", "Data Science", "ggplot2"],
    description: "Completed R course in ggplot2",
    title: "Data Visualization with ggplot2 (Part 1)"
}, {
    provider: dataCamp,
    issued: "2017-11-11",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/49ec6d186da9e5297ceebda813841b97fde040e3?raw=1",
    skills: ["R", "Data Science", "Markdown"],
    description: "Completed R course in R Markdown",
    title: "Reporting with R Markdown"
}, {
    provider: dataCamp,
    issued: "2017-04-29",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/ad6ffb903ff32b427e71489c75c85ff41d4d8b0f?raw=1",
    skills: ["R", "Data Science", "tidyr"],
    description: "Completed R course in Cleaning Data.",
    title: "Cleaning Data in R"
}, {
    provider: dataCamp,
    issued: "2017-08-01",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/75a2309cabd9f7decbd57eb836c4bdcd1f2e413c?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed Introduction to Data in R.",
    title: "Introduction to Data in R"
}, {
    provider: dataCamp,
    issued: "2016-11-05",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/713e7f46e783d4d37ee44fb380b12b8b3f7da17a?raw=1",
    skills: ["R", "Data Science", "readr"],
    description: "Completed course in importing data into R",
    title: "Introduction to Importing Data in R"
}, {
    provider: dataCamp,
    issued: "2017-03-14",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/698b4e45ebc2c205334ae94420c2a2a2226e4954?raw=1",
    skills: ["R", "Data Science", "Clustering", "Regression", "Classification"],
    description: "Finish overview of ML Clustering, Regression, & Classification.",
    title: "Introduction to Machine Learning"
}, {
    provider: dataCamp,
    issued: "2017-05-24",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/59b3390544b797f92083448d152b1efc1f41f63a?raw=1",
    skills: ["R", "Data Science", "dplyr", "Sets"],
    description: "Completed R course in basic Set operations with dplyr.",
    title: "Joining Data in R with dplyr"
}];

export const certificates: Array<Certificate> = [
  ...udacityCerts, ...dataCampCerts
];

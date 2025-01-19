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
  issued: "2001-05-01",
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

export const certificates: Array<Certificate> = [
  ...udacityCerts
];

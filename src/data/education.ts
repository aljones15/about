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
}, {
    provider: dataCamp,
    issued: "2017-08-21",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/6bc3bbe9b81455536231400d6f30dab8b440257b?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed course in Exploring Data via Charts & Summaries",
    title: "Exploratory Data Analysis in R"
}, {
    provider: dataCamp,
    issued: "2016-10-20",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/0db6b7dc5f2c19c190956e2d6d478362c4fa335d?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed practice in intermediate R concepts.",
    title: "Intermediate R: Practice"
}, {
    provider: dataCamp,
    issued: "2017-11-24",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/08e708de498d8e225f6fdce48e8ecee86be93339?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed course in using Data Frames in a financial context.",
    title: "Introduction to R for Finance"
}, {
    provider: dataCamp,
    issued: "2017-07-30",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/ba1a97c009ea568ee8f1a8754093469f65c1d959?raw=1",
    skills: ["R", "Data Science", "ggplot2"],
    description: "Completed second course in ggplot2.",
    title: "Data Visualization with ggplot2 (Part 2)"
}, {
    provider: dataCamp,
    issued: "2017-04-30",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/0edb1355b2ade43d245796f3d95a302eefcc86f1?raw=1",
    skills: ["R", "Data Science", "Statistics", "Correlation", "Regression"],
    description: "Completed course in correlation & regression in R.",
    title: "Correlation and Regression in R"
}, {
    provider: dataCamp,
    issued: "2017-01-12",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/f6512e0bb9e2dfe7a81a6a38e9b5627a8a78567f?raw=1",
    skills: ["R", "Data Science", "databases"],
    description: "Completed intermediate course in importing data in R",
    title: "Intermediate Importing Data in R"
}, {
    provider: dataCamp,
    issued: "2017-11-05",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/2567ddf6aa95c46c38bc0bf23f1143d5b0d65ccd?raw=1",
    skills: ["R", "Data Science", "PCA", "Clustering"],
    description: "Completed course in clustering & PCA in R.",
    title: "Unsupervised Learning in R"
}, {
    provider: dataCamp,
    issued: "2017-08-16",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/1688e4d3640e1e25bc8024b7f7a461f2f2d7c04e?raw=1",
    skills: ["R", "Data Science", "ggplot2"],
    description: "Completed third course in ggplot2.",
    title: "Data Visualization with ggplot2 (Part 3)"
}, {
    provider: dataCamp,
    issued: "2017-05-01",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/70e886688cc33602dc4a4965c3313c883f67accc?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed Case Study in Data Cleaning in R",
    title: "Importing & Cleaning Data in R: Case Studies"
}, {
    provider: dataCamp,
    issued: "2017-08-30",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/2f6a6605ee6788259c4b3227a67cfe77f285945c?raw=1",
    skills: ["R", "Data Science", "dpylr", "ggplot2"],
    description: "Completed Case Study in Data Analysis w/ dpylr & ggplot2.",
    title: "Case Study: Exploratory Data Analysis in R"
}, {
    provider: dataCamp,
    issued: "2017-10-24",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/b5fca009dcc9cbab0cc11887af32a8828592656a?raw=1",
    skills: ["R", "Data Science", "Statistics"],
    description: "Completed course in Inference in R",
    title: "Foundations of Inference in R"
}, {
    provider: dataCamp,
    issued: "2018-05-14",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/d93b98d7db935720bb1de1ae25c75227af6abe9e?raw=1",
    skills: ["R", "Data Science", "Time Series"],
    description: "Completed course in Time Series Data in R.",
    title: "Manipulating Time Series Data with xts and zoo in R"
}, {
    provider: dataCamp,
    issued: "2017-10-03",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/2dca44017be943e80f139c01d6cb78dad5238670?raw=1",
    skills: ["R", "Data Science", "caret"],
    description: "Completed course using caret in R.",
    title: "Machine Learning with caret in R"
}, {
    provider: dataCamp,
    issued: "2017-12-06",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/6aabdf3842dc951bf0535e7fe7c699ee83878aaa?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed course in using intermediate R functions for finance.",
    title: "Intermediate R for Finance"
}, {
    provider: dataCamp,
    issued: "2017-04-25",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/d3f75b8d50416bf4870ffffc0c3bac9fc3f13758?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed course in R with Bag-of-Words.",
    title: "Text Mining with Bag-of-Words in R"
}, {
    provider: dataCamp,
    issued: "2018-08-20",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/88c6765ecdc851712fdc0150e8ad4f487dbcfab7?raw=1",
    skills: ["R", "Data Science"],
    description: "Completed course in importing financial data in R",
    title: "Importing and Managing Financial Data in R"
}, {
    provider: dataCamp,
    issued: "2016-12-27",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/c01d561a078f23fef8d72dfcc66be50ba406cd0a?raw=1",
    skills: ["R", "Data Science", "Statistics", "T-Test"],
    description: "Completed course in T-test in R",
    title: "Intro to Statistics with R: Student's T-test"
}, {
    provider: dataCamp,
    issued: "2016-11-19",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/4c6f35b0eafbd401b65c34ea7c2b1aaef7d9d04a?raw=1",
    skills: ["R", "Data Science", "Statistics"],
    description: "Completed course in Statistics with R.",
    title: "Intro to Statistics with R: Introduction"
}];

export const certificates: Array<Certificate> = [
  ...udacityCerts, ...dataCampCerts
];

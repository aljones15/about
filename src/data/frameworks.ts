import { Framework } from '../classes/Framework';
import { css, javascript, php, java, python } from './languages';
	 
export const vue: Framework = new Framework({
  name: 'Vue.js',
  experience: 5,
  languages: [css, javascript],
  homepage: 'https://vuejs.org/',
  comments: [],
  versions: ['1.0', '2.0', '3.0'],
  stack: 'front end'
});

export const react: Framework = new Framework({
  name: 'React.js',
  experience: 3,
  languages: [css, javascript],
  homepage: 'https://react.dev/',
  comments: [],
  versions: ['1.0', '15.0', '18.0'],
  stack: 'front end'
});

export const angular: Framework = new Framework({
  name: 'Angular.js',
  experience: 3,
  languages: [css, javascript],
  homepage: 'https://angularjs.org/',
  comments: [],
  versions: ['1.0', '2.0'],
  stack: 'front end'
});

export const capacitor: Framework = new Framework({
  name: 'Capacitor.js',
  experience: 2,
  languages: [css, javascript],
  homepage: 'https://angularjs.org/',
  comments: [],
  versions: ['1.0', '2.0'],
  stack: 'front end'
});

export const wordpress: Framework = new Framework({
  name: 'Wordpress',
  experience: 2,
  languages: [css, javascript, php],
  homepage: 'https://wordpress.com/',
  comments: [],
  versions: ['3.9'],
  stack: 'back end'
});

export const jquery: Framework = new Framework({
  name: "jQuery",
  experience: 3,
  languages: [javascript],
  homepage: 'https://jquery.com/',
  comments: [],
  versions: [],
  stack: 'front end'
});

export const node: Framework = new Framework({
  name: "Node.js",
  experience: 10,
  languages: [javascript],
  homepage: 'https://nodejs.org',
  comments: [],
  versions: ['2', '4', '6', '8', '10', '12', '14', '16','18','20', '22'],
  stack: 'back end'
});

export const express: Framework = new Framework({
  name: "Express.js",
  experience: 8,
  languages: [javascript],
  homepage: 'https://expressjs.com/',
  comments: [],
  versions: ['2', '3', '4', '5'],
  stack: 'back end'
});

export const webdriver: Framework = new Framework({
  name: "WebDriver",
  experience: 4,
  homepage: "https://webdriver.io/",
  comments: [],
  languages: [javascript, java, python],
  versions: ['1', '2', '3'],
  stack: 'back end'
});

export const appium: Framework = new Framework({
  name: "Appium",
  experience: 2,
  homepage: "https://appium.io/",
  comments: [],
  languages: [javascript, java],
  versions: ['1', '2'],
  stack: 'back end'
});

export const frameworks: Array<Framework> = [
  appium, vue, react, angular, capacitor,
  express, webdriver, wordpress, jquery, node
];

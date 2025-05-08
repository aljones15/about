import { iFramework } from '../types';
import { Framework } from '../classes/Framework';

export const vue: Framework = new Framework({
  name: 'Vue.JS',
  experience: 5
});

export const react: Framework = new Framework({
  name: 'React.JS',
  experience: 2
});

export const angular: Framework = new Framework({
  name: 'Angular.JS',
  experience: 3
});

export const capacitor: Framework = new Framework({
  name: 'Capacitor.JS',
  experience: 2
});

export const wordpress: iFramework = {
  name: 'Wordpress',
  experience: 2
}

export const jquery: iFramework = {
  name: "jQuery",
  experience: 5
}

export const node: iFramework = {
  name: "Node.JS",
  experience: 10
}

export const express: iFramework = {
  name: "Express.JS",
  experience: 8
}

export const webdriver: Framework = new Framework({
  name: "WebDriver",
  experience: 4,
  homepage: "https://webdriver.io/",
  comments: []
});

export const appium: Framework = new Framework({
  name: "Appium",
  experience: 2,
  homepage: "https://appium.io/",
  comments: []
});

export const frameworks: Array<iFramework> = [
    appium, vue, react, angular, capacitor, express, webdriver, wordpress, jquery, node
];

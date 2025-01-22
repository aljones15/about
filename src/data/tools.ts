import { Tool } from "../types";

export const git: Tool = {
  name: 'Git',
  experience: 10
};

export const docker: Tool = {
  name: 'Docker',
  experience: 8
};

export const webdriver: Tool = {
  name: 'WebDriver',
  experience: 4
}

export const appium: Tool = {
  name: 'Appium',
  experience: 2
}

export const xcode: Tool = {
  name: 'Xcode',
  experience: 5
}

export const androidStudio: Tool = {
  name: 'Android Studio',
  experience: 5
}

export const tools: Array<Tool> = [
  git, docker, webdriver, appium,
  xcode, androidStudio
]
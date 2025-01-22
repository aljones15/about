import { Tool } from "../types";

export const git: Tool = {
  name: "Git",
  experience: 10,
  homepage: "https://git-scm.com/"
};

export const docker: Tool = {
  name: "Docker",
  experience: 8,
  homepage: "https://www.docker.com/"
};

export const webdriver: Tool = {
  name: "WebDriver",
  experience: 4,
  homepage: "https://webdriver.io/"
}

export const appium: Tool = {
  name: "Appium",
  experience: 2,
  homepage: "https://appium.io/"
}

export const xcode: Tool = {
  name: "Xcode",
  experience: 5,
  homepage: "https://developer.apple.com/xcode/"
}

export const androidStudio: Tool = {
  name: "Android Studio",
  experience: 5,
  homepage: "https://developer.android.com/studio"
}

export const webpack: Tool = {
  name: "Webpack",
  experience: 8,
  homepage: "https://webpack.js.org/"
}

export const rollup: Tool = {
  name: "Rollup",
  experience: 3,
  homepage: "https://rollupjs.org/"
}

export const npm: Tool = {
  name: "npm",
  experience: 10,
  homepage: "https://docs.npmjs.com/"
}

export const visualStudio: Tool = {
  name: "Visual Studio",
  experience: 3,
  homepage: "https://visualstudio.microsoft.com/"
}

export const vim: Tool = {
  name: "Vim",
  experience: 6,
  homepage: "https://www.vim.org/"
}

export const mssql: Tool = {
  name: "Microsoft SQL",
  experience: 3,
  homepage: "https://www.microsoft.com/en-us/sql-server"
}

export const mongoDB: Tool = {
  name: "Mongo DB",
  experience: 8,
  homepage: "https://www.mongodb.com/"
}

export const mariaDB: Tool = {
  name: "Maria DB",
  experience: 1,
  homepage: "https://mariadb.org/"
}

export const mysql: Tool = {
  name: "My SQL",
  experience: 2,
  homepage: "https://www.mysql.com/"
}

export const tools: Array<Tool> = [
  git, docker, webdriver, appium,
  xcode, androidStudio, npm,
  visualStudio, rollup, vim,
  mssql, mongoDB, mariaDB,
  mysql
]
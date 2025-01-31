import { iTool } from "../types";

export const git: iTool = {
  name: "Git",
  experience: 10,
  homepage: "https://git-scm.com/"
};

export const docker: iTool = {
  name: "Docker",
  experience: 8,
  homepage: "https://www.docker.com/"
};

export const webdriver: iTool = {
  name: "WebDriver",
  experience: 4,
  homepage: "https://webdriver.io/"
}

export const appium: iTool = {
  name: "Appium",
  experience: 2,
  homepage: "https://appium.io/"
}

export const xcode: iTool = {
  name: "Xcode",
  experience: 5,
  homepage: "https://developer.apple.com/xcode/"
}

export const androidStudio: iTool = {
  name: "Android Studio",
  experience: 5,
  homepage: "https://developer.android.com/studio"
}

export const webpack: iTool = {
  name: "Webpack",
  experience: 8,
  homepage: "https://webpack.js.org/"
}

export const rollup: iTool = {
  name: "Rollup",
  experience: 3,
  homepage: "https://rollupjs.org/"
}

export const npm: iTool = {
  name: "npm",
  experience: 10,
  homepage: "https://docs.npmjs.com/"
}

export const visualStudio: iTool = {
  name: "Visual Studio",
  experience: 3,
  homepage: "https://visualstudio.microsoft.com/"
}

export const vim: iTool = {
  name: "Vim",
  experience: 6,
  homepage: "https://www.vim.org/"
}

export const mssql: iTool = {
  name: "Microsoft SQL",
  experience: 3,
  homepage: "https://www.microsoft.com/en-us/sql-server"
}

export const mongoDB: iTool = {
  name: "Mongo DB",
  experience: 8,
  homepage: "https://www.mongodb.com/"
}

export const mariaDB: iTool = {
  name: "Maria DB",
  experience: 1,
  homepage: "https://mariadb.org/"
}

export const mysql: iTool = {
  name: "My SQL",
  experience: 2,
  homepage: "https://www.mysql.com/"
}

export const eslint: iTool = {
  name: "Eslint",
  experience: 10,
  homepage: "https://eslint.org/"
}

export const tools: Array<iTool> = [
  git, docker, eslint, webdriver,
  appium, xcode, androidStudio, npm,
  visualStudio, rollup, vim, mssql,
  mongoDB, mariaDB, mysql
]

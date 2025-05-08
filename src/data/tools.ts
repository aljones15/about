import { Tool } from "../classes/Tool";

export const git: Tool = new Tool({
  name: "Git",
  comments: [],
  experience: 10,
  gui: false,
  homepage: "https://git-scm.com/"
});

export const docker: Tool = new Tool({
  name: "Docker",
  experience: 8,
  homepage: "https://www.docker.com/",
  comments: [],
  gui: false
});

export const xcode: Tool = new Tool({
  name: "Xcode",
  experience: 5,
  homepage: "https://developer.apple.com/xcode/",
  comments: [],
  gui: true
});

export const androidStudio: Tool = new Tool({
  name: "Android Studio",
  experience: 5,
  homepage: "https://developer.android.com/studio",
  comments: [],
  gui: true
});

export const webpack: Tool = new Tool({
  name: "Webpack",
  experience: 8,
  homepage: "https://webpack.js.org/",
  comments: [],
  gui: false
});

export const rollup: Tool = new Tool({
  name: "Rollup",
  experience: 3,
  homepage: "https://rollupjs.org/",
  comments: [],
  gui: false
});

export const npm: Tool = new Tool({
  name: "npm",
  experience: 10,
  homepage: "https://docs.npmjs.com/",
  comments: [],
  gui: false
});

export const visualStudio: Tool = new Tool({
  name: "Visual Studio",
  experience: 3,
  gui: true,
  comments: [],
  homepage: "https://visualstudio.microsoft.com/"
});

export const vim: Tool = new Tool({
  name: "Vim",
  experience: 6,
  homepage: "https://www.vim.org/",
  comments: [],
  gui: true
});

export const mssql: Tool = new Tool({
  name: "Microsoft SQL",
  experience: 3,
  homepage: "https://www.microsoft.com/en-us/sql-server",
  comments: [],
  gui: false
});

export const mongoDB: Tool = new Tool({
  name: "Mongo DB",
  experience: 8,
  homepage: "https://www.mongodb.com/",
  comments: [],
  gui: false
});

export const mariaDB: Tool = new Tool({
  name: "Maria DB",
  experience: 1,
  homepage: "https://mariadb.org/",
  comments: [],
  gui: false
});

export const mysql: Tool = new Tool({
  name: "My SQL",
  experience: 2,
  homepage: "https://www.mysql.com/",
  comments: [],
  gui: false
});

export const eslint: Tool = new Tool({
  name: "Eslint",
  experience: 10,
  homepage: "https://eslint.org/",
  comments: [],
  gui: false
});

export const tools: Tool[] = [
  git, docker, eslint,
  xcode, androidStudio, npm,
  visualStudio, rollup, vim, mssql,
  mongoDB, mariaDB, mysql
];

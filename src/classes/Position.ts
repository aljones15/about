import { iPosition } from "../types";
import { Language } from "./Language";
import { Framework } from "./Framework";
import { Skill } from "./Skill";
import { Tool } from "./Tool";

export class Position {
  jobTitle: string;
  company: iCompany;
  languages: Array<Language>;
  frameworks: Array<Framework>;
  skills: Array<Skill>;
  tools: Array<Tool>;
  duties: Array<string>;
  startDate: string;
  endDate: string | null;
  constructor({
    jobTitle, company, languages,
    frameworks, skills, tools,
    duties, startDate, endDate = null
  }: iPosition) {
    this.jobTitle = jobTitle;
    this.company = company;
    this.languages = languages;
    this.skills = skills;
    this.tools = tools;
    this.duties = duties;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

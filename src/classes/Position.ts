import { iPosition, iCompany } from "../types";
import { Language } from "./Language";
import { Framework } from "./Framework";
import { Skill } from "./Skill";
import { Tool } from "./Tool";

export class Position implements iPosition {
  jobTitle: string;
  company: iCompany;
  languages: Language[];
  frameworks: Framework[];
  skills: Skill[];
  tools: Tool[];
  duties: string[];
  startDate: string;
  endDate: string | null;
  constructor({
    jobTitle, company, languages,
    frameworks, skills, tools,
    duties, startDate, endDate = null
  }) {
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

export default Position;

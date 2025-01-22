export interface Address {
  street: Array<string>;
  city: string;
  state: string;
  zipcode: string | number;
  country: string;
}

export interface Company {
  name: string;
  homepage?: URL;
  github?: URL | null;
  linkedin?: URL | null;
  about?: string | null
}

export interface Skill {
  name: string;
  about?: string | null;
  experience: number;
}

export interface Language {
  name: string;
  experience: number;
}

export interface Tool {
  name: string;
  experience: number;
}

export interface Framework {
  name: string;
  experience: number;
}

export interface Position {
  startDate: string;
  endDate: string | null;
  jobTitle: string;
  company: Company;
  languages: Array<Language>;
  frameworks: Array<Framework>;
  skills: Array<Skill>;
  tools: Array<Tool>;
  duties: Array<string>;
}

export interface School {
  name: string;
  startDate: string;
  link: string;
  endDate: string | null;
  location: string;
  accomplishments: Array<string>;
}

export interface Certificate {
  provider: School;
  issued: string;
  link: string;
  skills: Array<string>;
  description: string;
  title: string;
}

export interface Degree {
  field: string;
  type: string;
  description: string;
  skills: Array<string>;
  provider: School;
  issued: string;
}

export interface Project {
  name: string;
  position?: Position;
  student: boolean;
  lead: boolean:
  developers: number;
  startDate: string;
  endDate: string;
  description: Array<string>;
  link?: string;
  repo?: string;
  languages: Array<Language>;
  skills: Array<Skill>;
  frameworks: Array<Framework>;
  tools: Array<Tool>;
}
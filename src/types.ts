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

export interface Education {
  name: string;
  startDate: string;
  endDate: string | null;
  location: string;
}

export interface Project {
  name: string;
  student: boolean;
  link: URL,
  languages: Set<Language>
}
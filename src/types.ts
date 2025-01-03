export interface Address {
  street: Array<string>;
  city: string;
  state: string;
  zipcode: string | number;
  country: string;
}

export interface Company {
  name: string;
  homepage: URL;
  github: URL | null;
  linkedin: URL | null;
  about: string | null
}

export interface Skill {
  name: string;
  about: string | null;
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

export interface Position {
  startDate: string;
  endDate: string | null;
  jobTitle: string;
  company: Company;
  languages: Array<Language>;
  skills: Array<Skill>;
  tootls: Array<Tool>;
}

export interface Eduction {
  name: string;
  startDate: string;
  endDate: string | null;
  location: string;
}
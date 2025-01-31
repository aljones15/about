export interface iAddress {
  street: Array<string>;
  city: string;
  state: string;
  zipcode: string | number;
  country: string;
}

export interface iCompany {
  name: string;
  homepage?: string;
  github?: string;
  linkedin?: string;
  about?: string
}

export interface iSkill {
  name: string;
  about?: string;
  experience: number;
}

export interface iLanguage {
  name: string;
  experience: number;
  homepage?: string;
}

export interface iTool {
  name: string;
  experience: number;
  homepage?: string;
}

export interface iFramework {
  name: string;
  experience: number;
}

export interface iPosition {
  startDate: string;
  endDate: string | null;
  jobTitle: string;
  company: iCompany;
  languages: Array<iLanguage>;
  frameworks: Array<iFramework>;
  skills: Array<iSkill>;
  tools: Array<iTool>;
  duties: Array<string>;
}

export interface iSchool {
  name: string;
  startDate: string;
  link: string;
  endDate: string | null;
  location: string;
  accomplishments: Array<string>;
}

export interface iCertificate {
  provider: iSchool;
  issued: string;
  link: string;
  skills: Array<string>;
  description: string;
  title: string;
}

export interface iDegree {
  field: string;
  type: string;
  description: string;
  skills: Array<string>;
  provider: iSchool;
  issued: string;
}

export interface iProject {
  name: string;
  position?: iPosition;
  student: boolean;
  lead: boolean;
  developers: number;
  startDate: string;
  endDate: string;
  description: Array<string>;
  link?: string;
  repo?: string;
  languages: Array<iLanguage>;
  skills: Array<iSkill>;
  frameworks: Array<iFramework>;
  tools: Array<iTool>;
}

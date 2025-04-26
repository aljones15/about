export interface iAddress {
  street: Array<string>;
  city: string;
  state: string;
  zipcode: string | number;
  country: string;
}

export interface iAbout {
    name: string;
    homepage?: string;
}

export interface iAbility2 extends iAbout {
    experience: number;
}

export interface iCompany extends iAbout {
  github?: string;
  linkedin?: string;
  about?: string
}

export interface iSkill extends iAbility2 {
  about?: string;
}

export interface iLanguage extends iAbility2 {
}

export interface iTool extends iAbility2 {

}

export interface iFramework extends iAbility2 {
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

export type iAbility = iLanguage|iSkill|iFramework|iTool;
export type iAbilities = iAbility[];

export interface iAddress {
  street: Array<string>;
  city: string;
  state: string;
  zipcode: string | number;
  country: string;
}

export interface iAbout {
    about?: string;
    name: string;
    homepage?: string;
    comments: string[];
}

export interface iExperience {
    experience: number;
}

export interface iAbility2 extends iExperience {
    ability: "Skill" | "Framework" | "Language" | "Tool";
    projects: iProject[];
}

export interface iCompany extends iAbout {
  github?: string;
  linkedin?: string;
  about: string
}

export interface iSkill extends iAbout, iExperience {
  description: string;
}

export interface iLanguage extends iAbout, iExperience {
    functional: boolean;
    versions: Array<string>;
}

export interface iTool extends iAbout, iExperience {
    gui: boolean;
}

export interface iFramework extends iAbout, iExperience {
    languages: iLanguage[];
    versions: string[];
    stack: "front end" | "back end";
}

export interface iDuration {
  startDate: string;
  endDate: string | null;
}

export interface iPosition extends iDuration {
  jobTitle: string;
  company: iCompany;
  languages: Array<iLanguage>;
  frameworks: Array<iFramework>;
  skills: Array<iSkill>;
  tools: Array<iTool>;
  duties: Array<string>;
}

export interface iSchool extends iDuration {
  name: string;
  link: string;
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

export interface iProject extends iDuration {
  name: string;
  position?: iPosition;
  student: boolean;
  lead: boolean;
  developers: number;
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

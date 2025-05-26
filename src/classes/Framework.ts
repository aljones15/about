import {iFramework, iAbility2, iLanguage, iProject} from "../types";

export class Framework implements iFramework, iAbility2 {
    name: string;
    experience: number;
    languages: Array<Language>;
    homepage: string;
    comments: Array<string>;
    versions: Array<string>;
    projects: Array<iProject>;
    stack: "front end" | "back end";
    ability: "Framework";
    constructor({
	name, experience, languages,
	homepage, comments, versions, stack
    } :iFramework) {
	this.name = name;
	this.experience = experience;
        this.languages = languages;
	this.homepage = homepage;
	this.comments = comments;
	this.versions = versions;
	this.stack = stack;
	this.ability = "Framework";
        this.projects = [];
    }
}

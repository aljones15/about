import {iFramework, iAbility, iLanguage, iProject} from "../types";

export class Framework implements iFramework, iAbility {
    name: string;
    experience: number;
    languages: Array<iLanguage>;
    homepage: string;
    comments: Array<string>;
    versions: Array<string>;
    projects: Array<iProject> = [];
    stack: "front end" | "back end";
    ability: string = "Framework";
    constructor({
	name, experience, languages,
	homepage, comments, versions,
	projects, stack
    } :iFramework) {
	this.name = name;
	this.experience = experience;
        this.languages = languages;
	this.homepage = homepage;
	this.comments = comments;
	this.versions = versions;
	this.projects = projects;
	this.stack = stack;
	this.ability = "Framework";
    }
}

import {iFramework, iAbility2, iLanguage, iProject} from "../types";
import Language from "./Language";

export class Framework implements iFramework, iAbility2 {
    name: string;
    experience: number;
    languages: Language[];
    homepage: string;
    comments: string[];
    versions: string[];
    projects: iProject[];
    stack: "front end" | "back end";
    ability: "Framework";
    constructor({
	name, experience, languages,
	homepage, comments, versions, stack
    }) {
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

export default Framework;

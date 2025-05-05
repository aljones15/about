import {iAbility2, iProject} from "../types";


export class Tool implements iAbility2{
    name: string;
    experience: number;
    projects: iProject[];
    homepage: string;
    comments: Array<string>;
    ability: string;
    constructor(name, experience, projects, homepage, comments) {
	this.name = name;
	this.experience = experience;
	this.projects = projects;
	this.homepage= homepage;
	this.comments = comments;
	this.ability = "Tool";
    }
}

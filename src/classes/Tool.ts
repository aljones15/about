import {iAbility2, iProject} from "../types";


export class Tool implements iAbility2{
    name: string;
    experience: number;
    projects: iProject[];
    homepage: string;
    comments: Array<string>;
    gui: boolean;
    ability: string;
    constructor(name, experience, projects, homepage, comments, gui) {
	this.name = name;
	this.experience = experience;
	this.projects = projects;
	this.homepage= homepage;
	this.comments = comments;
	this.gui = gui;
	this.ability = "Tool";
    }
}

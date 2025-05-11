import {iAbility2, iTool, iProject} from "../types";

export class Tool implements iTool, iAbility2{
    name: string;
    experience: number;
    projects: iProject[];
    homepage: string;
    comments: string[];
    gui: boolean;
    ability: string;
    constructor({
	name, experience,
	homepage, comments = [], gui = false
    }: iTool) {
	this.name = name;
	this.experience = experience;
	this.homepage= homepage;
	this.comments = comments;
	this.gui = gui;
        this.ability = "Tool";
        this.projects = [];
    }
}

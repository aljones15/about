import {iAbility2, iProject} from '../types';

export class Skill implements iAbility2 {
    name: string;
    experience: number;
    projects: iProject[];
    description: Array<string>;
    comments: Array<string>;
    ability: string;
    constructor(name, experience, projects, description, comments) {
	this.name = name;
	this.experience = experience;
	this.projects = projects;
	this.description = description;
	this.comments = comments;
	this.ability = "Skill";
    }
}

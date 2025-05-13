import {iAbility2, iSkill, iProject} from '../types';

export class Skill implements iSkill, iAbility2 {
    name: string;
    experience: number;
    projects: iProject[];
    description: string;
    comments: Array<string>;
    ability: string;
    constructor({name, experience, description, comments}: iSkill) {
	this.name = name;
	this.experience = experience;
	this.description = description;
	this.comments = comments;
	this.ability = "Skill";
        this.projects = [];
    }
}

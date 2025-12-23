import {iAbility2, iLanguage, iProject} from '../types';

export class Language implements iLanguage, iAbility2 {
    ability: "Language";
    name: string;
    experience: number;
    homepage: string;
    comments: Array<string>;
    functional: boolean;
    versions: Array<string>;
    projects: iProject[];
    constructor({
	name, experience, homepage,
	functional, comments, versions}: iLanguage) {	
	this.name = name;
	this.experience = experience;
	this.homepage = homepage;
	this.comments = comments;
	this.versions = versions;
	this.functional = functional;
        this.ability = "Language";
        this.projects = [];
    }
}

export default Language;

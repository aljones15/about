import {iAbility2, iLanguage} from '../types';

class Language implements iAbility2 {
    ability: string;
    name: string;
    experience: number;
    homepage: string;
    comments: Array<string>;
    versions: Array<string>;
    constructor(name, experience, homepage, comments, versions) {
	this.name = name;
	this.experience = experience;
	this.homepage = homepage;
	this.comments = comments;
	this.versions = versions;
	this.ability = "Language";
    }
}

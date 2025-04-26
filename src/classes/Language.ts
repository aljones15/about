import {iAbility, iLanguage} from '../types';

class Language implements iLanguage {
    type: string;
    name: string;
    experience: number;
    constructor(name, experience) {
	this.name = name;
	this.experience = experience;
	this.type = "Language";
    }
}

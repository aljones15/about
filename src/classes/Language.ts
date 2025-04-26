import {iAbility2, iLanguage} from '../types';

class Language implements iAbility2 {
    type: string;
    name: string;
    experience: number;
    constructor(name, experience) {
	this.name = name;
	this.experience = experience;
	this.type = "Language";
    }
}

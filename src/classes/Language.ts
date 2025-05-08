import {iAbility2, iLanguage, iPosition} from '../types';

export class Language implements iLanguage, iAbility2 {
    ability: string = 'Language';
    name: string;
    experience: number;
    homepage: string;
    comments: Array<string>;
    functional: boolean;
    versions: Array<string>;
    positions: iPosition = [];
    constructor({
	name, experience, homepage,
	functional, comments, versions}: iLanguage) {
	this.name = name;
	this.experience = experience;
	this.homepage = homepage;
	this.comments = comments;
	this.versions = versions;
	this.functional = functional;
    }
}

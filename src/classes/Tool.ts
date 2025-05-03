import {iAbility2} from "../types";


export class Tool implements iAbility2{
    name: string;
    experience: number;
    constructor(name, experience) {
	this.name = name;
	this.experience = experience;
    }
}

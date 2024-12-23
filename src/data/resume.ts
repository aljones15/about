import {Address, Position, Education} from '../types';

export class Resume {
  name: string;
  address: Address;
  positions: Array<Position>;
  education: Array<Education>;
  constructor({name, address, positions, education}) {
    this.name = name;
    this.address = address;
    this.positions = positions;
    this.education = education;
  }
}
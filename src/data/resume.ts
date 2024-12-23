import {Address, Position, Education} from '../types.ts';

export class Resume {
  constructor({
    address: Address,
    positions: Array<Position>,
    education: Array<Education>,
    name: string
  }) {
    this.name = name;
    this.address = address;
    this.positions = positions;
    this.education = education;
  }
}
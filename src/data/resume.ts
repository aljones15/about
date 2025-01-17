import {Address, Position, Education, Project} from '../types';

export class Resume {
  name: string;
  address: Address;
  positions: Array<Position>;
  education: Array<Education>;
  certificates: Array<Education>;
  projects: Array<Project>;
  constructor({name, address, positions, education, certificates, projects}) {
    this.name = name;
    this.address = address;
    this.positions = positions;
    this.education = education;
    this.projects = projects;
    this.certificates = certificates;
  }
}
import {Address, Certificate, Position, Project, Degree, School} from '../types';
import Education from "./Education";

export class Resume {
  name: string;
  address: Address;
  positions: Array<Position>;
  schools: Array<School>;
  certificates: Array<Certificate>;
  projects: Array<Project>;
  education: Education;
  constructor({name, address, positions, schools, certificates, projects}) {
    this.name = name;
    this.address = address;
    this.positions = positions;
    this.education = new Education({
      schools, certificates
    });
    this.projects = projects;
    this.certificates = certificates;
  }
}
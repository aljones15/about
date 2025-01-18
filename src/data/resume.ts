import {Address, Certificate, Degree, Position, Project, School} from '../types';
import Education from "./Education";

export class Resume {
  name: string;
  address: Address;
  positions: Array<Position>;
  schools: Array<School>;
  certificates: Array<Certificate>;
  projects: Array<Project>;
  degrees: Array<Degree>;
  education: Education;
  constructor({name, address, degrees, positions, schools, certificates, projects}) {
    this.name = name;
    this.address = address;
    this.positions = positions;
    this.education = new Education({
      schools, certificates, degrees,
    });
    this.projects = projects;
    this.certificates = certificates;
  }
}
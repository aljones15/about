import {iAddress, iCertificate, iDegree, iPosition, iProject, iSchool} from '../types';
import Education from "./Education";
import Position from "./Position";

export class Resume {
  name: string;
  address: iAddress;
  positions: Position[];
  schools: iSchool[];
  certificates: iCertificate[];
  projects: iProject[];
  degrees: iDegree[];
  education: Education;
  constructor({
    name, address, degrees, positions,
    schools, certificates, projects
  }) {
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

export default Resume;

import {iAddress, iCertificate, iDegree, iPosition, iProject, iSchool} from '../types';
import Education from "./Education";

export class Resume {
  name: string;
  address: iAddress;
  positions: Array<iPosition>;
  schools: Array<iSchool>;
  certificates: Array<iCertificate>;
  projects: Array<iProject>;
  degrees: Array<iDegree>;
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

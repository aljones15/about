import {iCertificate, iDegree, iSchool} from "../types";

export default class Education {
  schools: iSchool[];
  certificates: iCertificate[];
  degrees: iDegree[];
  constructor({schools, certificates, degrees}) {
    this.schools = schools;
    this.certificates = certificates;
    this.degrees = degrees;
  }
}

import {iCertificate, iDegree, iSchool} from "../types";

export default class Education {
  schools: Array<iSchool>;
  certificates: Array<iCertificate>;
  degrees: Array<iDegree>;
  constructor({schools, certificates, degrees}) {
    this.schools = schools;
    this.certificates = certificates;
    this.degrees = degrees;
  }
}

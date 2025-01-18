import {Certificate, Degree, School} from "../types";

export default class Education {
  schools: Array<School>;
  certificates: Array<Certificate>;
  degrees: Array<Degree>;
  constructor({schools, certificates, degrees}) {
    this.schools = schools;
    this.certificates = certificates;
    this.degrees = degrees;
  }
}
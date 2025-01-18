import {School, Certificate} from "../types";

export default class Education {
  schools: Array<School>;
  certificates: Array<Certificate>;
  constructor({schools, certificates}) {
    this.schools = schools;
    this.certificates = certificates;
  }
}
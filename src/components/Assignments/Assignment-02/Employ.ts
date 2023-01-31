import { User } from "./User";
import { EmployType, UserType } from "./user.type";

export default class Employ extends User implements UserType {
  designation: string;
  salary: string;
  offliceTime: string

  constructor(name: string, mobile: number, age: number, designation: string, offliceTime: string, salary: string) {
    super(name, age, mobile)
    this.designation = designation
    this.salary = salary
    this.offliceTime = offliceTime
  }
  printEmploy = () => {
    console.log(`Employ named : ${this.name}`)
  }
}
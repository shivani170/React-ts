// Question:
// Create a class as User with basic(personal) details.
// User class need to be a parent class of Employee Class
// Create an Interface having designation, salary , offlice_time and
// printEmployee Which will be user by Employee class.
// Expectation:
// 1. User Must able to pass his/her details information to Employee Class and
// must be able to print the same.
// 2. Only printEmployee must be accessible form employee class’s object

import { UserType } from "./user.type";


 export class User implements UserType {
    name:string;
   age: number
   mobile: number

  constructor(name: string, age: number, mobile: number){
    this.name = name,
    this.age = age
    this.mobile = mobile
  }
 }

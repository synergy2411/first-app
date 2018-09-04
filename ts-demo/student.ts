import { Person } from './person';

export class Student{
    private firstName : string;
    private lastName : string;
    private age : number;
    constructor(obj : Person){
        this.firstName = obj.firstName;
        this.lastName =obj.lastName;
        this.age = obj.age;
    }
    getFullName () : string {
        return this.firstName + " " + this.lastName;
    }
}
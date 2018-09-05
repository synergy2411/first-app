import { User } from './../model/user';

export const USER_DATA : User[] = [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1965"),
    income : 50000,
    isWorking  : true,
    company : "Microsoft",
    image : "assets/images/bill.jpg",
    vote : 120
},{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Aug 1, 1965"),
    income : 0,
    isWorking  : false,
    company : "Apple",
    image : "assets/images/steve.png",
    vote : 180
},{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date("Jan 2, 1965"),
    income : 40000,
    isWorking  : true,
    company : "World Widde Web",
    image : "assets/images/tim.jpg",
    vote : 150
}]
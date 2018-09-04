import { User } from './../model/user';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'app-user',
    // template : `
    //     <h1>User Component Loaded!!</h1>
    
    // `
    templateUrl : "./user.component.html",
    // styles : [`
    //     h1{
    //         color : red;
    //     }
    // `],
    styleUrls : [`./user.component.css`],
    encapsulation : ViewEncapsulation.Emulated
})  
export class UserComponent{

    
    user : User = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 21, 1965"),
        income : 50000,
        isWorking  : true,
        company : "Microsoft",
        image : "assets/images/bill.jpg",
        vote : 120
    }
}
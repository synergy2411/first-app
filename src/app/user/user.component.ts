import { DataService } from './../services/data.service';
import { User } from './../model/user';
// import { USER_DATA } from '../data/mocks';

import {
    Component,
    ViewEncapsulation,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    SimpleChanges,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-user',
    // template : `
    //     <h1>User Component Loaded!!</h1>

    // `
    templateUrl: "./user.component.html",
    // styles : [`
    //     h1{
    //         color : red;
    //     }
    // `],
    styleUrls: [`./user.component.css`],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class UserComponent 
    //implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy 
    {

    users : User[];

    @Input('title') title: string;

    moreInfo(user: User) {
        alert(`${user.firstName} is working with ${user.company}`);
    }

    constructor(private dataService : DataService){}
    increase(){
        this.dataService.counter++;
    }
    ngOnInit() {
        //console.log("ngOnInit");
        // this.users = USER_DATA;
        // this.users = this.dataService.getUserData();
        this.dataService.getDataFromAPI();
        this.dataService.getHttpClientUserData();
        this.dataService.getHttpUserData()
            .subscribe(
                (users)=>{
                //console.log(users);
                this.users = users;
                },
                (err)=>console.log(err),
                ()=>{
                    //console.log("FINISHED!")
                }
        );
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log("ngOnChanges", changes);
    // }
    // ngDoCheck() { console.log("ngDoCheck"); }
    // ngAfterContentInit() { console.log("ngAfterContentInit"); }
    // ngAfterContentChecked() { console.log("ngAfterContentChecked"); }
    // ngAfterViewInit() { console.log("ngAfterViewInit"); }
    // ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
    // ngOnDestroy() { console.log("ngOnDestroy"); }
    // constructor() { console.log("Constructor") }
}
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 
import { Injectable, NgZone } from "@angular/core";
import { USER_DATA } from "../data/mocks";
import { User } from "../model/user";
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';


@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http,
                private httpClient : HttpClient,
                private zone : NgZone){ }
    getUserData() : User[] {
        return USER_DATA;
    }

    getHttpClientUserData(){
        this.httpClient.get("assets/data/user-data.json", {
            observe : 'response',
            responseType : "text"
        })
            .subscribe(xyz => console.log(xyz));

    }

    getHttpUserData(){
        return this.http.get("assets/data/user-data.json")
            .map(response=><User[]>response.json().userdata);

        // return this.http.get("assets/data/user-data.json")
        //     .pipe(map(response=><User[]>response.json().userdata))
            
    }


    // API HIT
    getDataFromAPI(){
        this.httpClient.get("https://sg-app-4f104.firebaseio.com/userdata.json")
            .subscribe(users=>console.log(users));
    }
}

// npm i firebase --save
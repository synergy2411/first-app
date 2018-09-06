import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService : AuthService,
              private dataService : DataService){}
  signIn(f : NgForm){
    console.log("Username : " + f.value.username + 
              "\nPassword : " + f.value.password);
    this.authService.signin(
      f.value.username, 
      f.value.password
    )
  }

  getData(){
    this.dataService.getDataFromAPIwithToken();
  }

}

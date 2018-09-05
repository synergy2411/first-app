import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signIn(f : NgForm){
    console.log("Username : " + f.value.username + 
              "\nPassword : " + f.value.password)
  }

}

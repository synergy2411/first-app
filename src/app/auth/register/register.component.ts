import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);

  hasExclamation(input : FormControl){
    const hasExcl = input.value.indexOf('!') >=0;
    return hasExcl ? null : {needExclamation : true}
  }

  registerForm : FormGroup;

  constructor(private fb : FormBuilder, 
              private authService : AuthService) { 
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    });
  }

  register(){
    //console.log(this.registerForm);
    console.log("Username :: "+ this.registerForm.value.username +
            "\nPassword :: " + this.registerForm.value.password);
    this.authService.register(
      this.registerForm.value.username,
      this.registerForm.value.password
    ).then((response)=>{
      console.log("Successfully register the User!", response);
    }).catch(err=>{
      console.log("Some Problem occured.", err);
    })
  }

  ngOnInit() {
  }

}

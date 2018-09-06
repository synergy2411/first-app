import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token : string = null;

  register(username : string, password : string){
    return firebase.auth()
      .createUserWithEmailAndPassword(username, password);
  }

  signin(username : string, password : string){
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .then(repsonse=>{
        console.log("Succeefully Logged in!", repsonse);
        firebase.auth().currentUser.getIdToken()
          .then((token)=>{
            console.log(token);
            this.token = token;
            sessionStorage.setItem("token", token);
          })
      }).catch(err=>{
        console.log("Problem Occured.", err)
      });
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    this.token = null;
    firebase.auth().signOut();
  }
}

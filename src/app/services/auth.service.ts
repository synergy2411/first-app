import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  register(username : string, password : string){
    return firebase.auth()
      .createUserWithEmailAndPassword(username, password);
  }

  signin(username : string, password : string){
    return firebase.auth()
      .signInWithEmailAndPassword(username, password);
  }
}

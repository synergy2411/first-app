import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Hello Angular!"

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBYv6FyWdjI2iN1UnOq5eOU-7a2Px8fGg8",
      authDomain: "sg-app-4f104.firebaseapp.com"
    });
  }
}

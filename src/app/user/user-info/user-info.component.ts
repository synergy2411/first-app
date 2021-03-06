import { User } from './../../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{
  @Input('user') user : User;

  myClasses = {
    feature : false, 
    underline : true
  }

  defaultColor = "blue";
  initialColor = "green";

}

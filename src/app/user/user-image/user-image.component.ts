import { User } from './../../model/user';
import { Component, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{
  @Input('user') user : User;

  @Output('childEvent') childEvent = new EventEmitter<User>();

  onBtnClick(user : User){
    this.childEvent.emit(user);
  }
}

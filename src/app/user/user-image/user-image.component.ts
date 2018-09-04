import { User } from './../../model/user';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{
  @Input('user') user : User;

  moreInfo(user : User){
      alert(`${user.firstName} is working with ${user.company}`);
  }
}

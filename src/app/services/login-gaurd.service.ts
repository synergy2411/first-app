import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGaurdService implements CanActivate {
  canActivate(){
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['signin']);
    }
    return this.authService.isAuthenticated()
    
  }
  constructor(private authService : AuthService,
              private router : Router){}
}

import { UserComponent } from './user/user.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterComponent } from './auth/register/register.component';
import { Routes } from '@angular/router'; 
import { SigninComponent } from './auth/signin/signin.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

export const APP_ROUTES : Routes = [{
    path : '',
    redirectTo : 'signin',
    pathMatch : 'full'
},{
    path : 'signin',
    component : SigninComponent
}, {
    path  : 'register',
    component : RegisterComponent
}, {
    path : 'pipe',
    component : PipeDemoComponent
},{
    path : 'obs',
    component : ObservableDemoComponent
}, {
    path : 'users',
    component : UserComponent
},{
    path : "**",
    redirectTo : 'signin',
    pathMatch : 'full'
}]
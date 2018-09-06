import { LoginGaurdService } from './services/login-gaurd.service';
import { OverviewComponent } from './product/overview/overview.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterComponent } from './auth/register/register.component';
import { Routes } from '@angular/router'; 
import { SigninComponent } from './auth/signin/signin.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { SpecificationComponent } from './product/specification/specification.component';

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
    component : UserComponent,
    canActivate : [LoginGaurdService]
},{
    path : 'product',
    component : ProductComponent,
    children : [{
        path : 'overview/:id',
        component : OverviewComponent
    },{
        path : 'spec',
        component : SpecificationComponent
    }]
},{
    path : "**",
    redirectTo : 'signin',
    pathMatch : 'full'
}]
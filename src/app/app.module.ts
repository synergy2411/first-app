import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { APP_ROUTES } from './app.routes';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserImageComponent,
    UserInfoComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    SigninComponent,
    RegisterComponent,
    ObservableDemoComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    EmployeeModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ DataService, AuthService, LoginGaurdService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }, {
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

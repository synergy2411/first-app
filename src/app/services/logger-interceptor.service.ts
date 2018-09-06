import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class LoggerInterceptorService implements HttpInterceptor{

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
    console.log("Logger Interceptor Works!", req);
    return next.handle(req)
      .do(response=>{
        console.log(response);
        return response;
      });
  }

}

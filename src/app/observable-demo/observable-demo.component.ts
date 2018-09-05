import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent  {
  data = Observable.create((observer)=>{
    setTimeout(()=>{
      observer.next("First Package!")
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package!")
    }, 2000);
    setTimeout(()=>{
      observer.next("Third Package!")
    }, 4000);
    setTimeout(()=>{
      observer.complete();
    }, 5000)
  }).subscribe(
    value=>console.log(value),
    err=>console.log(err),
    ()=>{console.log('COMPLETED')}
  );
  constructor(){
  }
}

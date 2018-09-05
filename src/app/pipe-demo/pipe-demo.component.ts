import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
  providers : [DataService]
})
export class PipeDemoComponent {
  filteredStatus = "";

  todos = [{
    label: "Some Task",
    status: 'done'
  }, {
    label: "Some Task",
    status: 'pending'
  }, {
    label: "Some Task",
    status: 'done'
  }, {
    label: "Some Task",
    status: 'pending'
  }]

  onAddItem() {
    this.todos.push({
      label: "New Item",
      status: "pending"
    });
  }

  contact_no: number = 987654321;
  data: Promise<string>;
  msg: any = "Waiting...";
  increase(){
    this.dataService.counter++;
  }
  constructor(public dataService : DataService) {
    this.data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Here the data comes...");
      }, 2000);
      // }).then((response)=>{
      //   if(response){ 
      //     this.msg = response;
      //   }
      // },(message)=>{
      //   console.log(message);
      // }).catch(err=>{console.log(err)})

    })
  }
}

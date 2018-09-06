import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productData = {
    name : 'iPhoone',
    id : 1
  }
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.router.navigate(['/signin']);
  }
}

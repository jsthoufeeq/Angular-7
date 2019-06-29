import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './../store/market';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  titi='ik'
  constructor() { }

  ngOnInit() {
  }

  add(a,b) {
    return a+b;
  }

  random() {
    return {
      a: 'thoufeeq',
      b: 'ahamed',
      age: 27
    }
  }

}

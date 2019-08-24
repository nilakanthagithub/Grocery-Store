import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-branded',
  templateUrl: './branded.component.html',
  styleUrls: ['./branded.component.css']
})
export class BrandedComponent implements OnInit {

  foodItems: Array<any>;
  vegItems: Array<any>;
  beverageItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByTwoFieldName('heading', 'Popular Brand', 'category', 'Food')
    .subscribe(result => {
      this.foodItems = result;
    });
    this.productService.searchByTwoFieldName('heading', 'Popular Brand', 'category', 'Fruit & Vegetable')
    .subscribe(result => {
      this.vegItems = result;
    });
    this.productService.searchByTwoFieldName('heading', 'Popular Brand', 'section', 'Beverage')
    .subscribe(result => {
      this.beverageItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  softItems: Array<any>;
  juiceItems: Array<any>;
  energyItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByTwoFieldName('category', 'Soft Drink', 'section', 'Beverage')
    .subscribe(result => {
      this.softItems = result;
    });
    this.productService.searchByFieldName('category', 'Juice')
    .subscribe(result => {
      this.juiceItems = result;
    });
    this.productService.searchByFieldName('category', 'Energy Drink')
    .subscribe(result => {
      this.energyItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

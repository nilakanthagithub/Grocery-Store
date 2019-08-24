import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  vegItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByFieldName('category', 'Fruit & Vegetable')
    .subscribe(result => {
      this.vegItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

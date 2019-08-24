import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {

  breadItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByFieldName('category', 'Bread & Bakery')
    .subscribe(result => {
      this.breadItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

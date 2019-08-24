import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  hotItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByFieldName('heading', 'Hot Offer')
    .subscribe(result => {
      this.hotItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent implements OnInit {

  cleaningItems: Array<any>;
  utensilItems: Array<any>;
  petItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByTwoFieldName('heading', 'Household Product', 'category', 'Cleaning')
    .subscribe(result => {
      this.cleaningItems = result;
    });
    this.productService.searchByTwoFieldName('heading', 'Household Product', 'category', 'Utensil')
    .subscribe(result => {
      this.utensilItems = result;
    });
    this.productService.searchByTwoFieldName('heading', 'Household Product', 'category', 'Pet Food')
    .subscribe(result => {
      this.petItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByFieldName('category', 'Pet Food')
    .subscribe(result => {
      this.petItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

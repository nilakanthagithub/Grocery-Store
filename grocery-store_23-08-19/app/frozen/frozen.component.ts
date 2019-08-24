import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrls: ['./frozen.component.css']
})
export class FrozenComponent implements OnInit {

  frozenItems: Array<any>;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productService.searchByFieldName('category', 'Frozen Food')
    .subscribe(result => {
      this.frozenItems = result;
    });
  }

  addToCart(item){
    this.productService.addToCart(item);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:any;
  item: any;
  foodItems: Array<any>;
  vegItems: Array<any>;
  beverageItems: Array<any>;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getId();
    this.getData();
  }

  getId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  getData(){
    this.productService.detailById(this.id)
    .subscribe(result => {
      this.item = result;
    });

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

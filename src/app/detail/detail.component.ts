import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  routerUrl: string;
  id:any;
  item: any;
  foodItems: Array<any>;
  vegItems: Array<any>;
  beverageItems: Array<any>;

  navigationSubscription;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private _router: Router
  ) {
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
   }

  ngOnInit() {
    this.getId();
    this.getData();
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
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

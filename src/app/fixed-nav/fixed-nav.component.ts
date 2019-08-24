import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routeList } from './route-list';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  routerUrl: string;
  isHome: boolean;
  routeList = routeList;
  curRoute: string;
  cartItems: Array<any>;
  searchItems: Array<any>;
  totalAmount: any;
  searchValue: string;

  constructor(
    private _router: Router,
    public productService: ProductService
    ) { }

  ngOnInit() {
    this.listenRouting();
    this.getData();
  }

  listenRouting() {
    this._router.events.subscribe((router: any) => {
      this.routerUrl = router.urlAfterRedirects;
      this.isHome = (this.routerUrl =="/home") ? true : false;
      if(this.routerUrl){
        for(let i of this.routeList){
          if(i.key==this.routerUrl.substr(1)){
            this.curRoute=i.value;
            break;
          }
        }
      }
    });
  }

  getData(){
    this.productService.getCartItems()
    .subscribe(result => {
      this.cartItems = result;
      this.totalAmount = 0;
      this.cartItems.forEach(element => {
        this.totalAmount += element.payload.doc.data().discPrice;
      });
    });
  }

  deleteCartItem(docId){
    this.productService.deleteCartItem(docId);
  }

  updateCartItem(item, event){
    // console.log(event.target.value);
    if(event.target.value > 0){
      this.productService.updateCartItem(item, event.target.value);
    }
  }

  searchProduct(event){
    if(event.target.value){
      this.searchValue = event.target.value[0].toUpperCase() + event.target.value.substring(1).toLowerCase();
      this.productService.searchProduct(this.searchValue)
      .subscribe(result => {
        this.searchItems = result;
        console.log(this.searchItems.length);
        // this.searchItems.forEach(element => {
        //   console.log(element.payload.doc.data().name);
        // });
        // console.log("---------");
      });
    }
  }

}

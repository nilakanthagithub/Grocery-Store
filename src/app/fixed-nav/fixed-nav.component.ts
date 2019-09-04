import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routeList } from './route-list';
import { ProductService } from '../product.service';
import { AuthService } from '../auth/auth.service';

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
  isShow: boolean;
  product='';
  searchFlag: boolean = false;
  prevUrl:string;

  constructor(
    private _router: Router,
    public productService: ProductService,
    private  authService:  AuthService
    ) { }

  ngOnInit() {
    this.listenRouting();
    this.getData();
    this.isShow = false;
    this.product='';
  }

  listenRouting() {
    this._router.events.subscribe((router: any) => {
      this.routerUrl = router.urlAfterRedirects;
      this.isHome = (this.routerUrl =="/home") ? true : false;
      if(this.routerUrl){
        for(let i of this.routeList){
          if(i.key == this.routerUrl.substr(1)){
            this.curRoute=i.value;
            break;
          }
        }
        if(this.routerUrl.substr(1,this.routerUrl.lastIndexOf('/') - 1) == 'detail'){
          this.curRoute='Product Details';
        }
        else {
          this.product = "";
        }
      }
    });
  }

  goToUrl(url,productName){
    this.prevUrl = this._router.url;
    this._router.navigateByUrl(url);
    this.isShow = false;
    this.searchFlag = true;
    this.product = productName;
  }

  getData(){
    this.productService.getCartItems()
    .subscribe(result => {
      this.cartItems = result;
      this.totalAmount = 0;
      this.cartItems.forEach(element => {
        this.totalAmount += Math.round(element.payload.doc.data().discPrice * 100);
      });
      this.totalAmount = (this.totalAmount / 100).toFixed(2);
    });
  }

  deleteCartItem(docId){
    this.productService.deleteCartItem(docId);
  }

  updateCartItem(item, event){
    if(event.target.value > 0){
      this.productService.updateCartItem(item, event.target.value);
    }
  }

  searchProduct(event){
    if(event.target.value){
      this.isShow = true;
      this.searchValue = event.target.value[0].toUpperCase() + event.target.value.substring(1).toLowerCase();
      this.productService.searchProduct(this.searchValue)
      .subscribe(result => {
        if(result.length == 0){
          this.isShow = false;
        }
        this.searchItems = result;
      });
    }
    else {
      this.isShow = false;
      if(this.searchFlag == true){
        this.searchFlag = false;
        this._router.navigateByUrl(this.prevUrl);
      }
    }
  }

}

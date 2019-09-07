import { Component, OnInit, Input } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;
  @Input() url: string;

  constructor(public  router:  Router) { }

  ngOnInit() {
  }

  goToUrl(){
    if(this.url != ""){
      this.router.navigate([this.url]);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // product:any = 
  //   {id: 175,
  //   name: 'lax & Walnut Loaf (400 Gm)',
  //   desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //   price: 9,
  //   discPrice: 7,
  //   rating: 3,
  //   tagFile: 'offer.png',
  //   imgFile: '48.png',
  //   category: 'Bread & Bakery'
  // };

  registerForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 \'\-]+$"), Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
		phone: new FormControl('',  [Validators.required,
      Validators.pattern("[0-9]*"), Validators.maxLength(10), Validators.minLength(10)])
	});
  
  constructor(
    private formBuilder: FormBuilder,
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const item = this.registerForm.value;
      this.productService.addUser(item);
      this.registerForm.reset();
      alert("User Registered Successfully!");
    }
  }

  addProduct(){
    // this.productService.addProduct(this.product);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
	});

  constructor(
    private formBuilder: FormBuilder,
    public productService: ProductService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const item = this.loginForm.value;
      // this.productService.login(item);
      // this.loginForm.reset();
    }
  }

}

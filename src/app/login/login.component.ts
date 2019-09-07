import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { ProductService } from '../product.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  msg:any="";
  url:any="";

  constructor(
    private formBuilder: FormBuilder,
    public productService: ProductService,
    private  authService:  AuthService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      document.getElementById("exampleModal").style.opacity = "0";
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then(()=>{
        this.msg = this.authService.getError('login');
        document.getElementById("exampleModal").style.opacity = "1";
        if(this.msg == "Sign In Successfull!"){
          this.url = "home";
        }
      });
      this.loginForm.reset();
    }
  }

}

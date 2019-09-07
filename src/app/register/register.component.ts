import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { ProductService } from '../product.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    // username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9 \'\-]+$"), Validators.minLength(4)]),
    // phone: new FormControl('',  [Validators.required,
      // Validators.pattern("[0-9]*"), Validators.maxLength(10), Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z]+[a-z0-9_.+-]+@[a-z]+[a-z0-9-]+.[a-z]+[a-z0-9-.]+$")])
  });
  isAvailable: boolean = true;
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
    if (this.registerForm.valid) {
      document.getElementById("exampleModal").style.opacity = "0";
      const item = this.registerForm.value;
      this.authService.signUp(this.registerForm.value.email, this.registerForm.value.password).then(()=>{
        this.msg = this.authService.getError('signup');
        document.getElementById("exampleModal").style.opacity = "1";
        if(this.msg == "Sign Up Successfull!"){
          this.url = "login";
        }
      });
      this.registerForm.reset();
      // this.productService.addUser(item);
    }
  }

  // searchUser(event){
  //   if(event.target.value){
  //     this.productService.searchUser(event.target.value)
  //     .subscribe(result => {
  //       if(result.length > 0){
  //         this.isAvailable = false;
  //         this.registerForm.controls['username'].setErrors({'available': true});
  //       }
  //       else{
  //         this.isAvailable = true;
  //       }
  //     });
  //   }
  // }

}

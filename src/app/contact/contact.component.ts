import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    phone: new FormControl('',  [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10),Validators.minLength(10)]),
		email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
		subject: new FormControl('', [Validators.required]),
		message: new FormControl('', [])
	});

  constructor(
    private formBuilder: FormBuilder,
    public productService: ProductService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const item = this.contactForm.value;
      this.productService.addMail(item);
      this.contactForm.reset();
      alert("Submitted Successfully!");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscribeForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z]+[a-z0-9_.+-]+@[a-z]+[a-z0-9-]+.[a-z]+[a-z0-9-.]+$")]),
	});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}

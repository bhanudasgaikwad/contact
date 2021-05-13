import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  signInForm:any;

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })  
  }

  validateUserDetails() {
    this.router.navigate(['./contact']);
  }

  gotoPasswordPage(){
    this.router.navigate(['forgot-password']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm:any;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      enterPassword: ['', [Validators.required, Validators.minLength(4)]],
      reEnterPassword: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  

  setNewPassword() {
    console.log('clicked')
  }

}

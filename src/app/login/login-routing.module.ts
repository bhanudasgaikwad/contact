import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const loginRoute: Routes = [
  { 
    path: '',
    component: SigninComponent
  },
  { 
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoute)
  ],
  exports: [RouterModule]
})

export class LoginRoutingModule { }

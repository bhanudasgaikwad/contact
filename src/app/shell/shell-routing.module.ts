import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactModule } from '../contact/contact.module';

const shellRoutes: Routes = [
  {
    path: '',
    loadChildren: '../contact/contact.module#ContactModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactModule,
    RouterModule.forChild(shellRoutes)
  ],
  exports: [RouterModule]
})

export class ShellRoutingModule { }

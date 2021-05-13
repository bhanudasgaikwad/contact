import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact-component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { BreadcrumbComponent } from './../common/breadcrumb/breadcrumb.component';
import { PageTitleComponent } from './../common/page-title/page-title.component';

const contactRoutes: Routes = [
  { 
    path: 'contact',
    component: ContactComponent,
    children: [
      { 
        path: '',
        component: ContactListComponent
      },
      {
        path: 'add-contact',
        component: AddNewContactComponent
      },
      {
        path: 'edit-contact',
        component: EditContactComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    //EditContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(contactRoutes)
  ],
  exports:[RouterModule]
})
export class ContactRoutingModule { }

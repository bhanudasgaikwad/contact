import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact-component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { BreadcrumbComponent } from './../common/breadcrumb/breadcrumb.component';
import { PageTitleComponent } from './../common/page-title/page-title.component';

import { HeaderComponent } from '../shell/header/header.component';
import { FooterComponent } from '../shell/footer/footer.component';
import { NavigationComponent } from '../shell/navigation/navigation.component';
import { SearchComponent } from '../shell/search/search.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    HeaderComponent,
    NavigationComponent,
    SearchComponent,
    ContactListComponent,
    AddNewContactComponent,
    EditContactComponent,
    BreadcrumbComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; 
import { ContactList } from '../contact-list';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss'],
  providers:[ContactService]
})

export class AddNewContactComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  addNewContactForm:any;
  pageData: any = {
    pageTitle : 'Add new contact',
    btnString: 'Add New',
    pageUrl: './contact/add-contact'
  }

  ngOnInit(): void {
    this.addNewContactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      emailAddress: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      status: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  addNewContact(data: ContactList) {
    this.contactService.saveData(
      {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        status: data.status
      }
    )
  }

}

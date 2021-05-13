import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; 
import { ContactList } from '../contact-list';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
  providers:[ContactService]
})
export class EditContactComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  editContactForm:any;
  pageData: any = {
    pageTitle : 'Edit Contact',
    btnString: 'Add New',
    pageUrl: './contact/add-contact'
  }
  

  ngOnInit(): void {
    this.editContactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      emailAddress: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      status: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  editContact(data: ContactList) {
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

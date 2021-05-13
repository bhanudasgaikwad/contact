import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; 
import { ContactList } from '../contact-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers:[ContactService]
})

export class ContactListComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private contactService: ContactService
  ) { }
  
  addNewContactForm:any;
  contactList: any;
  
  pageData: any = {
    pageTitle : 'Contact',
    btnString: 'Add New',
    pageUrl: './add-contact'
  }

  ngOnInit(): void {    
    this.getContactList();
  }

  getContactList(){
    this.contactService.getData()
    .subscribe( (data: ContactList) =>  {
      this.contactList = data
    },
      error => console.log(error)
    )
  }

  addNewContact(){
    this.router.navigate(['./contact/add-contact']);
  }

  deleteContact(id:number) {
    this.contactService.deleteData(id)
    .subscribe()
  }

  editContact(id: number){
    this.router.navigate(['./contact/edit-contact']);
    console.log(id)
  }
}

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'contact-me-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts;
  contact = new Contact('', '');

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  onSubmit() {
    this.contactService.save(this.contact);
    this.contacts = this.contactService.getList();
  }

  deleteAll() {
    this.contactService.deleteAll();
    this.contacts = this.contactService.getList();
  }
}

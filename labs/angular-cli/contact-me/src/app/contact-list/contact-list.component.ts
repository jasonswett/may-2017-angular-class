import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-me-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  onSubmit(form) {
    this.contactService.save({
      name: form.name.value,
      phone: form.phone.value
    });

    this.contacts = this.contactService.getList();
  }

  deleteAll() {
    this.contactService.deleteAll();
    this.contacts = this.contactService.getList();
  }
}

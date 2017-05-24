import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'contact-me-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact = new Contact('', '');

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contactService.save(this.contact);
  }
}

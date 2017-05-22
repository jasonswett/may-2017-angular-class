import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-me-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts = [
    {
      name: 'Paul McCartney',
      phone: '(683) 385-3835'
    },
    {
      name: 'John Lennon',
      phone: '(322) 395-3388'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    let contact = {
      name: form.name.value,
      phone: form.phone.value
    };

    this.contacts.push(contact);
  }

}

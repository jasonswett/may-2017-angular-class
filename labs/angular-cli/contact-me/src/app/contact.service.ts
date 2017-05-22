import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
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

  save(contact) {
    this.contacts.push(contact);
  }

  getList() {
    return this.contacts;
  }
}

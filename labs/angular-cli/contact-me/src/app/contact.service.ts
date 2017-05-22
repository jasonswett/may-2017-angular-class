import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  constructor() { }

  save(contact) {
    let contacts = this.getList();
    contacts.push(contact);

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  getList() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  }
}

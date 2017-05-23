import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  constructor() { }

  save(contact) {
    let contacts = this.getList();
    contact.slug = this.slugify(contact.name);
    contacts.push(contact);

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  getList() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  }

  deleteAll() {
    localStorage.setItem('contacts', '[]');
  }

  slugify(value) {
    return value.replace(' ', '-').toLowerCase();
  }

  findBySlug(slug) {
    let matchingContact;

    this.getList().forEach(function(contact) {
      if (contact.slug === slug) {
        matchingContact = contact;
      }
    });

    return matchingContact;
  }
}

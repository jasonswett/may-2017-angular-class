import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class ContactService {
  constructor(private storageService: StorageService) { }

  save(contact) {
    let contacts = this.getList();
    contact.slug = this.slugify(contact.name);
    contacts.push(contact);

    this.storageService.setItem('contacts', JSON.stringify(contacts));
  }

  getList() {
    return JSON.parse(this.storageService.getItem('contacts')) || [];
  }

  deleteAll() {
    this.storageService.setItem('contacts', '[]');
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

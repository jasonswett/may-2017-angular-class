import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Utilities } from './utilities';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  constructor(private storageService: StorageService) { }

  save(contact) {
    let contacts = this.getList();
    contact.slug = Utilities.slugify(contact.name);
    contacts.push(contact);

    this.storageService.setItem('contacts', JSON.stringify(contacts));

    return Observable.create(observer => {
      observer.next(contact);
    });
  }

  getList() {
    return JSON.parse(this.storageService.getItem('contacts')) || [];
  }

  deleteAll() {
    this.storageService.setItem('contacts', '[]');
  }

  slugify(value) {
    return '';
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

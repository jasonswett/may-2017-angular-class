import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Utilities } from './utilities';
import { StorageService } from './storage.service';

@Injectable()
export class ContactService {
  private contactSavedSource = new Subject();
  contactSaved$ = this.contactSavedSource.asObservable();

  constructor(private storageService: StorageService) { }

  save(contact) {
    let contacts = this.getList();
    contact.slug = Utilities.slugify(contact.name);
    contacts.push(contact);

    this.storageService.setItem('contacts', JSON.stringify(contacts));

    this.contactSavedSource.next(contact);

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

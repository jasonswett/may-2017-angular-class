import { Injectable } from '@angular/core';
import { Utilities } from './utilities';

@Injectable()
export class MockContactService {
  contacts = [];

  save(contact) {
    let contacts = this.getList();
    contact.slug = Utilities.slugify(contact.name);
    contacts.push(contact);
  }

  getList() {
    return this.contacts;
  }

  findBySlug(slug) {
    return {
      name: 'Jason Swett'
    }
  }
}

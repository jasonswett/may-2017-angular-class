import { Injectable } from '@angular/core';

@Injectable()
export class MockContactService {
  getList() {
    return [];
  }

  findBySlug(slug) {
    return {
      name: 'Jason Swett'
    }
  }
}

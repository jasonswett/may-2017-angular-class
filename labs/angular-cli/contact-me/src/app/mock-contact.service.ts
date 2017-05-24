import { Injectable } from '@angular/core';

@Injectable()
export class MockContactService {
  findBySlug(slug) {
    return {
      name: 'Jason Swett'
    }
  }
}

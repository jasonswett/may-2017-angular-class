import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor() { }

  getList() {
    return [
      {
        name: 'Paul McCartney',
        phone: '(683) 385-3835'
      },
      {
        name: 'John Lennon',
        phone: '(322) 395-3388'
      }
    ];
  }
}

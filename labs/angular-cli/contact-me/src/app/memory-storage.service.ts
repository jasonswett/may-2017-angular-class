import { Injectable } from '@angular/core';

@Injectable()
export class MemoryStorageService {
  items = {};

  constructor() { }

  setItem(key, value) {
    this.items[key] = value;
  }

  getItem(key) {
    return this.items[key];
  }
}

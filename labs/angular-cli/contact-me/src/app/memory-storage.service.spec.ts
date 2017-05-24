import { TestBed, inject } from '@angular/core/testing';

import { MemoryStorageService } from './memory-storage.service';

describe('MemoryStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemoryStorageService]
    });
  });

  it('should be created', inject([MemoryStorageService], (service: MemoryStorageService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';
import { ContactService } from './contact.service';
import { StorageService } from './storage.service';
import { MemoryStorageService } from './memory-storage.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        {
          provide: StorageService,
          useClass: MemoryStorageService
        }
      ]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));

  describe('save', function() {
    it('should save a contact', inject([ContactService], (service: ContactService) => {
      service.deleteAll();

      let contact = {
        name: 'Jason Swett',
        slug: 'jason-swett',
        phone: '(616) 856-8075'
      };

      service.save(contact);

      expect(service.getList()).toContain(contact);
    }));

    it('should save a slug', inject([ContactService], (service: ContactService) => {
      service.deleteAll();

      let contact = {
        name: 'Jason Swett',
        phone: '(616) 856-8075'
      };

      let savedContact = service.save(contact);

      expect(savedContact.slug).toEqual('jason-swett');
    }));
  });
});

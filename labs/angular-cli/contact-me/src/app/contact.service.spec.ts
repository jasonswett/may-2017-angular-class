import { TestBed, inject } from '@angular/core/testing';
import { ContactService } from './contact.service';
import { StorageService } from './storage.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        StorageService
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
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactService } from '../contact.service';
import { MockContactService } from '../mock-contact.service';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ContactListComponent ],
      providers: [
        {
          provide: ContactService,
          useClass: MockContactService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', function() {
    it('should be created', () => {
      component.onSubmit({
        name: {value: 'Jason Swett'},
        phone: {value: '(616) 856-8075'}
      });

      let contact = {
        name: 'Jason Swett',
        phone: '(616) 856-8075',
        slug: 'jason-swett'
      };

      expect(component.contacts).toContain(contact);
    });
  });
});

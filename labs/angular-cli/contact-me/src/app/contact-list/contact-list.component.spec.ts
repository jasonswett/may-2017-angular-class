import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactService } from '../contact.service';
import { MockContactService } from '../mock-contact.service';
import { FormsModule } from '@angular/forms';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
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
      let contact = {
        name: 'Jason Swett',
        phone: '(616) 856-8075',
        slug: 'jason-swett'
      };

      component.contact = contact;
      component.onSubmit();

      expect(component.contacts).toContain(contact);
    });
  });
});

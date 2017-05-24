import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ContactDetailComponent } from './contact-detail.component';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ContactService } from '../contact.service';
import { MockContactService } from '../mock-contact.service';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ],
      providers: [
        {
          provide: ContactService,
          useClass: MockContactService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({ slug: 'jason-swett' })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    expect(component.contact.name).toEqual('Jason Swett');
  });
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ContactDetailComponent } from './contact-detail.component';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ContactService } from "../contact.service";

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ],
      providers: [
        ContactService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({})
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
});

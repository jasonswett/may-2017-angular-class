import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactService } from '../contact.service';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ContactListComponent ],
      providers: [ ContactService ]
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
});

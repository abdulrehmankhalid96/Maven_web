import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAdviceComponent } from './personal-advice.component';

describe('PersonalAdviceComponent', () => {
  let component: PersonalAdviceComponent;
  let fixture: ComponentFixture<PersonalAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

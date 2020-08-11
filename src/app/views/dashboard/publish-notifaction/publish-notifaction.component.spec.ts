import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNotifactionComponent } from './publish-notifaction.component';

describe('PublishNotifactionComponent', () => {
  let component: PublishNotifactionComponent;
  let fixture: ComponentFixture<PublishNotifactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishNotifactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishNotifactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

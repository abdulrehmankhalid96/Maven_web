import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditiseComponent } from './commoditise.component';

describe('CommoditiseComponent', () => {
  let component: CommoditiseComponent;
  let fixture: ComponentFixture<CommoditiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoditiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoditiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

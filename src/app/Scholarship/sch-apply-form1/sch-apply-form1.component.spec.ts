import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchApplyForm1Component } from './sch-apply-form1.component';

describe('SchApplyForm1Component', () => {
  let component: SchApplyForm1Component;
  let fixture: ComponentFixture<SchApplyForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchApplyForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchApplyForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

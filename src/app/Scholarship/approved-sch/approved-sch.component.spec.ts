import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedSchComponent } from './approved-sch.component';

describe('ApprovedSchComponent', () => {
  let component: ApprovedSchComponent;
  let fixture: ComponentFixture<ApprovedSchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedSchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

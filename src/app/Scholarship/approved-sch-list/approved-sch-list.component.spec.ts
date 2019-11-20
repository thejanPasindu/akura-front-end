import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedSchListComponent } from './approved-sch-list.component';

describe('ApprovedSchListComponent', () => {
  let component: ApprovedSchListComponent;
  let fixture: ComponentFixture<ApprovedSchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedSchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedSchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

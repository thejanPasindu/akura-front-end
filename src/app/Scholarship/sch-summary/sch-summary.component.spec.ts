import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchSummaryComponent } from './sch-summary.component';

describe('SchSummaryComponent', () => {
  let component: SchSummaryComponent;
  let fixture: ComponentFixture<SchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

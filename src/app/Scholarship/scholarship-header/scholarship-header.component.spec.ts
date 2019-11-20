import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipHeaderComponent } from './scholarship-header.component';

describe('ScholarshipHeaderComponent', () => {
  let component: ScholarshipHeaderComponent;
  let fixture: ComponentFixture<ScholarshipHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

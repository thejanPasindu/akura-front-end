import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDetailsComponent } from './sch-details.component';

describe('SchDetailsComponent', () => {
  let component: SchDetailsComponent;
  let fixture: ComponentFixture<SchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

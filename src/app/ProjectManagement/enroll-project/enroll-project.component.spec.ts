import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollProjectComponent } from './enroll-project.component';

describe('EnrollProjectComponent', () => {
  let component: EnrollProjectComponent;
  let fixture: ComponentFixture<EnrollProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

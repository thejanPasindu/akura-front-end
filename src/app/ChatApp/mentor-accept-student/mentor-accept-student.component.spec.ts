import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAcceptStudentComponent } from './mentor-accept-student.component';

describe('MentorAcceptStudentComponent', () => {
  let component: MentorAcceptStudentComponent;
  let fixture: ComponentFixture<MentorAcceptStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAcceptStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAcceptStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

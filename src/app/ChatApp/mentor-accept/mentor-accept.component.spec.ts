import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAcceptComponent } from './mentor-accept.component';

describe('MentorAcceptComponent', () => {
  let component: MentorAcceptComponent;
  let fixture: ComponentFixture<MentorAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

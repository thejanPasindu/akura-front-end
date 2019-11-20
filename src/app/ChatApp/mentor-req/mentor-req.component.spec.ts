import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorReqComponent } from './mentor-req.component';

describe('MentorReqComponent', () => {
  let component: MentorReqComponent;
  let fixture: ComponentFixture<MentorReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetMailSendComponent } from './reset-mail-send.component';

describe('ResetMailSendComponent', () => {
  let component: ResetMailSendComponent;
  let fixture: ComponentFixture<ResetMailSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetMailSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetMailSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

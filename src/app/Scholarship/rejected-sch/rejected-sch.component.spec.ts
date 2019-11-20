import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedSchComponent } from './rejected-sch.component';

describe('RejectedSchComponent', () => {
  let component: RejectedSchComponent;
  let fixture: ComponentFixture<RejectedSchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedSchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

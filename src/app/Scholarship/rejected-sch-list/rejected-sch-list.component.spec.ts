import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedSchListComponent } from './rejected-sch-list.component';

describe('RejectedSchListComponent', () => {
  let component: RejectedSchListComponent;
  let fixture: ComponentFixture<RejectedSchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedSchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedSchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

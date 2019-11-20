import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommProfileComponent } from './comm-profile.component';

describe('CommProfileComponent', () => {
  let component: CommProfileComponent;
  let fixture: ComponentFixture<CommProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

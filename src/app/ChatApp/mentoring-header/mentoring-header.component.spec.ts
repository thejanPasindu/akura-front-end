import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringHeaderComponent } from './mentoring-header.component';

describe('MentoringHeaderComponent', () => {
  let component: MentoringHeaderComponent;
  let fixture: ComponentFixture<MentoringHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

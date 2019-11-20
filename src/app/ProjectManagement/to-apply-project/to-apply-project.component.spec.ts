import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToApplyProjectComponent } from './to-apply-project.component';

describe('ToApplyProjectComponent', () => {
  let component: ToApplyProjectComponent;
  let fixture: ComponentFixture<ToApplyProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToApplyProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToApplyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

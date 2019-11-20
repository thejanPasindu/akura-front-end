import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchViewComponent } from './sch-view.component';

describe('SchViewComponent', () => {
  let component: SchViewComponent;
  let fixture: ComponentFixture<SchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

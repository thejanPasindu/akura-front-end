import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchViewsComponent } from './sch-views.component';

describe('SchViewsComponent', () => {
  let component: SchViewsComponent;
  let fixture: ComponentFixture<SchViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

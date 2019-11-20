import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStudentComponent } from './your-student.component';

describe('YourStudentComponent', () => {
  let component: YourStudentComponent;
  let fixture: ComponentFixture<YourStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProjectComponent } from './creat-project.component';

describe('CreatProjectComponent', () => {
  let component: CreatProjectComponent;
  let fixture: ComponentFixture<CreatProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

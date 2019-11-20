import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSchComponent } from './welcome-sch.component';

describe('WelcomeSchComponent', () => {
  let component: WelcomeSchComponent;
  let fixture: ComponentFixture<WelcomeSchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

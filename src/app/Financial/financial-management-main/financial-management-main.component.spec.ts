import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialManagementMainComponent } from './financial-management-main.component';

describe('FinancialManagementMainComponent', () => {
  let component: FinancialManagementMainComponent;
  let fixture: ComponentFixture<FinancialManagementMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialManagementMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

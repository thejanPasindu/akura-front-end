import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredReportUploadComponent } from './expired-report-upload.component';

describe('ExpiredReportUploadComponent', () => {
  let component: ExpiredReportUploadComponent;
  let fixture: ComponentFixture<ExpiredReportUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredReportUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredReportUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

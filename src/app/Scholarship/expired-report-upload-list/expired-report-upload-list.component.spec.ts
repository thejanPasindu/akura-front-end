import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredReportUploadListComponent } from './expired-report-upload-list.component';

describe('ExpiredReportUploadListComponent', () => {
  let component: ExpiredReportUploadListComponent;
  let fixture: ComponentFixture<ExpiredReportUploadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredReportUploadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredReportUploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

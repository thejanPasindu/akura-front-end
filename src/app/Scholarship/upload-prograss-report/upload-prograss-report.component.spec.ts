import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPrograssReportComponent } from './upload-prograss-report.component';

describe('UploadPrograssReportComponent', () => {
  let component: UploadPrograssReportComponent;
  let fixture: ComponentFixture<UploadPrograssReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPrograssReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPrograssReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

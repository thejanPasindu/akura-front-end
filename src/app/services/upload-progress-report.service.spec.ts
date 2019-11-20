import { TestBed } from '@angular/core/testing';

import { UploadProgressReportService } from './upload-progress-report.service';

describe('UploadProgressReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadProgressReportService = TestBed.get(UploadProgressReportService);
    expect(service).toBeTruthy();
  });
});

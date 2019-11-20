import { TestBed } from '@angular/core/testing';

import { ScholarshipApplyService } from './scholarship-apply.service';

describe('ScholarshipApplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScholarshipApplyService = TestBed.get(ScholarshipApplyService);
    expect(service).toBeTruthy();
  });
});

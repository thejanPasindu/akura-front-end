import { TestBed } from '@angular/core/testing';

import { SchDataPassService } from './sch-data-pass.service';

describe('SchDataPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchDataPassService = TestBed.get(SchDataPassService);
    expect(service).toBeTruthy();
  });
});

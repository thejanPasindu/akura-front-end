import { TestBed } from '@angular/core/testing';

import { CommonPusherServiceService } from './common-pusher-service.service';

describe('CommonPusherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonPusherServiceService = TestBed.get(CommonPusherServiceService);
    expect(service).toBeTruthy();
  });
});

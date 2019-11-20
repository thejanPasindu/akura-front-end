import { TestBed } from '@angular/core/testing';

import { ChatDataPassService } from './chat-data-pass.service';

describe('ChatDataPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatDataPassService = TestBed.get(ChatDataPassService);
    expect(service).toBeTruthy();
  });
});

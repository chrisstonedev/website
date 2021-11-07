import { TestBed } from '@angular/core/testing';

import { SpeakingService } from './speaking.service';

describe('SpeakingService', () => {
  let service: SpeakingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LatestService } from './latest.service';

describe('LatestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestService = TestBed.get(LatestService);
    expect(service).toBeTruthy();
  });
});

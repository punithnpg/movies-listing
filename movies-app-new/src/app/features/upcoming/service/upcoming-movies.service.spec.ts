import { TestBed } from '@angular/core/testing';

import { UpcomingMoviesService } from './upcoming-movies.service';

describe('UpcomingMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpcomingMoviesService = TestBed.get(UpcomingMoviesService);
    expect(service).toBeTruthy();
  });
});

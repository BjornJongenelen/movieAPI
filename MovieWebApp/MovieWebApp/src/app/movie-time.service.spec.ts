import { TestBed } from '@angular/core/testing';

import { MovieTimeService } from './Service/movie-time.service';

describe('MovieTimeService', () => {
  let service: MovieTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

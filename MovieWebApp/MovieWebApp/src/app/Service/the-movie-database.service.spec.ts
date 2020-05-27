import { TestBed } from '@angular/core/testing';

import { TheMovieDatabaseService } from './the-movie-database.service';

describe('TheMovieDatabaseService', () => {
  let service: TheMovieDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMovieDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

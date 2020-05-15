import { TestBed } from '@angular/core/testing';

import { MOVIEAPIService } from './movieapi.service';

describe('MOVIEAPIService', () => {
  let service: MOVIEAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MOVIEAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GeographicsService } from './geographics.service';

describe('GeographicsService', () => {
  let service: GeographicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeographicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

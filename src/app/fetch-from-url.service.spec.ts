import { TestBed } from '@angular/core/testing';

import { FetchFromURLService } from './fetch-from-url.service';

describe('FetchFromURLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFromURLService = TestBed.get(FetchFromURLService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DistribuidorasService } from './distribuidoras.service';

describe('DistribuidorasService', () => {
  let service: DistribuidorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribuidorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

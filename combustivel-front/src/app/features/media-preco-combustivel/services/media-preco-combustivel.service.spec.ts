import { TestBed } from '@angular/core/testing';

import { MediaPrecoCombustivelService } from './media-preco-combustivel.service';

describe('MediaPrecoCombustivelService', () => {
  let service: MediaPrecoCombustivelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaPrecoCombustivelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompraVendaMunicipioService } from './compra-venda-municipio.service';

describe('CompraVendaMunicipioService', () => {
  let service: CompraVendaMunicipioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraVendaMunicipioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

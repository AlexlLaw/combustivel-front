import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVendaMunicipioComponent } from './compra-venda-municipio.component';

describe('CompraVendaMunicipioComponent', () => {
  let component: CompraVendaMunicipioComponent;
  let fixture: ComponentFixture<CompraVendaMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVendaMunicipioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVendaMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

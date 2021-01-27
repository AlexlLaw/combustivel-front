import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { CompraVendaMunicipioComponent } from './compra-venda-municipio.component';
import { CompravendaMunicipioRoutingModule } from './compra-venda-municipio-routing.module';

@NgModule({
  declarations: [CompraVendaMunicipioComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CompravendaMunicipioRoutingModule,
    NgxPaginationModule
  ],
   exports: [CompraVendaMunicipioComponent]
})
export class CompraVendaMunicipioModule { }

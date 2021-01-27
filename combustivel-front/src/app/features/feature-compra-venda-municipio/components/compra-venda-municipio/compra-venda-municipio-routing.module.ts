import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompraVendaMunicipioComponent } from './compra-venda-municipio.component';

const routes: Routes = [
  {
    path: '',
    component: CompraVendaMunicipioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompravendaMunicipioRoutingModule { }

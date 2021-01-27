import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoricoCombustivelComponent } from '../../pages/historico-combustivel/historico-combustivel.component';
import { CadastroCombustivelComponent } from './cadastro-combustivel.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricoCombustivelComponent,
    children: [
      {
        path: 'cadastro',
        component: CadastroCombustivelComponent
    },
    {
      path: 'alterar/:id',
      component: CadastroCombustivelComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombustivelRoutingModule { }

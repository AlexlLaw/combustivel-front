import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistribuidorasComponent } from './distribuidoras.component';

const routes: Routes = [
  {
    path: '',
    component: DistribuidorasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistribuidorasRoutingModule { }

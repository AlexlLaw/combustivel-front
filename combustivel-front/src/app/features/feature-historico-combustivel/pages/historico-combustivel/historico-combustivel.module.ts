import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ListCombustivelModule } from '../../components/list-combustivel/list-combustivel.module';
import { CombustivelRoutingModule } from '../../components/cadastro-combustivel/combustivel-routing.module';
import { HistoricoCombustivelComponent } from './historico-combustivel.component';

@NgModule({
  declarations: [
    HistoricoCombustivelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ListCombustivelModule,
    CombustivelRoutingModule
  ],
  exports: [HistoricoCombustivelComponent],
  providers: [DatePipe]
})
export class HistoricoCombustivelModule { }

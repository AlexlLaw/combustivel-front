import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { ListCombustivelComponent } from './list-combustivel.component';

@NgModule({
  declarations: [ListCombustivelComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [ListCombustivelComponent]
})
export class ListCombustivelModule { }

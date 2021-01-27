import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { DistribuidorasComponent } from './distribuidoras.component';
import { DistribuidorasRoutingModule } from './distribuidoras-routing.module';

@NgModule({
  declarations: [DistribuidorasComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DistribuidorasRoutingModule,
    NgxPaginationModule
  ],
  exports: [DistribuidorasComponent]
})
export class DistribuidorasModule { }

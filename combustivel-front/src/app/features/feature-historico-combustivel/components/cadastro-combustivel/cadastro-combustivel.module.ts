import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxCurrencyModule } from 'ngx-currency';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CadastroCombustivelComponent } from './cadastro-combustivel.component';

@NgModule({
  declarations: [
    CadastroCombustivelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    NgxCurrencyModule,
  ],
  exports: [CadastroCombustivelComponent],
})
export class CadastroCombustivelModule { }

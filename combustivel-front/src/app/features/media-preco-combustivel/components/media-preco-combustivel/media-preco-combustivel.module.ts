import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MediaPrecoCombustivelComponent } from './media-preco-combustivel.component';
import { MediaPrecoCombustivelRoutingModule } from './media-preco-combustivel-routing.module';

@NgModule({
  declarations: [MediaPrecoCombustivelComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MediaPrecoCombustivelRoutingModule
  ],
  exports: [MediaPrecoCombustivelComponent]
})
export class MediaPrecoCombustivelModule { }

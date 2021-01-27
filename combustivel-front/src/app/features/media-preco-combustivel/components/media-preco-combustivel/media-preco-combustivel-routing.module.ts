import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaPrecoCombustivelComponent } from './media-preco-combustivel.component';

const routes: Routes = [
  {
    path: '',
    component: MediaPrecoCombustivelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaPrecoCombustivelRoutingModule { }

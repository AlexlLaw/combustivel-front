import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

import { MediaPrecoCombustivelService } from '../../services/media-preco-combustivel.service';
import { MediaPrecoCombustivelForm } from './media-preco-combustivel.form';

@Component({
  selector: 'app-media-preco-combustivel',
  templateUrl: './media-preco-combustivel.component.html',
  styleUrls: ['./media-preco-combustivel.component.css']
})
export class MediaPrecoCombustivelComponent implements OnInit {

    public media: number;
    private _mediaPrecoCombustivelForm: MediaPrecoCombustivelForm;

    constructor(
        private mediaPrecoCombustivelService: MediaPrecoCombustivelService
    ) {
        this._mediaPrecoCombustivelForm = new MediaPrecoCombustivelForm();
    }

    ngOnInit(): void {
    }

    public get mediaPrecocombustivelForm(): MediaPrecoCombustivelForm {
      return this._mediaPrecoCombustivelForm;
    }

    public isFieldValid(form: FormGroup, field: string) {
      return !form.get(field).valid && form.get(field).dirty;
    }

    public getPesquisar(): void {
        const municipio = this.mediaPrecocombustivelForm.municipio.value;
        this.mediaPrecoCombustivelService.getMediaMunicipio(municipio)
        .subscribe(
          (media) => {
          this.media = media;
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao gerar a Média desse Município',
            footer: 'Por gentileza, Entre em contato com o suporte técnico'
          });
        });
    }
}

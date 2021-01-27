import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { CombustivelService } from '../../services/combustivel.service';
import { MethodsEnum } from 'src/app/core/enums/methods.enum';
import { CombustivelForm } from './combustivel.form';
import { CombustivelInterface } from 'src/app/core/interfaces/combustivel.interface';
import { Combustivel } from 'src/app/core/models/combustivel';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-cadastro-combustivel',
  templateUrl: './cadastro-combustivel.component.html',
  styleUrls: ['./cadastro-combustivel.component.css']
})
export class CadastroCombustivelComponent implements OnInit {

    public combustivel: Combustivel;
    public id: number;
    private _combustivelForm: CombustivelForm;

    constructor(
        private activeRouter: ActivatedRoute,
        private router: Router,
        private combustivelService: CombustivelService,
        private notificationService: NotificationService,
        private datePipe: DatePipe
    ) {
        this._combustivelForm = new CombustivelForm();
        this.id = this.activeRouter.snapshot.params.id;
    }

    ngOnInit(): void {
      if (this.isAlterar()) {
        this.getDadosCombustivel();
      }
    }

    public isAlterar(): boolean {
        return !!this.id;
    }

    public get combustivelForm(): CombustivelForm {
        return this._combustivelForm;
    }

    public voltar(): void {
        void this.router.navigate(['/historico-combustivel']);
    }

    public isFieldValid(form: FormGroup, field: string) {
        return !form.get(field).valid && form.get(field).dirty;
    }

    public save() {
        this.combustivelForm.markAllAsTouched();
        if (this.combustivelForm.valid) {
            const method = this.isAlterar() ? MethodsEnum.PUT : MethodsEnum.POST;
            const dadosEnvio = this.combustivelForm.getDadosEnvioCombustivel();

            if (this.id) {
              dadosEnvio.id = this.id;
            }

            dadosEnvio.data = this.datePipe.transform(dadosEnvio.data, 'dd/mm/yyyy');

            this.combustivelService.postPutCombustivel(dadosEnvio, method)
            .pipe(take(1))
            .subscribe((response: CombustivelInterface) => {
              if (this.isAlterar()) {
                Swal.fire(
                  'Combustivel',
                  'Atualizado com sucesso!',
                  'success'
                );
              }

              if (!this.isAlterar()) {
                Swal.fire(
                  'Combustivel!',
                  'Cadastrado com sucesso!',
                  'success'
                );
                this.combustivelForm.reset();
              }

              this.notificationService.notification.emit();
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Falha ao inserir novo combustivel',
                footer: 'Por gentileza, Entre em contanto com o suporte tecnico'
              });
            });
        }
    }

    public getDadosCombustivel(): void {
      this.combustivelService.getDadosCombustivel(this.id)
        .subscribe(
          (combustivel) => {
          this.combustivelForm.setValue(combustivel);
          this.combustivel = combustivel;
        });
    }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { CombustivelInterface } from 'src/app/core/interfaces/combustivel.interface';
import { CombustivelService } from '../../services/combustivel.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-list-combustivel',
  templateUrl: './list-combustivel.component.html',
  styleUrls: ['./list-combustivel.component.css']
})
export class ListCombustivelComponent implements OnInit, OnDestroy {

    public page: number;
    public count: number;
    public tableSize: number;
    public tableSizes: Array<any> = [];
    public loading: boolean;
    public hasPostPut: boolean;
    public combustiveis: Array<CombustivelInterface> = [];
    private _subscription: Subscription;

    constructor(
        private combustivelService: CombustivelService,
        private router: Router,
        private notificationService: NotificationService
     ) {
        this.loading = false;
        this.hasPostPut = true;
        this.page = 1;
        this.count = 0;
        this.tableSize = 8;
        this.tableSizes = [3, 6, 9, 12];
    }

    ngOnInit(): void {
      this._subscription = this.notificationService.notification.subscribe(() => { this.getCombustiveis(); });
      this.getCombustiveis();
    }

    ngOnDestroy(): void {
      this._subscription.unsubscribe();
    }

    public redirect(id?: number): void {
       this.hasPostPut = false;
       (id) ? void this.router.navigate(['/historico-combustivel/alterar/', id]) : void this.router.navigate(['/historico-combustivel/cadastro/']);
    }

    public getCombustiveis(): void {
      this.combustivelService.getCombustivel()
      .subscribe(
        (res: Array<CombustivelInterface>) => {
          this.combustiveis = res.slice(0).reverse();
          this.loading = true;
      });
    }

    public delete(id: number): void {
      this.combustivelService.deleteCombustivel(id)
      .subscribe(
        (res) => {
          Swal.fire({
            title: 'Tem certeza ?',
            text: 'Não será possível reverter isto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
            }
          });
          this.getCombustiveis();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Falha ao remover este combustivel',
            footer: 'Por gentileza, Entre em contato com o suporte técnico'
          });
        });
    }

    public onTableDataChange(event){
      this.page = event;
      this.getCombustiveis();
    }

    public onTableSizeChange(event): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.getCombustiveis();
    }
}

import { Component, OnInit } from '@angular/core';

import { DistribuidoraInterface } from 'src/app/core/interfaces/Distribuidora.interface';
import { DistribuidorasService } from '../../service/distribuidoras.service';

@Component({
  selector: 'app-distribuidoras',
  templateUrl: './distribuidoras.component.html',
  styleUrls: ['./distribuidoras.component.css']
})
export class DistribuidorasComponent implements OnInit {

    public page: number;
    public count: number;
    public tableSize: number;
    public tableSizes: Array<any> = [];
    public loading: boolean;
    public distribuidoras: Array<DistribuidoraInterface> = [];

    constructor(
        private distribuidorasService: DistribuidorasService
    ) {
        this.loading = false;
        this.page = 1;
        this.count = 0;
        this.tableSize = 8;
        this.tableSizes = [3, 6, 9, 12];
    }

    ngOnInit(): void {
      this.getDistribuidoras();
    }

    public getDistribuidoras(): void {
      this.distribuidorasService.getDistribuidoras()
      .subscribe(
        (res: Array<DistribuidoraInterface>) => {
          this.distribuidoras = res;
          this.loading = true;
        }
      );
    }

    public onTableDataChange(event){
      this.page = event;
      this.getDistribuidoras();
    }

    public onTableSizeChange(event): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.getDistribuidoras();
    }

}

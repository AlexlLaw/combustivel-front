import { Component, OnInit } from '@angular/core';
import { CompraVendaMunicipioInterface } from 'src/app/core/interfaces/compra-venda-municipio.interface';
import { CompraVendaMunicipioService } from '../../service/compra-venda-municipio.service';

@Component({
  selector: 'app-compra-venda-municipio',
  templateUrl: './compra-venda-municipio.component.html',
  styleUrls: ['./compra-venda-municipio.component.css']
})
export class CompraVendaMunicipioComponent implements OnInit {

    public page: number;
    public count: number;
    public tableSize: number;
    public tableSizes: Array<any> = [];
    public loading: boolean;
    public municipios: Array<CompraVendaMunicipioInterface> = [];

    constructor(
        private compraVendaMunicipioService: CompraVendaMunicipioService
    ) {
        this.loading = false;
        this.page = 1;
        this.count = 0;
        this.tableSize = 8;
        this.tableSizes = [3, 6, 9, 12];
    }

    ngOnInit(): void {
      this.getMunicipios();
    }

    public getMunicipios(): void {
      this.compraVendaMunicipioService.getCompraVendaMunicipio()
      .subscribe(
        (res: Array<CompraVendaMunicipioInterface>) => {
          this.municipios = res;
          this.loading = true;
        }
      );
    }

    public onTableDataChange(event){
      this.page = event;
      this.getMunicipios();
    }

    public onTableSizeChange(event): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.getMunicipios();
    }

}

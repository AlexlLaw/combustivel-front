import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompraVendaMunicipioService {

    private readonly API = `${environment.API}combustivel/valor-media-compra-venda-municipio`;

    constructor(private http: HttpClient) { }

    public getCompraVendaMunicipio = (): Observable<any> => {
      return this.http.get(this.API);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribuidorasService {

    private readonly API = `${environment.API}combustivel/dados-agrupados-por-distribuidora`;

    constructor(private http: HttpClient) { }

    public getDistribuidoras = (): Observable<any> => {
      return this.http.get(this.API);
    }
}

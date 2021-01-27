import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CombustivelInterface } from 'src/app/core/interfaces/combustivel.interface';
import { MethodsEnum } from 'src/app/core/enums/methods.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {

  private readonly API = `${environment.API}historico`;

  constructor(private http: HttpClient) { }

  public postPutCombustivel = (dados: CombustivelInterface, method: string): Observable<any> => {
    if (MethodsEnum.PUT === method) {
        return this.http.put(this.API, dados);
    }
    return this.http.post(this.API, dados);
  }

  public getDadosCombustivel = (idCombustivel: number): Observable<any> => {
    return this.http.get(`${this.API}/${idCombustivel}`);
  }

  public getCombustivel = (): Observable<any> => {
    return this.http.get(`${this.API}`);
  }

  public deleteCombustivel = (idCombustivel: number): Observable<any> => {
    return this.http.delete(`${this.API}/${idCombustivel}`);
  }
}

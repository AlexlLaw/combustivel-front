import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaPrecoCombustivelService {

    private readonly API = `${environment.API}combustivel/media-de-preco/`;

    constructor(private http: HttpClient) { }

    public getMediaMunicipio = (municipio: string): Observable<any> => {
      return this.http.get(`${this.API}${municipio}`);
    }
}

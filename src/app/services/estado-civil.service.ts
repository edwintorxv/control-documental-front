import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../models/base-reponse';

import { environment } from 'src/environments/environment';
import { EstadoCivilResponse } from '../models/estado-civil-response';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {

  private apiUrl = `${environment.apiUrl}estadoCivil`

  constructor(private http: HttpClient) { }

  getEstadoCivil():Observable<BaseResponse<EstadoCivilResponse>>{
    return this.http.get<BaseResponse<EstadoCivilResponse>>(`${this.apiUrl}`);
  }

}

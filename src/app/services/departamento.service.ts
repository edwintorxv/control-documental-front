import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/models/base-reponse';
import { DepartamentoResponse } from 'src/app/models/departamento-response';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = `${environment.apiUrl}departamentos`

  constructor(private http: HttpClient) { }

  getDepartamentos():Observable<BaseResponse<DepartamentoResponse>>{
    return this.http.get<BaseResponse<DepartamentoResponse>>(`${this.apiUrl}`);
  }


}

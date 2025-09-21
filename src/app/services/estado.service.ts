import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-reponse';
import { EstadoResponse } from '../models/estado-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiUrl = `${environment.apiUrl}estado`

  constructor(private http: HttpClient) { }

  getEstado():Observable<BaseResponse<EstadoResponse>>{
    return this.http.get<BaseResponse<EstadoResponse>>(`${this.apiUrl}`);
  }


}

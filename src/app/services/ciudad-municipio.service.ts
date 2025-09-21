import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-reponse';
import { CiudadMunicipioResponse } from '../models/ciudad-municipio-reponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadMunicipioService {

  private apiUrl = `${environment.apiUrl}ciudadMunicipio`

  constructor(private http: HttpClient) { }

  getByCiudad(idCiudad: number):Observable<BaseResponse<CiudadMunicipioResponse>>{
    return this.http.get<BaseResponse<CiudadMunicipioResponse>>(`${this.apiUrl}/${idCiudad}`);
  }


}

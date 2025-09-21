import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-reponse';
import { NivelAcademicoResponse } from '../models/nivel-academico-response';

@Injectable({
  providedIn: 'root'
})
export class NivelAcademicoService {

  private apiUrl = `${environment.apiUrl}nivelAcademico`

  constructor(private http: HttpClient) { }

  getNivelACademico():Observable<BaseResponse<NivelAcademicoResponse>>{
    return this.http.get<BaseResponse<NivelAcademicoResponse>>(`${this.apiUrl}`);
  }


}

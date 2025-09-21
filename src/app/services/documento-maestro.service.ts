import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/models/base-reponse';
import { DocumentoMaestroResponse } from 'src/app/models/documento-maestro-response';

@Injectable({
  providedIn: 'root'
})
export class DocumentoMaestroService {

  private apiUrl = `${environment.apiUrl}documentos`

  constructor(private http: HttpClient) { }

  getByTipoDocumento(idtTipoDocumento: number): Observable<BaseResponse<DocumentoMaestroResponse>>{
    return this.http.get<BaseResponse<DocumentoMaestroResponse>>(`${this.apiUrl}/${idtTipoDocumento}`);
  }
}

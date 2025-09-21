import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private apiUrl = `${environment.apiUrl}/documentos`

  constructor() { }
}

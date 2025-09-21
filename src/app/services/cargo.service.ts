import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargoResponse } from '../models/cargo-response';
import { BaseResponse } from '../models/base-reponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private apiUrl = `${environment.apiUrl}cargo`

  constructor(private http: HttpClient) { }

  getCargo():Observable<BaseResponse<CargoResponse>>{
    return this.http.get<BaseResponse<CargoResponse>>(`${this.apiUrl}`);
  }
}

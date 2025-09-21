import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AreaResponse } from '../models/area-response';
import { BaseResponse } from '../models/base-reponse';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private apiUrl = `${environment.apiUrl}area`

  constructor(private http: HttpClient) { }

  getArea():Observable<BaseResponse<AreaResponse>>{
    return this.http.get<BaseResponse<AreaResponse>>(`${this.apiUrl}`)
  }
}

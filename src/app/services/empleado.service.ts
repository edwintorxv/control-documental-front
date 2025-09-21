import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-reponse';
import { EmpleadoResponse } from '../models/empleado-response';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmpleado(): Observable<BaseResponse<EmpleadoResponse>> {
    return this.http.get<BaseResponse<EmpleadoResponse>>(`${this.apiUrl}listadoEmpleado`)
  }

  getEmpleadoPorCedula(cedulaEmpleado: string): Observable<BaseResponse<EmpleadoResponse>> {
    return this.http.get<BaseResponse<EmpleadoResponse>>(`${this.apiUrl}empleado/${cedulaEmpleado}`)

  }


  postEmpleado(empleado: Empleado) {
    const endPoint: string = `${this.apiUrl}crearEmpleado`
    console.log('ruta: ', endPoint, 'Objeto ', empleado)
    return this.http.post(endPoint, empleado);
  }


}

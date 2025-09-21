import { Departamento } from "./departamento";

export interface CiudadMunicipio{

    id: number;
    departamento: Departamento;
    codigo_dane: string;
    nombre: string;
    
}
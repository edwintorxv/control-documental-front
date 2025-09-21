import { Cargo } from "./cargo";
import { CiudadMunicipio } from "./ciudad-municipio";
import { DocumentoMaestro } from "./documento-maestro";
import { Estado } from "./estado";
import { EstadoCivil } from "./estado-civil";
import { NivelAcademico } from "./nivel-academico";

export interface Empleado {
    
    id:number;
    nombre:string;
    apellido:string;
    fecha_nacimiento:Date;
    documentoMaestro: DocumentoMaestro;
    numeroIdentificacion:string;
    ciudadMunicipio: CiudadMunicipio;
    direccionResidencia: string;
    numeroTelefono: string;
    nivelAcademico: NivelAcademico;
    estadoCivil: EstadoCivil;
    cargo: Cargo;
    estado: Estado;
    fechaIngreso: Date;
    fechaRetiro: Date;

}

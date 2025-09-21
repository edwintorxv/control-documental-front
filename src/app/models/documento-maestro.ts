import { TipoDocumento } from "./tipo-documento";

export interface DocumentoMaestro{

    id:number;
    tipoDocumento: TipoDocumento;
    nombre: string;
    sigla: string;

}
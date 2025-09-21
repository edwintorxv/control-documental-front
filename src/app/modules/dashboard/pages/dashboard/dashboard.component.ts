import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocumentoMaestroService } from '../../../../services/documento-maestro.service';
import { BaseResponse } from 'src/app/models/base-reponse';
import { DocumentoMaestroResponse } from 'src/app/models/documento-maestro-response';
import { DepartamentoService } from '../../../../services/departamento.service';
import { DepartamentoResponse } from 'src/app/models/departamento-response';
import { CiudadMunicipioService } from 'src/app/services/ciudad-municipio.service';
import { CiudadMunicipioResponse } from 'src/app/models/ciudad-municipio-reponse';
import { NivelAcademicoService } from 'src/app/services/nivel-academico.service';
import { NivelAcademicoResponse } from 'src/app/models/nivel-academico-response';
import { EstadoCivilService } from 'src/app/services/estado-civil.service';
import { EstadoCivilResponse } from 'src/app/models/estado-civil-response';
import { AreaService } from 'src/app/services/area.service';
import { AreaResponse } from 'src/app/models/area-response';
import { CargoService } from 'src/app/services/cargo.service';
import { CargoResponse } from 'src/app/models/cargo-response';
import { EstadoService } from 'src/app/services/estado.service';
import { EstadoResponse } from 'src/app/models/estado-response';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EmpleadoResponse } from 'src/app/models/empleado-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  sidebarVisible: boolean = false;
  menuUsuario: MenuItem[] = [];

  constructor(
    private documentoMaestroService: DocumentoMaestroService,
    private departamentoService : DepartamentoService,
    private ciudadMunicipioService: CiudadMunicipioService,
    private nivelAcademicoService: NivelAcademicoService,
    private estadoCivilService: EstadoCivilService,
    private areService: AreaService,
    private cargoService: CargoService,
    private estadoService: EstadoService,
    private empleadoService: EmpleadoService,
  ){}

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }  

  ngOnInit(){

    /*this.documentoMaestroService.getByTipoDocumento(4).subscribe({
      next: (response: BaseResponse<DocumentoMaestroResponse>) =>{
        console.log('Respuesta completa: ', response);
        console.log('Metadata: ', response.metadata);
        console.log('Documentos: ', response.data.lstDocumentoMaestro);
      },
      error: (err)=>{
        console.error('Error en la peticion');
      }
    });

    this.departamentoService.getDepartamentos().subscribe({
      next:(response: BaseResponse<DepartamentoResponse>) =>{
        console.log('Respuesta completa deps: ', response);
        console.log('MetaData deps: ', response.metadata);
        console.log('Departamentos: ', response.data.lstDepartamento);
      },
      error: (err)=>{
        console.error('Error en la peticion');
      }
    });

    this.ciudadMunicipioService.getByCiudad(3).subscribe({
      next:(response: BaseResponse<CiudadMunicipioResponse>)=>{
        console.log('Respuesta ciudad: ', response);
        console.log('MetaData ciudad: ', response.metadata);
        console.log('Ciudades: ', response.data.lstCiudadMunicipio);
      },error: (err)=>{
        console.error('Error en la peticion');
      }
    });

    this.nivelAcademicoService.getNivelACademico().subscribe({
      next:(response: BaseResponse<NivelAcademicoResponse>) =>{
        console.log('Respuesta nivel academico: ', response);
        console.log('MetaData nivel academico: ', response.metadata);
        console.log('Nivel academico: ', response.data.lstNivelAcademico);
      },error: (err)=>{
        console.error('Error en la peticion');
      }
      
    });

    this.estadoCivilService.getEstadoCivil().subscribe({
      next:(response: BaseResponse<EstadoCivilResponse>) =>{
        console.log('Respuesta nivel academico: ', response);
        console.log('MetaData nivel academico: ', response.metadata);
        console.log('Estado civil: ', response.data.lstEstadoCivil);
      },error: (err)=>{
        console.error('Error en la peticion');
        }
    });

   this.areService.getArea().subscribe({
    next: (response: BaseResponse<AreaResponse>) =>{
      console.log('Respuesta total area: ', response);
      console.log('Respuesta metadata: ', response.metadata);
      console.log('Respuesta areas: ', response.data.lstArea);
    }, error: (err) =>{
      console.error('Error al cosumir el servicio')
    }
   })

   this.cargoService.getCargo().subscribe({
    next: (response: BaseResponse<CargoResponse>) =>{
      console.log('Respuesta total cargo: ', response);
      console.log('Respuesta metadata: ', response.metadata);
      console.log('Respuesta cargo: ', response.data.lstCargo);
    }, error: (err) =>{
      console.error('Error al cosumir el servicio')
    }
  })

    this.estadoService.getEstado().subscribe({
      next: (response: BaseResponse<EstadoResponse>)=>{
        console.log('Response total: ', response);
        console.log('Response total: ', response.metadata);
        console.log('Response total: ', response.data.lstEstado);
      }, error: (err)=>{
        console.error('Error al cosumir el servicio')
      }
    });

    this.empleadoService.getEmpleado().subscribe({
      next: (response: BaseResponse<EmpleadoResponse>) =>{
        console.log('Response total: ', response);
        console.log('Response total: ', response.metadata);
        console.log('Response total empelados: ', response.data.lstEmpleado);
      }, error: (err) =>{
        console.error('Error al cosumir el servicio')
    }
    })*/

    this.menuUsuario = [
        {
          label: 'Empleados',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Listado',
              icon: 'pi pi-fw pi-list',
              routerLink: 'empleados'
            },
            {
              separator: true
            }
          ]
        },
        {
          label: 'Confiabilidad',
          icon: 'pi pi-fw pi-cog',
          items: [
            {
              label: 'Procesos pendientes',
              icon: 'pi pi-fw pi-list',
              routerLink: 'confiabilidad'
            },
            {
              label: 'Procesos por vencer',
              icon: 'pi pi-clock',
              routerLink: 'procesoPorVencer'
            },
            {
              separator: true
            }
          ]
        },
        {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home',
          routerLink: 'home'
        }
      ];
  }
}


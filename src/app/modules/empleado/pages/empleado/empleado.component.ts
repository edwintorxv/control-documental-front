import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BaseResponse } from 'src/app/models/base-reponse';
import { Cargo } from 'src/app/models/cargo';
import { CiudadMunicipio } from 'src/app/models/ciudad-municipio';
import { Departamento } from 'src/app/models/departamento';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoResponse } from 'src/app/models/empleado-response';
import { Estado } from 'src/app/models/estado';
import { EstadoCivil } from 'src/app/models/estado-civil';
import { NivelAcademico } from 'src/app/models/nivel-academico';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { CargoService } from 'src/app/services/cargo.service';
import { CiudadMunicipioService } from 'src/app/services/ciudad-municipio.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DocumentoMaestroService } from 'src/app/services/documento-maestro.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EstadoCivilService } from 'src/app/services/estado-civil.service';
import { EstadoService } from 'src/app/services/estado.service';
import { NivelAcademicoService } from 'src/app/services/nivel-academico.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
  providers: [MessageService]
})



export class EmpleadoComponent implements OnInit {

  lstEmpleado: Empleado[] = [];
  empleado: Empleado[] = [];

  lstTipoDocumentoIdentidad: TipoDocumento[] = [];
  lstNivelAcademico: NivelAcademico[] = [];
  lstCiudad: Departamento[] = [];
  lstMunicipio: CiudadMunicipio[] = [];
  lstCargo: Cargo[] = [];
  lstEstado: Estado[] = [];
  lstEstadoCivil: EstadoCivil[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private documentoMaestroService: DocumentoMaestroService,
    private nivelAcademicoService: NivelAcademicoService,
    private departamentoService: DepartamentoService,
    private ciudadMunicipioService: CiudadMunicipioService,
    private cargoService: CargoService,
    private estadoService: EstadoService,
    private estadoCivilService: EstadoCivilService,
    private messageService: MessageService,
  ) {

    this.frmCrearEditarEmpleado = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: [null, Validators.required],
      documentoMaestro: [null, Validators.required],
      numeroIdentificacion: ['', Validators.required],
      estadoCivil: [null, Validators.required],
      departamento: [null, Validators.required],
      ciudadMunicipio: [null, Validators.required],
      direccionResidencia: ['', Validators.required],
      numeroTelefono: ['', Validators.required],
      nivelAcademico: [null, Validators.required],
      fechaIngreso: [null],
      cargo: [null, Validators.required],
      estado: [null, Validators.required],
    });

  }

  public frmCrearEditarEmpleado!: FormGroup;

  formBuilder = inject(FormBuilder);
  codEmpleado: number = 0;
  cedulaEmpleado: string = '';
  tituloForm: string = '';
  claseBoton: string = '';
  fcrearEmpleado: boolean = false;
  acciones: boolean = false;

  pipe = new DatePipe('en-US');
  fechaConPipe: any = null;

  blockChars: RegExp = /^[^{}+_,;.:¬<>*!"|°\\~`#$%&/()=?¡¿']+$/;


  ngOnInit(): void {

    this.obtenerEmpleados();
    this.obtenerTDocumentoidentidad();
    this.obetnerNivelAcademico();
    this.obtenerDepartamentos();
    this.obtenerCargo();
    this.obtenerEstado();
    this.obtenerEstadoCivil();

  }

  obtenerEmpleados() {
    this.empleadoService.getEmpleado()
      .subscribe((empleado) => {
        this.lstEmpleado = empleado
          .data
          .lstEmpleado;
      });
  }

  obtenerTDocumentoidentidad() {
    this.documentoMaestroService.getByTipoDocumento(1)
      .subscribe((tipoDocumentoIdentidad) => {
        this.lstTipoDocumentoIdentidad =
          tipoDocumentoIdentidad
            .data
            .lstDocumentoMaestro;
      })
  }

  obetnerNivelAcademico() {
    this.nivelAcademicoService.getNivelACademico().subscribe((nivelAcademico) => {
      this.lstNivelAcademico = nivelAcademico
        .data.lstNivelAcademico;
    })
  }

  obtenerEstadoCivil() {
    this.estadoCivilService.getEstadoCivil().subscribe((estadoCivil) => {
      this.lstEstadoCivil = estadoCivil
        .data.lstEstadoCivil;
    })
  }

  obtenerDepartamentos() {
    this.departamentoService.getDepartamentos()
      .subscribe((departamentos) => {
        this.lstCiudad = departamentos
          .data
          .lstDepartamento;
      });
  }

  obtenerMunicipiosPorDepartamento() {
    this.ciudadMunicipioService.getByCiudad(this.frmCrearEditarEmpleado.value
      .departamento.id.toString())
      .subscribe((municipio) => {
        this.lstMunicipio = municipio
          .data
          .lstCiudadMunicipio
      })
  }

  obtenerCargo() {
    this.cargoService.getCargo().subscribe((cargo) => {
      this.lstCargo = cargo
        .data.lstCargo;
    })
  }

  obtenerEstado() {
    this.estadoService.getEstado().subscribe((estado) => {
      this.lstEstado = estado
        .data
        .lstEstado;
    })
  }

  verFrmCrearEmpleado() {
    this.frmCrearEditarEmpleado.reset();
    this.tituloForm = 'Crear Empleado';
    this.claseBoton = 'success';
    this.frmCrearEditarEmpleado.get('numeroIdentificacion')?.enable();
    this.fcrearEmpleado = true;
  }

  crearEmpleado() {

    this.fechaConPipe = this.pipe.transform(this.frmCrearEditarEmpleado.value.fechaNacimiento, 'yyyy-MM-dd');
    this.frmCrearEditarEmpleado.value.fechaNacimiento = this.fechaConPipe;

    this.fechaConPipe = this.pipe.transform(this.frmCrearEditarEmpleado.value.fechaIngreso, 'yyyy-MM-dd');
    this.frmCrearEditarEmpleado.value.fechaIngreso = this.fechaConPipe;

    if (this.frmCrearEditarEmpleado.valid) {
      this.empleadoService.postEmpleado(this.frmCrearEditarEmpleado.value).subscribe({
        next: (resp: any) => {
          const meta = resp.metadata?.[0]; // accedemos al primer objeto del array
          this.messageService.add({
            severity: 'success',
            summary: meta?.tipo || 'Operación exitosa',
            detail: meta?.descripcion || 'Registro creado correctamente',
            life: 5000,
          });
        },
        error: (e) => this.messageService.add({
          severity: 'error',
          summary: e.error.metadata?.[0]?.tipo || 'Error',
          detail: e.error.metadata?.[0]?.descripcion || 'Ha ocurrido un error',
          life: 10000,
        })
      });
    }
  }

  buscarEmpleado(cedula: string) {
    this.empleadoService.getEmpleadoPorCedula(cedula).subscribe((empleado) => {
      this.lstEmpleado = empleado.data.lstEmpleado ?? [];
    })
  }

  cargarDataEmpleado(idEmpleado: number, cedulaEmpleado: string) {
    /* this.empleadoService.getEmpleadoPorCedula(cedulaEmpleado).subscribe(empleadoEditar => {

      this.frmCrearEditarEmpleado.patchValue({
        nombre: empleadoEditar.empleadoResponse.lstEmpleado[0].nombre,
        apellido: empleadoEditar.empleadoResponse.lstEmpleado[0].apellido,
        fechaNacimiento: new Date(empleadoEditar.empleadoResponse.lstEmpleado[0].fechaNacimiento),
        tipoDocumentoIdentidad: empleadoEditar.empleadoResponse.lstEmpleado[0].tipoDocumentoIdentidad,
        numeroIdentificacion: empleadoEditar.empleadoResponse.lstEmpleado[0].numeroIdentificacion,
        nivelAcademico: empleadoEditar.empleadoResponse.lstEmpleado[0].nivelAcademico,
        direccionResidencia: empleadoEditar.empleadoResponse.lstEmpleado[0].direccionResidencia,
        numeroTelefono: empleadoEditar.empleadoResponse.lstEmpleado[0].numeroTelefono,
        correo: empleadoEditar.empleadoResponse.lstEmpleado[0].correo,
        numeroTelefonoEmergencia: empleadoEditar.empleadoResponse.lstEmpleado[0].numeroTelefonoEmergencia,
        estado: empleadoEditar.empleadoResponse.lstEmpleado[0].estado,
        cargo: empleadoEditar.empleadoResponse.lstEmpleado[0].cargo,
        fechaIngreso: new Date(empleadoEditar.empleadoResponse.lstEmpleado[0].fechaIngreso),
        fechaCreacion: this.pipe.transform(new Date(), 'yyyy-MM-dd'),
        usuarioCrear: '1144153179',
        // ciudad: empleadoEditar.empleadoResponse.lstEmpleado[0].municipio,
        // municipio: empleadoEditar.empleadoResponse.lstEmpleado[0].municipio
      })

    })

    this.frmCrearEditarEmpleado.get('numeroIdentificacion')?.disable();
    this.frmCrearEditarEmpleado.get('fechaIngreso')?.disable();
    this.idEmpleado = idEmpleado;*/
  }

  editarEmpleado() {
    /*this.fechaConPipe = this.pipe.transform(this.frmCrearEditarEmpleado.value.fechaNacimiento, 'yyyy-MM-dd');
    this.frmCrearEditarEmpleado.value.fechaNacimiento = this.fechaConPipe;

    if (this.frmCrearEditarEmpleado.valid) {
      this.empleadoService.editarEmpleado(this.idEmpleado, this.frmCrearEditarEmpleado.value).subscribe(
        () => {
          this.fcrearEmpleado = false;

          this.messageService.add({
            severity: 'warn',
            summary: 'Empelado editado',
            detail: 'Se ha editado el empleado ',
            life: 5000,
          })
          this.frmCrearEditarEmpleado.reset();
          this.obtenerEmpleados();
        })
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Alerta',
        detail: 'Todos los campos son obligatorios, por favor revise',
        life: 5000,
      })
    }*/
  }

  validacionEditarCrear() {
    if (this.tituloForm === 'Crear Empleado') {
      this.crearEmpleado();

    } else if (this.tituloForm === 'Editar Empleado') {
      this.editarEmpleado();
    }

  }

  verFrmEditarEmpleado() {
    this.tituloForm = 'Editar Empleado';
    this.claseBoton = 'warning';
    this.acciones = false;
    this.fcrearEmpleado = true;
    this.cargarDataEmpleado(this.codEmpleado, this.cedulaEmpleado);
  }

  verOpciones(idEmpleado: number, cedulaEmpleado: string, empleado: Empleado[]) {
    this.codEmpleado = idEmpleado;
    this.empleado = empleado;
    this.cedulaEmpleado = cedulaEmpleado;
    this.acciones = true;
  }

}

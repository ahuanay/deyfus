import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-producto-ingreso',
  templateUrl: './create-producto-ingreso.component.html',
  styleUrls: ['./create-producto-ingreso.component.css']
})
export class CreateProductoIngresoComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formProductoIngreso: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;

  public listModelos: any;
  public listCategorias: any;
  public listTiposCuero: any;
  public listColores: any;
  public listTallas: any;
  public imagen_url: any;
  public readonlyPrecio: Boolean;

  get validatorForm() { return this.formProductoIngreso.controls; }
  get formTallas() { return this.formProductoIngreso.get('tallas') as FormArray; }

  constructor(private webService: WebService, private formBuilder: FormBuilder, private modalService: NgbModal, private toastrService: ToastrService) { }

  ngOnInit() {
    if (this.typeButton === 'create') {
      this.hiddenCreateButton = false;
    } else {
      this.hiddenCreateButton = true;
    }
    if (this.typeButton === 'update') {
      this.hiddenUpdateButton = false;
    } else {
      this.hiddenUpdateButton = true;
    }
  }

  inicializator() {
    this.listModelos = [];
    this.listCategorias = [];
    this.listTiposCuero = [];
    this.listColores = [];
    this.listTallas = [];
    this.validatorFormStatus = false;
    this.readonlyPrecio = false;

    this.listModelosQuery();
    this.listCategoriasQuery();
    this.listTiposCueroQuery();
    this.listColoresQuery();
    this.inicializatorProductoIngresoForm();

    if (this.id !== '') {
      this.inicializatorByIdProductoIngreso();
    }
    
  }

  inicializatorProductoIngresoForm() {
    this.formProductoIngreso = this.formBuilder.group({
      modelo: [null, Validators.required],
      categoria: ['', Validators.required],
      tipo_cuero: [null, Validators.required],
      color: [null, Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      tallas: new FormArray([])
    });
  }

  inicializatorByIdProductoIngreso() {
    // this.webService.getByIdProductoIngreso(this.id).subscribe(
    //   response => {
    //     this.formProductoIngreso.get('nombre').setValue(response.nombre);
    //     this.formProductoIngreso.get('estado').setValue(response.estado);      
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  listModelosQuery() {
    this.webService.getActivosModelos().subscribe(
      response => {
        this.listModelos = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  listCategoriasQuery() {
    this.webService.getActivosCategorias().subscribe(
      response => {
        this.listCategorias = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  listTiposCueroQuery() {
    this.webService.getActivosTiposCuero().subscribe(
      response => {
        this.listTiposCuero = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  listColoresQuery() {
    this.webService.getActivosColores().subscribe(
      response => {
        this.listColores = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  searchModelos = (text$: Observable<string>) =>
  text$.pipe(
    map(term => term === '' ? []
      : this.listModelos.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )
  formatterModelos = (x: {nombre: string}) => x.nombre;

  searchTiposCuero = (text$: Observable<string>) =>
  text$.pipe(
    map(term => term === '' ? []
      : this.listTiposCuero.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )
  formatterTiposCuero = (x: {nombre: string}) => x.nombre;

  searchColores = (text$: Observable<string>) =>
  text$.pipe(
    map(term => term === '' ? []
      : this.listColores.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )
  formatterColores = (x: {nombre: string}) => x.nombre;

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formProductoIngreso.invalid || this.validatorExistsTallas(this.formProductoIngreso.value.tallas).length == 0) {
      if(this.formProductoIngreso.value.categoria != '') {
        if(this.validatorExistsTallas(this.formProductoIngreso.value.tallas).length == 0) {
          this.mmsToastrService('Ingrese una cantidad en una talla como minimo', '¡Error!', 'error');
        }
      }
      return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    this.webService.createProductoIngreso(this.validatorRestructJson()).subscribe(
      response => {
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error.error.error);
      }
    );
  }

  updateForm() {
    // this.webService.putProductoIngreso(this.id, this.validatorRestructJson()).subscribe(
    //   response => {
    //     this.reload.emit();
    //     this.modalReference.close();
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  validatorRestructJson() {
    var data = {
      fecha: moment().format('YYYY-MM-DD'),
      hora: moment().format('hh:mm:ss'),
      empleado_id: JSON.parse(localStorage.getItem('usuario'))._id,
      tipo_kardex_id: '5eae26d5c9120e3db8e8cfad',
      modelo_id: this.formProductoIngreso.value.modelo._id,
      categoria_id: this.formProductoIngreso.value.categoria,
      tipo_cuero_id: this.formProductoIngreso.value.tipo_cuero._id,
      tienda_id: localStorage.getItem('tienda_id'),
      color_id: this.formProductoIngreso.value.color._id,
      precio: this.formProductoIngreso.value.precio,
      tallas: this.validatorExistsTallas(this.formProductoIngreso.value.tallas),
    }
    return data;
  }

  validatorExistsTallas(tallas: any) {
    var tallasExists = [];
    tallas.forEach(e => {
      if(e.cantidad != null) {
        tallasExists.push(e);
      }
    });
    return tallasExists;
  }

  changeCategoria(e: any) {
    const control = <FormArray>this.formProductoIngreso.controls['tallas'];
    control.clear();

    var categoria_id = e.target.value;
    if(categoria_id == '') {
      this.listTallas = [];
    }
    this.listCategorias.forEach(e => {
      if(e._id == categoria_id) {
        this.listTallas = e.tallas;
      }
    });

    if(this.listTallas.length != 0) {
      this.listTallas.forEach(e => {
        control.push(this.formBuilder.group({ talla: e, cantidad: [null, Validators.min(1)] }));
      });
    }
  }

  changeValues() {
    var modelo_id = this.formProductoIngreso.value.modelo;
    var categoria_id = this.formProductoIngreso.value.categoria;
    var tipo_cuero_id = this.formProductoIngreso.value.tipo_cuero;
    var tienda_id = localStorage.getItem('tienda_id');
    var color_id = this.formProductoIngreso.value.color;

    if(modelo_id != null && categoria_id != '' && tipo_cuero_id != null && color_id != null) {
      var data = {
        modelo_id: modelo_id._id,
        categoria_id: categoria_id,
        tipo_cuero_id: tipo_cuero_id._id,
        tienda_id,
        color_id: color_id._id,
      }
      this.webService.getPrecioProducto(data).subscribe(
        response => {
          this.formProductoIngreso.get('precio').setValue(response.precio);
          this.readonlyPrecio = true;
        },
        error => {
          console.log(error);
          this.formProductoIngreso.get('precio').setValue(null);
          this.readonlyPrecio = false;
        }
      );
    }
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {size: 'xl', centered: true, backdrop: 'static'});
  }

  mmsToastrService(mms: any, title: any, status: any) {
    if(status == 'warning') {
        this.toastrService.warning(mms, title, { closeButton: true, progressBar: true, timeOut: 8000 })
    }
    if(status == 'success') {
        this.toastrService.success(mms, title, { closeButton: true, progressBar: true })
    }
    if(status == 'error') {
        this.toastrService.error(mms, title, { closeButton: true, progressBar: true })
    }
    if(status == 'info') {
        this.toastrService.info(mms, title, { closeButton: true, progressBar: true })
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-producto-egreso',
  templateUrl: './create-producto-egreso.component.html',
  styleUrls: ['./create-producto-egreso.component.css']
})
export class CreateProductoEgresoComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formProductoEgreso: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;

  public listTiendas: any;

  get validatorForm() { return this.formProductoEgreso.controls; }
  get formTallas() { return this.formProductoEgreso.get('tallas') as FormArray; }

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
    this.listTiendas = [];
    this.validatorFormStatus = false;

    this.listTiendasQuery();
    this.inicializatorProductoEgresoForm();

    if (this.id !== '') {
      this.inicializatorByIdProductoEgreso();
    }
    
  }

  inicializatorProductoEgresoForm() {
    this.formProductoEgreso = this.formBuilder.group({
      tienda: ['', Validators.required],
      cantidad: [null, [Validators.required, Validators.min(1)]]
    });
  }

  inicializatorByIdProductoEgreso() {
    // this.webService.getByIdProductoEgreso(this.id).subscribe(
    //   response => {
    //     this.formProductoEgreso.get('nombre').setValue(response.nombre);
    //     this.formProductoEgreso.get('estado').setValue(response.estado);      
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  listTiendasQuery() {
    this.webService.getActivosTiendas().subscribe(
      response => {
        this.listTiendas = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formProductoEgreso.invalid) {
      return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    // this.webService.createProductoEgreso(this.validatorRestructJson()).subscribe(
    //   response => {
    //     this.reload.emit();
    //     this.modalReference.close();
    //   },
    //   error => {
    //     console.log(error.error.error);
    //   }
    // );
  }

  updateForm() {
    // this.webService.putProductoEgreso(this.id, this.validatorRestructJson()).subscribe(
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
      tipo_kardex_id: '5eae26e3c9120e3db8e8cfae',
      modelo_id: this.formProductoEgreso.value.modelo._id,
      categoria_id: this.formProductoEgreso.value.categoria,
      tipo_cuero_id: this.formProductoEgreso.value.tipo_cuero._id,
      tienda_id: localStorage.getItem('tienda_id'),
      color_id: this.formProductoEgreso.value.color._id,
      precio: this.formProductoEgreso.value.precio,
      tallas: this.validatorExistsTallas(this.formProductoEgreso.value.tallas),
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

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
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

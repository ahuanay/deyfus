import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
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
  @Input() cantidad: any;
  @Output() reload = new EventEmitter();

  public formProductoEgreso: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;

  public listTiendas: any;

  get validatorForm() { return this.formProductoEgreso.controls; }

  constructor(private webService: WebService, private formBuilder: FormBuilder, private modalService: NgbModal, private toastrService: ToastrService) { }

  ngOnInit() {
    if (this.cantidad === 0) {
      this.hiddenCreateButton = true;
    } else {
      this.hiddenCreateButton = false;
    }
  }

  inicializator() {
    this.listTiendas = [];
    this.validatorFormStatus = false;

    this.listTiendasQuery();
    this.inicializatorProductoEgresoForm();
    
  }

  inicializatorProductoEgresoForm() {
    this.formProductoEgreso = this.formBuilder.group({
      tienda: ['', Validators.required],
      cantidad: [null, [Validators.required, Validators.min(1), Validators.max(this.cantidad)]]
    });
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

    this.saveForm();
  }

  saveForm() {
    this.webService.createProductoEgreso(this.validatorRestructJson()).subscribe(
      response => {
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }
    );
  }

  validatorRestructJson() {
    var data = {
      fecha: moment().format('YYYY-MM-DD'),
      hora: moment().format('hh:mm:ss'),
      empleado_id: JSON.parse(localStorage.getItem('usuario'))._id,
      tienda_id: this.formProductoEgreso.value.tienda,
      cantidad: this.formProductoEgreso.value.cantidad,
      producto_talla_id: this.id
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

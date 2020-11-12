import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-create-solicitud-envio',
  templateUrl: './create-solicitud-envio.component.html',
  styleUrls: ['./create-solicitud-envio.component.css']
})
export class CreateSolicitudEnvioComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Input() cantidad: any;
  @Output() reload = new EventEmitter();

  public formSolicitudEnvio: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;

  public listTiendas: any;
  public tienda_id: any;

  get validatorForm() { return this.formSolicitudEnvio.controls; }

  constructor(private webService: WebService, private socketService: SocketService, private formBuilder: FormBuilder, private modalService: NgbModal, private toastrService: ToastrService) { }

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
    this.tienda_id = localStorage.getItem('tienda_id');
    this.inicializatorSolicitudEnvioForm();
  }

  inicializatorSolicitudEnvioForm() {
    this.formSolicitudEnvio = this.formBuilder.group({
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
    if (this.formSolicitudEnvio.invalid) {
      return;
    }

    this.saveForm();
  }

  saveForm() {
    this.webService.createSolicitudEnvio(this.validatorRestructJson()).subscribe(
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
      cantidad: this.formSolicitudEnvio.value.cantidad,
      solicita_empleado_id: JSON.parse(localStorage.getItem('usuario'))._id,
      producto_talla_id: this.id,
      tienda_origen_id: this.tienda_id,
      tienda_destino_id: this.formSolicitudEnvio.value.tienda,
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

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
	selector: 'app-view-solicitud-envio',
	templateUrl: './view-solicitud-envio.component.html',
	styleUrls: ['./view-solicitud-envio.component.css']
})
export class ViewSolicitudEnvioComponent implements OnInit {

	@Input() id: any;
	@Output() reload = new EventEmitter();

	public modalReference: NgbModalRef;

	public solicitud: any;
	public url_imagen_server: String;

	constructor(private webService: WebService, private socketService: SocketService, private modalService: NgbModal, private toastrService: ToastrService, private spinnerService: NgxSpinnerService) { }

	ngOnInit() {

	}

	inicializator() {
		this.spinnerService.show();
		this.url_imagen_server = this.webService.url_imagen_server;
		this.inicializatorByIdModelo();
	}

	inicializatorByIdModelo() {
		this.webService.getByIdSolicitudEnvio(this.id).subscribe(
			response => {
				this.solicitud = response;
				console.log(response);
				this.spinnerService.hide();
			},
			error => {
				console.log(error);
			}
		);
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
			solicita_empleado_id: JSON.parse(localStorage.getItem('usuario'))._id,
			producto_talla_id: this.id,
		}
		return data;
	}

	openModal(content: any) {
		this.inicializator();
		this.modalReference = this.modalService.open(content, { size: 'xl', centered: true, backdrop: 'static' });
	}

	mmsToastrService(mms: any, title: any, status: any) {
		if (status == 'warning') {
			this.toastrService.warning(mms, title, { closeButton: true, progressBar: true, timeOut: 8000 })
		}
		if (status == 'success') {
			this.toastrService.success(mms, title, { closeButton: true, progressBar: true })
		}
		if (status == 'error') {
			this.toastrService.error(mms, title, { closeButton: true, progressBar: true })
		}
		if (status == 'info') {
			this.toastrService.info(mms, title, { closeButton: true, progressBar: true })
		}
	}
}

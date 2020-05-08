import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-create-tipo-cuero',
  templateUrl: './create-tipo-cuero.component.html',
  styleUrls: ['./create-tipo-cuero.component.css']
})
export class CreateTipoCueroComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formTipoCuero: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;
  get validatorForm() { return this.formTipoCuero.controls; }

  constructor(private webService: WebService, private socketService: SocketService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

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
    this.inicializatorTipoCueroForm();
    this.validatorFormStatus = false;
    if (this.id !== '') {
      this.inicializatorByIdTipoCuero();
    }
  }

  inicializatorTipoCueroForm() {
    this.formTipoCuero = this.formBuilder.group({
      nombre: ['', Validators.required],
      estado: [true, Validators.required],
    });
  }

  inicializatorByIdTipoCuero() {
    this.webService.getByIdTipoCuero(this.id).subscribe(
      response => {
        this.formTipoCuero.get('nombre').setValue(response.nombre);
        this.formTipoCuero.get('estado').setValue(response.estado);      
      },
      error => {
        console.log(error);
      }
    );
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formTipoCuero.invalid) {
        return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    this.webService.createTipoCuero(this.validatorRestructJson()).subscribe(
      response => {
        this.socketService.emit('models:tipo-cuero', true);
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error.error.error);
      }
    );
  }

  updateForm() {
    this.webService.putTipoCuero(this.id, this.validatorRestructJson()).subscribe(
      response => {
        this.socketService.emit('models:tipo-cuero', true);
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
      nombre: this.formTipoCuero.value.nombre.toUpperCase(),
      estado: this.formTipoCuero.value.estado
    }
    return data;
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

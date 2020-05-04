import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-create-tienda',
  templateUrl: './create-tienda.component.html',
  styleUrls: ['./create-tienda.component.css']
})
export class CreateTiendaComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formTienda: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;
  get validatorForm() { return this.formTienda.controls; }

  constructor(private webService: WebService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

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
    this.inicializatorTiendaForm();
    this.validatorFormStatus = false;
    if (this.id !== '') {
      this.inicializatorByIdTienda();
    }
  }

  inicializatorTiendaForm() {
    this.formTienda = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: [true, Validators.required],
    });
  }

  inicializatorByIdTienda() {
    this.webService.getByIdTienda(this.id).subscribe(
      response => {
        this.formTienda.get('nombre').setValue(response.nombre);
        this.formTienda.get('direccion').setValue(response.direccion);
        this.formTienda.get('estado').setValue(response.estado);
      },
      error => {
        console.log(error);
      }
    );
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formTienda.invalid) {
        return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    this.webService.createTienda(this.validatorRestructJson()).subscribe(
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
    this.webService.putTienda(this.id, this.validatorRestructJson()).subscribe(
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
      nombre: this.formTienda.value.nombre.toUpperCase(),
      direccion: this.formTienda.value.direccion.toUpperCase(),
      estado: this.formTienda.value.estado
    }
    return data;
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

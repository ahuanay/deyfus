import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-create-modelo',
  templateUrl: './create-modelo.component.html',
  styleUrls: ['./create-modelo.component.css']
})
export class CreateModeloComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formModelo: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;
  get validatorForm() { return this.formModelo.controls; }

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
    this.inicializatorModeloForm();
    this.validatorFormStatus = false;
    if (this.id !== '') {
      this.inicializatorByIdModelo();
    }
  }

  inicializatorModeloForm() {
    this.formModelo = this.formBuilder.group({
      nombre: ['', Validators.required],
      imagen_url: ['', Validators.required],
      estado: [true, Validators.required],
    });
  }

  inicializatorByIdModelo() {
    this.webService.getByIdModelo(this.id).subscribe(
      response => {
        this.formModelo.get('nombre').setValue(response.nombre);
        this.formModelo.get('imagen_url').setValue(response.imagen_url);
        this.formModelo.get('estado').setValue(response.estado);      
      },
      error => {
        console.log(error);
      }
    );
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formModelo.invalid) {
        return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    this.webService.createModelo(this.validatorRestructJson()).subscribe(
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
    this.webService.putModelo(this.id, this.validatorRestructJson()).subscribe(
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
      nombre: this.formModelo.value.nombre.toUpperCase(),
      imagen_url: this.formModelo.value.imagen_url,
      estado: this.formModelo.value.estado
    }
    return data;
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

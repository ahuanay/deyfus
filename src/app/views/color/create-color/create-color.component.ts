import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-create-color',
  templateUrl: './create-color.component.html',
  styleUrls: ['./create-color.component.css']
})
export class CreateColorComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formColor: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;
  get validatorForm() { return this.formColor.controls; }

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
    this.inicializatorProductoForm();
    this.validatorFormStatus = false;
    if (this.id !== '') {
      this.inicializatorByIdProducto();
    }
  }

  inicializatorProductoForm() {
    this.formColor = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  inicializatorByIdProducto() {
    this.webService.getByIdColor(this.id).subscribe(
      response => {
        this.formColor.get('nombre').setValue(response.nombre);      
      },
      error => {
        console.log(error);
      }
    );
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formColor.invalid) {
        return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    this.webService.createColor(this.validatorRestructJson()).subscribe(
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
    const categoria = {
      nombre: this.formColor.value.nombre.toUpperCase()
    };

    this.webService.putColor(this.id, categoria).subscribe(
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
      nombre: this.formColor.value.nombre.toUpperCase(),
      estado: true
    }
    return data;
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

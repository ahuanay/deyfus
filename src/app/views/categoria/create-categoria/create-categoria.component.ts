import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  @Input() id: any;
  @Input() typeButton: any;
  @Output() reload = new EventEmitter();

  public formCategoria: FormGroup;
  public hiddenCreateButton: boolean;
  public hiddenUpdateButton: boolean;
  public validatorFormStatus: boolean;
  public modalReference: NgbModalRef;
  get validatorForm() { return this.formCategoria.controls; }

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
    this.formCategoria = this.formBuilder.group({
      nombre: ['', Validators.required],
      tallas: [[], Validators.required],
    });
  }

  inicializatorByIdProducto() {
    this.webService.getByIdCategoria(this.id).subscribe(
      response => {
        this.formCategoria.get('nombre').setValue(response.nombre);
        this.formCategoria.get('tallas').setValue(this.convertArrayIntToChipsArray(response.tallas));        
      },
      error => {
        console.log(error);
      }
    );
  }

  saveSubmitForm() {
    this.validatorFormStatus = true;
    if (this.formCategoria.invalid) {
        return;
    }

    if (this.id !== '') {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  saveForm() {
    this.webService.createCategoria(this.validatorRestructJson()).subscribe(
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
      nombre: this.formCategoria.value.nombre,
      tallas: this.convertChipsArrayToArrayInt(this.formCategoria.value.tallas),
    };

    this.webService.putCategoria(this.id, categoria).subscribe(
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
      nombre: this.formCategoria.value.nombre.toUpperCase(),
      tallas: this.convertChipsArrayToArrayInt(this.formCategoria.value.tallas),
      estado: true
    }
    return data;
  }

  convertChipsArrayToArrayInt(array: any) {
    var arrayInt = [];
    array.forEach(e => {
      arrayInt.push(parseInt(e.value));
    });
    return arrayInt;
  }

  convertArrayIntToChipsArray(array: any) {
    var chipsArray = [];
    array.forEach(e => {
      chipsArray.push({value: e, display: e});
    });
    return chipsArray;
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

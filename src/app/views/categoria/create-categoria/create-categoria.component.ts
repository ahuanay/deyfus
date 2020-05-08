import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';

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
    this.inicializatorCategoriaForm();
    this.validatorFormStatus = false;
    if (this.id !== '') {
      this.inicializatorByIdCategoria();
    }
  }

  inicializatorCategoriaForm() {
    this.formCategoria = this.formBuilder.group({
      nombre: ['', Validators.required],
      tallas: [[], Validators.required],
      estado: [true, Validators.required],
    });
  }

  inicializatorByIdCategoria() {
    this.webService.getByIdCategoria(this.id).subscribe(
      response => {
        this.formCategoria.get('nombre').setValue(response.nombre);
        this.formCategoria.get('tallas').setValue(this.convertArrayIntToChipsArray(response.tallas));    
        this.formCategoria.get('estado').setValue(response.estado);
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
        this.socketService.emit('models:categoria', true);
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error.error.error);
      }
    );
  }

  updateForm() {
    this.webService.putCategoria(this.id, this.validatorRestructJson()).subscribe(
      response => {
        this.socketService.emit('models:categoria', true);
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
      estado: this.formCategoria.value.estado
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

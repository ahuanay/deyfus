import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';

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

  public uploadedFile: File;
  public url: string;

  get validatorForm() { return this.formModelo.controls; }

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
    this.uploadedFile = null;
    this.url = null;
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
        this.url = 'http://codbar-api.herokuapp.com/' + response.imagen_url;
        this.formModelo.get('imagen_url').clearValidators();
        this.formModelo.get('imagen_url').updateValueAndValidity();
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
    this.webService.createModelo(this.validatorRestructFormData()).subscribe(
      response => {
        this.socketService.emit('models:modelo', true);
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateForm() {
    this.webService.putModelo(this.id, this.validatorRestructFormData()).subscribe(
      response => {
        this.socketService.emit('models:modelo', true);
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }
    );
  }

  validatorRestructFormData() {
    let formData = new FormData();
    if(this.uploadedFile != null) {
      formData.append("file", this.uploadedFile, this.uploadedFile.name);
    }
    formData.append("nombre", this.formModelo.value.nombre.toUpperCase());
    formData.append("estado", this.formModelo.value.estado);
    return formData;
  }

  onFileChange(e: any) {
    if(e.target.files.length != 0) {
      this.uploadedFile = e.target.files[0];
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (e:any) => {
          this.url = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    } else {
      this.uploadedFile = null;
      this.url = null;
    }
    if(this.url == null) {
      this.formModelo.get('imagen_url').setValidators([Validators.required]);
      this.formModelo.get('imagen_url').updateValueAndValidity();
    }
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

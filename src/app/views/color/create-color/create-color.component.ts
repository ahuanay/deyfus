import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';

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
    this.inicializatorColorForm();
    this.validatorFormStatus = false;
    if (this.id !== '') {
      this.inicializatorByIdColor();
    }
  }

  inicializatorColorForm() {
    this.formColor = this.formBuilder.group({
      nombre: ['', Validators.required],
      estado: [true, Validators.required],
    });
  }

  inicializatorByIdColor() {
    this.webService.getByIdColor(this.id).subscribe(
      response => {
        this.formColor.get('nombre').setValue(response.nombre);
        this.formColor.get('estado').setValue(response.estado);      
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
        this.socketService.emit('models:color', true);
        this.reload.emit();
        this.modalReference.close();
      },
      error => {
        console.log(error.error.error);
      }
    );
  }

  updateForm() {
    this.webService.putColor(this.id, this.validatorRestructJson()).subscribe(
      response => {
        this.socketService.emit('models:color', true);
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
      estado: this.formColor.value.estado
    }
    return data;
  }

  openModal(content: any) {
    this.inicializator();
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

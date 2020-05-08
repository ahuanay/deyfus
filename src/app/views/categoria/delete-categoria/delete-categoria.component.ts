import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  @Input() id: any;
  @Output() reload = new EventEmitter();

  public modalReference: NgbModalRef;

  constructor(private webService: WebService, private socketService: SocketService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  deleteCategoria() {
    this.webService.deleteCategoria(this.id).subscribe(
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

  openModal(content: any) {
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

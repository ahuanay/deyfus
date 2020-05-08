import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-delete-modelo',
  templateUrl: './delete-modelo.component.html',
  styleUrls: ['./delete-modelo.component.css']
})
export class DeleteModeloComponent implements OnInit {

  @Input() id: any;
  @Output() reload = new EventEmitter();

  public modalReference: NgbModalRef;

  constructor(private webService: WebService, private socketService: SocketService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  deleteModelo() {
    this.webService.deleteModelo(this.id).subscribe(
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

  openModal(content: any) {
    this.modalReference = this.modalService.open(content, {centered: true, backdrop: 'static'});
  }
}

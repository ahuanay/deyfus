import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-tienda',
  templateUrl: './list-tienda.component.html',
  styleUrls: ['./list-tienda.component.css']
})
export class ListTiendaComponent implements OnInit {
  
  public listTiendas: any;
  public filterTienda: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listTiendas = [];
    this.filterTienda = '';
    this.listTiendasQuery();
    this.inicializatorSocketService();
  }

  inicializatorSocketService() {
    this.socketService.listen('models:tienda').subscribe((data) => {
      if(data) {
        this.listTiendasQuery();
      }
    });
  }

  listTiendasQuery() {
    this.webService.getAllTiendas().subscribe(
      response => {
        this.listTiendas = response;
        this.spinnerService.hide();       
      },
      error => {
        console.log(error);
      }
    )
  }

  reload() {
    this.inicializator();
  }
}

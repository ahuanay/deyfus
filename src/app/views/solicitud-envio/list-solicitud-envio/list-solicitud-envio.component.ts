import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-solicitud-envio',
  templateUrl: './list-solicitud-envio.component.html',
  styleUrls: ['./list-solicitud-envio.component.css']
})
export class ListSolicitudEnvioComponent implements OnInit {

  public listSolicitudesEnvio: any;
  public filterModelo: any;
  public url_imagen_server: String;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.url_imagen_server = this.webService.url_imagen_server;
    this.listSolicitudesEnvio = [];
    this.filterModelo = '';
    this.listSolicitudesEnvioQuery();
    this.inicializatorSocketService();
  }

  inicializatorSocketService() {
    this.socketService.listen('models:modelo').subscribe((data) => {
      if(data) {
        this.listSolicitudesEnvioQuery();
      }
    });
  }

  listSolicitudesEnvioQuery() {
    this.webService.getAllSolicitudesEnvio().subscribe(
      response => {
        this.listSolicitudesEnvio = response;
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

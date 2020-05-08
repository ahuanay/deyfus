import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-modelo',
  templateUrl: './list-modelo.component.html',
  styleUrls: ['./list-modelo.component.css']
})
export class ListModeloComponent implements OnInit {
  
  public listModelos: any;
  public filterModelo: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listModelos = [];
    this.filterModelo = '';
    this.listModelosQuery();
    this.inicializatorSocketService();
  }

  inicializatorSocketService() {
    this.socketService.listen('models:modelo').subscribe((data) => {
      if(data) {
        this.listModelosQuery();
      }
    });
  }

  listModelosQuery() {
    this.webService.getAllModelos().subscribe(
      response => {
        this.listModelos = response;
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

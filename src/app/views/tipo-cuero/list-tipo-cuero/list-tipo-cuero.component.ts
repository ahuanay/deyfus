import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-tipo-cuero',
  templateUrl: './list-tipo-cuero.component.html',
  styleUrls: ['./list-tipo-cuero.component.css']
})
export class ListTipoCueroComponent implements OnInit {
  
  public listTipoCuero: any;
  public filterTipoCuero: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listTipoCuero = [];
    this.filterTipoCuero = '';
    this.listTipoCueroQuery();
    this.inicializatorSocketService();
  }

  inicializatorSocketService() {
    this.socketService.listen('models:tipo-cuero').subscribe((data) => {
      if(data) {
        this.listTipoCueroQuery();
      }
    });
  }

  listTipoCueroQuery() {
    this.webService.getAllTiposCuero().subscribe(
      response => {
        this.listTipoCuero = response;
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

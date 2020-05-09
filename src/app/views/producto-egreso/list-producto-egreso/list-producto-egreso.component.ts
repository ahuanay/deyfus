import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-producto-egreso',
  templateUrl: './list-producto-egreso.component.html',
  styleUrls: ['./list-producto-egreso.component.css']
})
export class ListProductoEgresoComponent implements OnInit {
 
  public listProductosEgreso: any;
  public filterProductoEgreso: any;
  public tienda_id: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listProductosEgreso = [];
    this.filterProductoEgreso = '';
    this.listProductosEgresoQuery();
    this.tienda_id = localStorage.getItem('tienda_id');
    this.changeTiendaId();
  }

  changeTiendaId() {
    setInterval(() => {
      if (this.tienda_id != localStorage.getItem('tienda_id')) {
        this.spinnerService.show();
        this.listProductosEgresoQuery();
        this.tienda_id = localStorage.getItem('tienda_id');
      }
    }, 1000);
  }

  listProductosEgresoQuery() {
    this.webService.getAllProductosEgreso(localStorage.getItem('tienda_id')).subscribe(
      response => {
        this.listProductosEgreso = response;
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

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-producto-ingreso',
  templateUrl: './list-producto-ingreso.component.html',
  styleUrls: ['./list-producto-ingreso.component.css']
})
export class ListProductoIngresoComponent implements OnInit {
  
  public listProductosIngreso: any;
  public filterProductoIngreso: any;
  public tienda_id: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listProductosIngreso = [];
    this.filterProductoIngreso = '';
    this.listProductosIngresoQuery();
    this.tienda_id = localStorage.getItem('tienda_id');
    this.changeTiendaId();
  }

  changeTiendaId() {
    setInterval(() => {
      if (this.tienda_id != localStorage.getItem('tienda_id')) {
        this.listProductosIngresoQuery();
        this.tienda_id = localStorage.getItem('tienda_id');
      }
    }, 1000);
  }

  listProductosIngresoQuery() {
    this.webService.getAllProductosIngreso(localStorage.getItem('tienda_id')).subscribe(
      response => {
        this.listProductosIngreso = response;
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

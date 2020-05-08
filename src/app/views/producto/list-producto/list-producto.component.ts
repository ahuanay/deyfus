import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {
 
  public listProductos: any;
  public filterProducto: any;
  public tienda_id: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listProductos = [];
    this.filterProducto = '';
    this.listProductosQuery();
    this.tienda_id = localStorage.getItem('tienda_id');
    this.changeTiendaId();
  }

  changeTiendaId() {
    setInterval(() => {
      if (this.tienda_id != localStorage.getItem('tienda_id')) {
        this.listProductosQuery();
        this.tienda_id = localStorage.getItem('tienda_id');
      }
    }, 1000);
  }

  listProductosQuery() {
    this.webService.getByIdTiendaProductos(localStorage.getItem('tienda_id')).subscribe(
      response => {
        this.listProductos = response;
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

import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {
 
  public listProductos: any;
  public filterProducto: any;
  public tienda_id: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
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

import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-producto-egreso',
  templateUrl: './list-producto-egreso.component.html',
  styleUrls: ['./list-producto-egreso.component.css']
})
export class ListProductoEgresoComponent implements OnInit {
 
  public listProductosEgreso: any;
  public filterProductoEgreso: any;
  public tienda_id: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.listProductosEgreso = [];
    this.filterProductoEgreso = '';
    this.listProductosEgresoQuery();
    this.tienda_id = localStorage.getItem('tienda_id');
    this.changeTiendaId();
  }

  changeTiendaId() {
    setInterval(() => {
      if (this.tienda_id != localStorage.getItem('tienda_id')) {
        this.listProductosEgresoQuery();
        this.tienda_id = localStorage.getItem('tienda_id');
      }
    }, 1000);
  }

  listProductosEgresoQuery() {
    this.webService.getAllProductosEgreso(localStorage.getItem('tienda_id')).subscribe(
      response => {
        this.listProductosEgreso = response;
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

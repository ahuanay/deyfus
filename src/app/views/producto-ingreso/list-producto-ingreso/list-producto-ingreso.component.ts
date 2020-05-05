import { Component, OnInit, SimpleChanges } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-producto-ingreso',
  templateUrl: './list-producto-ingreso.component.html',
  styleUrls: ['./list-producto-ingreso.component.css']
})
export class ListProductoIngresoComponent implements OnInit {
  
  public listProductosIngreso: any;
  public filterProductoIngreso: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicilizator();
  }

  inicilizator() {
    this.listProductosIngreso = [];
    this.filterProductoIngreso = '';
    this.listProductosIngresoQuery();
  }

  listProductosIngresoQuery() {
    this.webService.getAllProductosIngreso(localStorage.getItem('tienda_id')).subscribe(
      response => {
        this.listProductosIngreso = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  reload() {
    this.inicilizator();
  }
}

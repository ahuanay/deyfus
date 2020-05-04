import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-tienda',
  templateUrl: './list-tienda.component.html',
  styleUrls: ['./list-tienda.component.css']
})
export class ListTiendaComponent implements OnInit {
  
  public listTiendas: any;
  public filterTienda: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicilizator();
  }

  inicilizator() {
    this.listTiendas = [];
    this.filterTienda = '';
    this.listTiendasQuery();
  }

  listTiendasQuery() {
    this.webService.getAllTiendas().subscribe(
      response => {
        this.listTiendas = response;        
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

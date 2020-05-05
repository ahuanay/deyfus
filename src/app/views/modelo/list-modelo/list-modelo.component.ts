import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-modelo',
  templateUrl: './list-modelo.component.html',
  styleUrls: ['./list-modelo.component.css']
})
export class ListModeloComponent implements OnInit {
  
  public listModelos: any;
  public filterModelo: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.listModelos = [];
    this.filterModelo = '';
    this.listModelosQuery();
  }

  listModelosQuery() {
    this.webService.getAllModelos().subscribe(
      response => {
        this.listModelos = response;
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

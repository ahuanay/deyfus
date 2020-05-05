import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {
  
  public listCategorias: any;
  public filterCategoria: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.listCategorias = [];
    this.filterCategoria = '';
    this.listCategoriasQuery();
    // const secondsCounter = interval(7000);
    // secondsCounter.subscribe(n => {
    //   this.listCategoriasQuery();
    // });
  }

  listCategoriasQuery() {
    this.webService.getAllCategorias().subscribe(
      response => {
        this.listCategorias = response;
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

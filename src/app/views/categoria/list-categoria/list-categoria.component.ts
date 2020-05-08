import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { SocketService } from 'src/app/service/socket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {
  
  public listCategorias: any;
  public filterCategoria: any;

  constructor(private webService: WebService, private socketService: SocketService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.inicializator();
  }

  inicializator() {
    this.spinnerService.show();
    this.listCategorias = [];
    this.filterCategoria = '';
    this.listCategoriasQuery();
    this.inicializatorSocketService();
  }

  inicializatorSocketService() {
    this.socketService.listen('models:categoria').subscribe((data) => {
      if(data) {
        this.listCategoriasQuery();
      }
    });
  }

  listCategoriasQuery() {
    this.webService.getAllCategorias().subscribe(
      response => {
        this.listCategorias = response;
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

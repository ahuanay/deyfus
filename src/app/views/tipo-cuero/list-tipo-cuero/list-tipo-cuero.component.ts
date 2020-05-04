import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-list-tipo-cuero',
  templateUrl: './list-tipo-cuero.component.html',
  styleUrls: ['./list-tipo-cuero.component.css']
})
export class ListTipoCueroComponent implements OnInit {
  
  public listTipoCuero: any;
  public filterTipoCuero: any;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.inicilizator();
  }

  inicilizator() {
    this.listTipoCuero = [];
    this.filterTipoCuero = '';
    this.listTipoCueroQuery();
  }

  listTipoCueroQuery() {
    this.webService.getAllTiposCuero().subscribe(
      response => {
        this.listTipoCuero = response;
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

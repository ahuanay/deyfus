import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  public listTiendas: any;
  public listUsuario: any;

  constructor(private router: Router, private webService: WebService) { }

  ngOnInit(): void {
    this.inicializator();
  }

  inicializator() {
    this.listTiendas = [];
    this.listTiendasQuery();
    this.listUsuario = JSON.parse(localStorage.getItem('usuario'));
    
  }

  listTiendasQuery() {
    this.webService.getActivosTiendas().subscribe(
      response => {
        this.listTiendas = response;
        localStorage.setItem('tienda_id', response[0]._id);
      },
      error => {
        console.log(error);
      }
    )
  }

  evento(e: any){
    console.log(e);
    
  }

  changeTienda(e: any) {
    localStorage.setItem('tienda_id', e.target.value);
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/auth/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  public listUsuario: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.inicializator();
  }

  inicializator() {
    this.listUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/auth/login']);
  }

}

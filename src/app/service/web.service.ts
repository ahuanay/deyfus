import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public API_Server = 'https://codbar-api.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  // Login
  postLogin(login: any): Observable<any> {
    return this.http.post(this.API_Server + 'usuarios/login/', login);
  }

  // Categorias
  getAllCategorias(): Observable<any> {
    return this.http.get(this.API_Server + 'categorias/');
  }
  getByIdCategoria(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'categorias/' + id);
  }
  createCategoria(categoria: any): Observable<any> {
    return this.http.post(this.API_Server + 'categorias/', categoria);
  }
  putCategoria(id: any, categoria: any): Observable<any> {
    return this.http.put(this.API_Server + 'categorias/' + id, categoria)
  }
  deleteCategoria(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'categorias/' + id);
  }

  // Colores
  getAllColor(): Observable<any> {
    return this.http.get(this.API_Server + 'colores/');
  }
  getByIdColor(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'colores/' + id);
  }
  createColor(color: any): Observable<any> {
    return this.http.post(this.API_Server + 'colores/', color);
  }
  putColor(id: any, color: any): Observable<any> {
    return this.http.put(this.API_Server + 'colores/' + id, color)
  }
  deleteColor(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'colores/' + id);
  }
}

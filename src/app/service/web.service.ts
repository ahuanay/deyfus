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

  // Tiendas
  getAllTienda(): Observable<any> {
    return this.http.get(this.API_Server + 'tiendas/');
  }
  getByIdTienda(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'tiendas/' + id);
  }
  createTienda(tienda: any): Observable<any> {
    return this.http.post(this.API_Server + 'tiendas/', tienda);
  }
  putTienda(id: any, tienda: any): Observable<any> {
    return this.http.put(this.API_Server + 'tiendas/' + id, tienda)
  }
  deleteTienda(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'tiendas/' + id);
  }

  // Tipo cuero
  getAllTipoCuero(): Observable<any> {
    return this.http.get(this.API_Server + 'tipos_cuero/');
  }
  getByIdTipoCuero(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'tipos_cuero/' + id);
  }
  createTipoCuero(tipoCuero: any): Observable<any> {
    return this.http.post(this.API_Server + 'tipos_cuero/', tipoCuero);
  }
  putTipoCuero(id: any, tipoCuero: any): Observable<any> {
    return this.http.put(this.API_Server + 'tipos_cuero/' + id, tipoCuero)
  }
  deleteTipoCuero(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'tipos_cuero/' + id);
  }
}

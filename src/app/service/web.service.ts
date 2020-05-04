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
  getActivosCategorias(): Observable<any> {
    return this.http.get(this.API_Server + 'categorias/activos/');
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
  getAllColores(): Observable<any> {
    return this.http.get(this.API_Server + 'colores/');
  }
  getActivosColores(): Observable<any> {
    return this.http.get(this.API_Server + 'colores/activos/');
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
  getAllTiendas(): Observable<any> {
    return this.http.get(this.API_Server + 'tiendas/');
  }
  getActivosTiendas(): Observable<any> {
    return this.http.get(this.API_Server + 'tiendas/activos/');
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
  getAllTiposCuero(): Observable<any> {
    return this.http.get(this.API_Server + 'tipos_cuero/');
  }
  getActivosTiposCuero(): Observable<any> {
    return this.http.get(this.API_Server + 'tipos_cuero/activos/');
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

  // Modelo
  getAllModelos(): Observable<any> {
    return this.http.get(this.API_Server + 'modelos/');
  }
  getActivosModelos(): Observable<any> {
    return this.http.get(this.API_Server + 'modelos/activos/');
  }
  getByIdModelo(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'modelos/' + id);
  }
  createModelo(modelo: any): Observable<any> {
    return this.http.post(this.API_Server + 'modelos/', modelo);
  }
  putModelo(id: any, modelo: any): Observable<any> {
    return this.http.put(this.API_Server + 'modelos/' + id, modelo)
  }
  deleteModelo(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'modelos/' + id);
  }
}

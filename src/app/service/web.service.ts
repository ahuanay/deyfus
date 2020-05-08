import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  // Alerta
  getAllAlertas(): Observable<any> {
    return this.http.get(this.API_Server + 'alertas/');
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

  // Producto
  getAllProductos(): Observable<any> {
    return this.http.get(this.API_Server + 'productos/');
  }
  getByIdTiendaProductos(tienda_id: any): Observable<any> {
    return this.http.get(this.API_Server + 'productos/tienda/' + tienda_id);
  }
  getByIdProducto(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'productos/' + id);
  }
  getPrecioProducto(search: any): Observable<any> {
    const params = new HttpParams()
    .set('modelo_id', search.modelo_id)
    .set('categoria_id', search.categoria_id)
    .set('tipo_cuero_id', search.tipo_cuero_id)
    .set('color_id', search.color_id)
    return this.http.get(this.API_Server + 'productos/precio/', {params} );
  }
  createProducto(producto: any): Observable<any> {
    return this.http.post(this.API_Server + 'productos/', producto);
  }
  putProducto(id: any, producto: any): Observable<any> {
    return this.http.put(this.API_Server + 'productos/' + id, producto)
  }
  deleteProducto(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'productos/' + id);
  }

  // Producto ingreso
  getAllProductosIngreso(tienda_id: any): Observable<any> {
    const params = new HttpParams()
    .set('tienda_id', tienda_id);
    return this.http.get(this.API_Server + 'productos-kardex/ingreso/', {params} );
  }
  getByIdProductoIngreso(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'productos-kardex/ingreso/' + id);
  }
  createProductoIngreso(producto_ingreso: any): Observable<any> {
    return this.http.post(this.API_Server + 'productos-kardex/ingreso/', producto_ingreso);
  }
  putProductoIngreso(id: any, producto_ingreso: any): Observable<any> {
    return this.http.put(this.API_Server + 'productos-kardex/ingreso/' + id, producto_ingreso)
  }
  deleteProductoIngreso(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'productos-kardex/ingreso/' + id);
  }

  // Producto egreso
  getAllProductosEgreso(tienda_id: any): Observable<any> {
    const params = new HttpParams()
    .set('tienda_id', tienda_id);
    return this.http.get(this.API_Server + 'productos-kardex/egreso/', {params} );
  }
  getByIdProductoEgreso(id: any): Observable<any> {
    return this.http.get(this.API_Server + 'productos-kardex/egreso/' + id);
  }
  createProductoEgreso(producto_egreso: any): Observable<any> {
    return this.http.post(this.API_Server + 'productos-kardex/egreso/', producto_egreso);
  }
  putProductoEgreso(id: any, producto_egreso: any): Observable<any> {
    return this.http.put(this.API_Server + 'productos-kardex/egreso/' + id, producto_egreso)
  }
  deleteProductoEgreso(id: any): Observable<any> {
    return this.http.delete(this.API_Server + 'productos-kardex/egreso/' + id);
  }
}

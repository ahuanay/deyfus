import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public url_imagen_server = 'http://localhost:3000/'
  // public api_server = '/api/';
  // public api_server = 'https://codbar-api.herokuapp.com/api/';
  public api_server = 'http://deyfus-api.com/api/';
  public auth_server = 'http://deyfus-api.com/api/auth/';

  constructor(private http: HttpClient) { }

  //ip publica
  getIp(): Observable<any> {
    return this.http.get('http://www.geoplugin.net/json.gp');
  }

  // Login
  postLogin(login: any): Observable<any> {
    return this.http.post(this.auth_server + 'login', login);
  }

  // Alerta
  getAllAlertas(): Observable<any> {
    return this.http.get(this.api_server + 'alertas/');
  }

  // Categorias
  getAllCategorias(): Observable<any> {
    return this.http.get(this.api_server + 'categorias/');
  }
  getActivosCategorias(): Observable<any> {
    return this.http.get(this.api_server + 'categorias/activos/');
  }
  getByIdCategoria(id: any): Observable<any> {
    return this.http.get(this.api_server + 'categorias/' + id);
  }
  createCategoria(categoria: any): Observable<any> {
    return this.http.post(this.api_server + 'categorias/', categoria);
  }
  putCategoria(id: any, categoria: any): Observable<any> {
    return this.http.put(this.api_server + 'categorias/' + id, categoria)
  }
  deleteCategoria(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'categorias/' + id);
  }

  // Colores
  getAllColores(): Observable<any> {
    return this.http.get(this.api_server + 'colores/');
  }
  getActivosColores(): Observable<any> {
    return this.http.get(this.api_server + 'colores/activos/');
  }
  getByIdColor(id: any): Observable<any> {
    return this.http.get(this.api_server + 'colores/' + id);
  }
  createColor(color: any): Observable<any> {
    return this.http.post(this.api_server + 'colores/', color);
  }
  putColor(id: any, color: any): Observable<any> {
    return this.http.put(this.api_server + 'colores/' + id, color)
  }
  deleteColor(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'colores/' + id);
  }

  // Tiendas
  getAllTiendas(): Observable<any> {
    return this.http.get(this.api_server + 'tiendas/');
  }
  getActivosTiendas(): Observable<any> {
    return this.http.get(this.api_server + 'tiendas/activos/');
  }
  getByIdTienda(id: any): Observable<any> {
    return this.http.get(this.api_server + 'tiendas/' + id);
  }
  createTienda(tienda: any): Observable<any> {
    return this.http.post(this.api_server + 'tiendas/', tienda);
  }
  putTienda(id: any, tienda: any): Observable<any> {
    return this.http.put(this.api_server + 'tiendas/' + id, tienda)
  }
  deleteTienda(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'tiendas/' + id);
  }

  // Tipo cuero
  getAllTiposCuero(): Observable<any> {
    return this.http.get(this.api_server + 'tipos_cuero/');
  }
  getActivosTiposCuero(): Observable<any> {
    return this.http.get(this.api_server + 'tipos_cuero/activos/');
  }
  getByIdTipoCuero(id: any): Observable<any> {
    return this.http.get(this.api_server + 'tipos_cuero/' + id);
  }
  createTipoCuero(tipoCuero: any): Observable<any> {
    return this.http.post(this.api_server + 'tipos_cuero/', tipoCuero);
  }
  putTipoCuero(id: any, tipoCuero: any): Observable<any> {
    return this.http.put(this.api_server + 'tipos_cuero/' + id, tipoCuero)
  }
  deleteTipoCuero(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'tipos_cuero/' + id);
  }

  // Modelo
  getAllModelos(): Observable<any> {
    return this.http.get(this.api_server + 'modelos/');
  }
  getActivosModelos(): Observable<any> {
    return this.http.get(this.api_server + 'modelos/activos/');
  }
  getByIdModelo(id: any): Observable<any> {
    return this.http.get(this.api_server + 'modelos/' + id);
  }
  createModelo(modelo: any): Observable<any> {
    return this.http.post(this.api_server + 'modelos/', modelo);
  }
  putModelo(id: any, modelo: any): Observable<any> {
    return this.http.put(this.api_server + 'modelos/' + id, modelo)
  }
  deleteModelo(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'modelos/' + id);
  }

  // Producto
  getAllProductos(): Observable<any> {
    return this.http.get(this.api_server + 'productos/');
  }
  getByIdTiendaProductos(tienda_id: any): Observable<any> {
    return this.http.get(this.api_server + 'productos/tienda/' + tienda_id);
  }
  getByIdProducto(id: any): Observable<any> {
    return this.http.get(this.api_server + 'productos/' + id);
  }
  getPrecioProducto(search: any): Observable<any> {
    const params = new HttpParams()
    .set('modelo_id', search.modelo_id)
    .set('categoria_id', search.categoria_id)
    .set('tipo_cuero_id', search.tipo_cuero_id)
    .set('color_id', search.color_id)
    return this.http.get(this.api_server + 'productos/precio/', {params} );
  }
  createProducto(producto: any): Observable<any> {
    return this.http.post(this.api_server + 'productos/', producto);
  }
  putProducto(id: any, producto: any): Observable<any> {
    return this.http.put(this.api_server + 'productos/' + id, producto)
  }
  deleteProducto(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'productos/' + id);
  }

  // Producto ingreso
  getAllProductosIngreso(tienda_id: any): Observable<any> {
    const params = new HttpParams()
    .set('tienda_id', tienda_id);
    return this.http.get(this.api_server + 'productos-kardex/ingreso/', {params} );
  }
  getByIdProductoIngreso(id: any): Observable<any> {
    return this.http.get(this.api_server + 'productos-kardex/ingreso/' + id);
  }
  createProductoIngreso(producto_ingreso: any): Observable<any> {
    return this.http.post(this.api_server + 'productos-kardex/ingreso/', producto_ingreso);
  }
  putProductoIngreso(id: any, producto_ingreso: any): Observable<any> {
    return this.http.put(this.api_server + 'productos-kardex/ingreso/' + id, producto_ingreso)
  }
  deleteProductoIngreso(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'productos-kardex/ingreso/' + id);
  }

  // Producto egreso
  getAllProductosEgreso(tienda_id: any): Observable<any> {
    const params = new HttpParams()
    .set('tienda_id', tienda_id);
    return this.http.get(this.api_server + 'productos-kardex/egreso/', {params} );
  }
  getByIdProductoEgreso(id: any): Observable<any> {
    return this.http.get(this.api_server + 'productos-kardex/egreso/' + id);
  }
  createProductoEgreso(producto_egreso: any): Observable<any> {
    return this.http.post(this.api_server + 'productos-kardex/egreso/', producto_egreso);
  }
  putProductoEgreso(id: any, producto_egreso: any): Observable<any> {
    return this.http.put(this.api_server + 'productos-kardex/egreso/' + id, producto_egreso)
  }
  deleteProductoEgreso(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'productos-kardex/egreso/' + id);
  }

  // Solicitud envio
  getAllSolicitudesEnvio(): Observable<any> {
    return this.http.get(this.api_server + 'solicitudes-envio/');
  }
  getByIdSolicitudEnvio(id: any): Observable<any> {
    return this.http.get(this.api_server + 'solicitudes-envio/' + id);
  }
  createSolicitudEnvio(solicitud_envio: any): Observable<any> {
    return this.http.post(this.api_server + 'solicitudes-envio/', solicitud_envio);
  }
  putSolicitudEnvio(id: any, solicitud_envio: any): Observable<any> {
    return this.http.put(this.api_server + 'solicitudes-envio/' + id, solicitud_envio)
  }
  deleteSolicitudEnvio(id: any): Observable<any> {
    return this.http.delete(this.api_server + 'solicitudes-envio/' + id);
  }
}

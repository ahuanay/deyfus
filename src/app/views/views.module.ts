import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ColorModule } from './color/color.module';
import { TiendaModule } from './tienda/tienda.module';
import { TipoCueroModule } from './tipo-cuero/tipo-cuero.module';
import { ModeloModule } from './modelo/modelo.module';
import { ProductoIngresoModule } from './producto-ingreso/producto-ingreso.module';
import { ProductoModule } from './producto/producto.module';
import { ProductoEgresoModule } from './producto-egreso/producto-egreso.module';
import { SolicitudEnvioModule } from './solicitud-envio/solicitud-envio.module';
import { SolicitudCompletadoModule } from './solicitud-completado/solicitud-completado.module';
import { IncidenciaEnvioModule } from './incidencia-envio/incidencia-envio.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CategoriaModule,
    ColorModule,
    TiendaModule,
    TipoCueroModule,
    ModeloModule,
    ProductoModule,
    ProductoIngresoModule,
    ProductoEgresoModule,
    SolicitudEnvioModule,
    SolicitudCompletadoModule,
    IncidenciaEnvioModule
  ]
})
export class ViewsModule { }

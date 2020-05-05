import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ColorModule } from './color/color.module';
import { TiendaModule } from './tienda/tienda.module';
import { TipoCueroModule } from './tipo-cuero/tipo-cuero.module';
import { ModeloModule } from './modelo/modelo.module';
import { ProductoIngresoModule } from './producto-ingreso/producto-ingreso.module';

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
    ProductoIngresoModule
  ]
})
export class ViewsModule { }

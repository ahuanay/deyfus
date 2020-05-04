import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ColorModule } from './color/color.module';
import { TiendaModule } from './tienda/tienda.module';
import { TipoCueroModule } from './tipo-cuero/tipo-cuero.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CategoriaModule,
    ColorModule,
    TiendaModule,
    TipoCueroModule
  ]
})
export class ViewsModule { }
